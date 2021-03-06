//定义常量
var JPUSHCONSTANT = {
	ACTION:{
		GOWEB:'GOWEB',
		GOPAGE:'GOPAGE',
		GONAV:'GONAV',
	},
	EVENT:{
		PAYSUCCESS:'PAYSUCCESS'
	},
	//跳转某个页面
	PAGENAME:['jpushGoSysMsg']
};
//初始化
function jpushInit() {
	if (api.systemType == 'android') {
		//android系统推送初始化
		var ajpush = api.require('ajpush');
		ajpush.init(function(ret) {
			if (ret && ret.status){
				console.log(getLogStr(['jpushInit',ret]));
				jpushClickAndroid();
			}
		});
	} else {

		//ios系统推送初始化
		jpushClickIos();
		jpushListen();

	}
	jpushSetParams();
	jpushGetId();
}


function jpushGetId(){
	var ajpush = api.require('ajpush');
	ajpush.getRegistrationId(function(ret) {
		var registrationId = ret.id;
		console.log(getLogStr(['jpushGetId-------',ret]));
		//alert('jpushGetId-------'+registrationId);
	});
}

//设置jpush alias tags
function jpushSetParams(){
	var deviceId = api.deviceId;
	var alias = deviceId.split('-').join('');
	//alert('jpushSetParams/'+alias);
	var ajpush = api.require('ajpush');
	ajpush.bindAliasAndTags({
		alias:alias
	}, function(ret) {
		console.log(getLogStr(['jpushSetParams',alias,ret]));
	});
}

//ios在前台监听极光推送
function jpushListen(){

	var ajpush = api.require('ajpush');
	ajpush.setListener(function(ret){

		console.log(getLogStr(['jpushListen',ret]));
		if(ret && ret.content && ret.extra && ret.extra.action){
			api.confirm({
				title: '多啦衣梦通知',
				msg: ret.content,
				buttons: ['查看', '忽略']
			}, function(confirmRet, err) {
				var index = confirmRet.buttonIndex;
				if(index == 1){
					jpushClickHanlder(ret);
				}
			});
		}else if(ret &&  ret.extra && ret.extra.event){
			jpushClickHanlder(ret);
		}
	});
}

//android监听点击状态栏通知
function jpushClickAndroid(){
	api.addEventListener({
		name : 'appintent'
	}, function(ret) {
		console.log(getLogStr(['jpushClickAndroid',ret]));
		if(ret){
			jpushClickHanlder(ret);
		}

	});
}

//ios在退出应用和应用在后台运行，监听点击状态栏通知
function jpushClickIos(){
	api.addEventListener({
		name : 'noticeclicked'
	}, function(ret) {
		console.log(getLogStr(['jpushClickIos',ret]));
		if(ret && ret.value){
			jpushClickHanlder(ret.value);
		}
	});
}

//应用场景
/**
 * 注意：
 * 页面参数param 如果是单个参数传字符串，多个参数传对象
 * 参数值一定为字符串类型
1. 跳转WEBURL活动页面
"extras": {
	action: "GOWEB"(常量)
	data: "http://www.baidu.com",（跳转data指定的url页面，添加http://）
	param: "百度"(页面标题)
}

2. 跳转APP某个页面
"extras": {
	action: "GOPAGE"(常量)
	data: "CLOTHES",(跳转页面名称)
	param: "155002"(页面参数)
}

3. 跳转APP底部某个导航
"extras": {
	action: "GONAV"(常量)
	data: "1",(跳转第几个导航:1,2,3,4)第0个不设置，打开app默认是第0个
}

4. 发送某个事件
"extras": {
	event: "提醒缴费"(常量)
	data:
}
**/

//收到自定义的参数进行业务处理
function jpushClickHanlder(ret){
	console.log(getLogStr(['jpushClickHanlder',ret]));
	var systemType = api.systemType;
	var extra = {};
	if (systemType == 'ios') {
		jpushClearBadgeIos();
		extra = ret.extra || {};
	}else if(systemType == 'android' && ret.appParam && ret.appParam.ajpush){
		extra = ret.appParam.ajpush.extra ? ret.appParam.ajpush.extra : {};
	}
	if(typeof extra == 'string'){
		extra = JSON.parse(extra);
	}
	var event = extra.event ? extra.event : '';
	var action = extra.action ? extra.action : '';
	var data = extra.data ? extra.data : '';
	var param = extra.param ? extra.param : '';
	console.log(getLogStr(['jpushInfo',action,event,data,param]));
	if(action){
		if(action == JPUSHCONSTANT.ACTION.GOWEB && data){
			//跳转活动页面
			jpushGoWebUrl(data,param);
		}else if(action == JPUSHCONSTANT.ACTION.GONAV && data){
			//跳转底部导航
		}else if(action == JPUSHCONSTANT.ACTION.GOPAGE && data){
			//跳转某个页面
			jpushGoPage(data,param);

		}
	}else if(event){
		if(event == JPUSHCONSTANT.EVENT.PAYSUCCESS && data){
			//执行缴费成功事件
		}
	}
}


//清除ios push 角标的通知
function jpushClearBadgeIos(){
	var ajpush = api.require('ajpush');
	ajpush.setBadge({
		badge:0
	});
}

//清除状态栏的通知
function jpushClearNotification(){
	var ajpush = api.require('ajpush');
	var param = {id:-1};
	ajpush.clearNotification(param,function(ret) {
		console.log(getLogStr(['jpushClearNotification',ret]));
	});
}

//停止推送
function jpushStop(){
	var ajpush = api.require('ajpush');
	ajpush.stopPush(function(ret) {
		console.log(getLogStr(['jpushStop',ret]));
		if(ret && ret.status){
		}
	});
}

//开启推送,默认开启
function jpushStart(){
	var ajpush = api.require('ajpush');
	ajpush.resumePush(function(ret) {
		console.log(getLogStr(['jpushStart',ret]));
		if(ret && ret.status){
		}
	});
}

//跳转到webUrl页面
function jpushGoWebUrl(page,title){
	goWebUrl('jpushWebUrl',page,title);
}


//跳转到App内某个页面
function jpushGoPage(data,param){
	if(JPUSHCONSTANT.PAGENAME.indexOf(data) != -1){
		var functionName = getExecScript(data,[param]);
		console.log(getLogStr([functionName]));
		eval(functionName);
	}
}

//跳转系统消息页面
function jpushGoSysMsg(){
	var name = 'msg';
	var title = '我的消息';
	var leftIcon = 'duola-iconfont icon-left';
	var leftNav = setNavData(leftIcon);
	var border = true;
	var bounces = true;
	var params = {};
	params.nav= setNav(leftNav,border);
	params.frame=setFrame(bounces);
	var from = {
		winName: api.winName,
		frameName: api.frameName
	};
	var url = 'header_web.html';
	openNewWinFrame(name,title,params,from,url);
}
