//定义常量
var PROMODETAILS = {
	noOrder : '已经缴费',
	dueMember : '已经过期',
	register : '已经注册',
	received : '已经领取优惠券'
};

var CONSTANT = {
	SWITCH:{
		BETAUSER:false,//beta用户
		MEIQIA: true,//美恰客服开关
		ONLINECHAT: false,//在线客服开关
	},
	REM:parseInt($api.cssVal($api.dom('html'),'font-Size')),
	REG:{
		MOBILE: /^1[34578]\d{9}$/
	},
	CACHECLASSNAME:'duo-cache-img',
	CACHEPAGEID:'duo-cache-page-',
	TEXT:{
		PRESELBEFORE: '春季预选',
		DESIGN: '独立设计',
		ANNUALONLY: '年费专享'
	},
	DEFAULTRECOMMENDCODE: 'duola1mn',
	PICPRE:{
		IMG:'http://img.duolayimeng.com/',
		RES:'http://res.duolayimeng.com/',
		BRAND:'http://img.duolayimeng.com/brand/',
		COMMENT:'/community/',
		AVATAR:'/avatar/',
		TRYREPORT:'/tryReport/'
	},
	PICTUREOSS:{
		Q5:'@5q',
		Q15:'@15q',
		Q20:'@20q',
		Q25:'@25q',
		Q40:'@40q',
		Q50:'@50q',
		Q60:'@60q',
		Q80:'@80q',
		W960:'@960w',
		SHARE:'@!45w75h',
		COMMENTIMG: '@90w',
		CLOTHESLIST:'@320w_90q',
		CLOTHESLISTQ25:'@320w_25q',
		CLOTHESLISTQ5:'@320w_5q',
		ANNUAL:'@400w',
		ORDER:'@120w'
	},
	UMENGEVENT:{
		PAGE_ACCOUNT:'um_count_page_account',//手机号验证页面
		BTN_APP:'um_count_btn_app',//app滑动引导
		BTN_SCODE:'um_count_btn_scode',//点击发送验证码
		CODE_SUCCESS:'um_count_code_success',//验证码验证通过
		PAGE_REGIN:'um_count_page_regin',//登录注册页
		BTN_REGIN:'um_count_btn_regin',//点击登录注册逛逛
		NEW_IN_SUCCESS:'um_count_new_in_success',//新用户登录成功
		PAGE_VIP:'um_count_page_vip',//新用户缴费
		BTN_VIP_MORE:'um_count_btn_vip_more',//点击缴费更多选择
		VIP_CODE:'um_count_vip_code',//输入推荐码
		VIP_CODE_SUCCESS:'um_math_vip_code_success',//有效推荐码
		VIP_SUCCESS:'um_math_vip_success',//新用户缴费成功
		PAGE_BINDTEL:'um_count_page_bindtel',//第三方登录绑定手机页面
		B3TH_TEL_SUCCESS:'um_count_3th_tel_success',//第三方登录绑定手机页面
		PAGE_USENOW:'um_count_page_usenow',//新用户使用指南页面
		BTN_USENOW:'um_count_btn_usenow',//点击新用户使用指南页面
		BTN_VIP:'um_count_btn_vip',//点击开通会员
		BTN_REGIN_INDEX:'um_count_btn_regin_index',//点击首页登录注册
		ICON_MODULE:'um_count_icon_module',
		HOT_MODULE:'um_count_hot_module',
		SHARE_AWARD:'um_count_share_award',
		THEME:'um_count_theme',
		DESIGN_LIST:'um_count_design_list',
		ONLINE_SERVICE:'um_count_online_service',
		MSG:'um_count_msg',
		LEVEL1:'um_count_level1',
		LEVEL2:'um_count_level2',
		STYLE:'um_count_style',
		OCCASION:'um_count_occasion',
		SIZE:'um_count_size',
		SEASON:'um_count_season',
		SEARCH_BTN:'um_count_search_btn',
		CHOOSE:'um_count_choose',
		FOOTER_TAB:'um_count_footer_tab',
		DORABAG:'um_count_dorabag',
		ORDER:'um_count_order',
		LOGIN:'um_count_login',//老用户登录
		USER_CENTER:'um_count_user_center',
		CLOUDSET:'um_count_cloud_set',
		YEAR:'um_count_year',
		SCROLL_PICTURE:'um_count_scroll_picture',
		DESIGN_SCROLL_PICTURE:'um_count_design_scroll_picture',
		CLOTH_DETAIL:'um_count_cloth_detail',
		COLLECT_CLOTH:'um_math_collect_cloth',
		BAG_CLOTH:'um_math_bag_cloth',
		ORDER_CLOTH:'um_math_order_cloth',
		COLLECT_BRAND:'um_math_collect_brand',
		CHOOSE_CONDITION:'um_math_choose_condition',
		COMMENT:'um_math_comment',
		APPAD:'um_count_app_ad',
		MONEY:'um_math_money',
		BUY:'um_math_buy_cloth',
		BUY_BTN:'um_math_buy_cloth_btn',
		OTHER_AD:'um_count_other_ad',
		SIMILAR_BTN:'um_count_similar_btn'
	},
	PAGE:{
		INDEX:['首页','云衣橱','我的衣橱','我的','独立设计'],
		YEARVIP:['上新先选','专享礼服'],
		LOGIN:'用户登录',
		CLOTHDETAIL:'衣服详情页',
		LEVEL2:'二级分类页',
		FILTER:'筛选',
		NEWADDR:'新增地址',
		DELIVERY:'我的收货地址',
		UPDATEPWD:'修改密码'
	},
	INDEXLOGIN:[false,false,true,true],//frameGroup 需要登录
	ACTIONREFRESH : 'refresh',
	ACTIONLOAD : 'load',
	ACTIONINIT : 'init',
	INDEX : 'index',
	USER: 'user',
	MAXSTRLENGTH : 7,
	MAXCOMMENTLENGTH : 500,
	MAXLIEVEL1 : 12,
	PAGESIZE : 20,
	//UISCROLLPICTURERATE: 1/1,//首页轮播图片比例
	UISCROLLPICTURERATE: 16/9,//首页轮播图片比例
	SIZES : ['均码','S','M','L','XS','XL','XXS','XXL'],
	SEASON : ['秋装','冬装','春装','夏装'],
	SIZESALL : ['全部','XXS','XS','S','M','L','XL','均码'],
	SEASONALL : ['全部','秋装','冬装','春装','夏装'],
	DRESS : ["全部","A字裙", "背心裙", "长裙", "包裙", "旗袍", "吊带裙", "鱼尾裙", "百褶裙", "衬衣裙", "小礼裙", "背带裙"],
	COAT:['外套','上衣','马夹','连衣裙','裤装','半裙','套装'],
	WEIXINAPPKEY: 'wx4a8df4d0d29958b4',
	WEIXINAPPSECRET: '04fbbcca27b64c9e387447b867d7cf2c',
	MEIQIAAPPKEY: 'cb0e55a92541645fc8b143bb46aa894f'
};
//打开扫码模块
function openScan(callback,extra){
	var FNScanner = api.require('FNScanner');
	FNScanner.openScanner({
		autorotation: true
	}, function(ret, err){
		console.log(getLogStr([ret,err]));
		if( ret && ret.eventType=='success'){
			if(isDefine(callback)){
				callback(ret.content,extra);
			}
		}
	});
}

//dot template
function doTHtml(templateId,data){
	var elTemplate = doT.template($api.byId(templateId).innerHTML);
	return elTemplate(data);
}
function doHtml(regionId,templateId,data){
	var elTemplate = doT.template($api.byId(templateId).innerHTML);
	$api.html($api.byId(regionId),elTemplate(data));
	api.parseTapmode();
}


function doAppend(regionId,templateId,data){
	var elTemplate = doT.template($api.byId(templateId).innerHTML);
	$api.append($api.byId(regionId),elTemplate(data));
	api.parseTapmode();
}

function hideMobile(mobileNum) {
	if (mobileNum) {
		return mobileNum.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
	}
	return "无手机号码";
}
//拼接img的url
function getImgUrl(pre,img,style){
	return pre+img+style;
}
function getImgUrl2(img){

	return img.join("");
}

//判断是否抢光
function isAvailable(available){
	return available != 'YES';
}

//判断是否新款
function isNew(value){
	return value == 'YES';
}

//加载框
function loadingShow(modal,title,text){
	if(!isDefine(modal)){
		modal = true;
	}
	if(!isDefine(title)){
		title = '数据加载中';
	}
	if(!isDefine(text)){
		text = '请稍候';
	}
	api.showProgress({
		style: 'default',
		animationType: 'fade',
		title: title,
		text: text,
		modal: modal
	});
}

function loadingHide(){
	api.hideProgress();
}

//截取字符串长度
function subStr(str,lenght){
	if(!isDefine(str)){
		str = '...';
	}
	return str.length > lenght ? str.substring(0, lenght-2) + '...' : str;
}
//下拉刷新
function pullRefresh(callback){
	api.setRefreshHeaderInfo({
		visible: true,
		loadingImg: 'widget://image/refresh.png',
		bgColor: '#eee',
		textColor: '#aaa',
		textDown: '下拉刷新',
		textUp: '松开刷新',
		showTime: true
	}, function(ret, err){
		if(ret){
			if(isDefine(callback)){
				callback();
			}
		}
	});
}


//下拉刷新完成
function pullRefreshDone (callback){
	api.refreshHeaderLoadDone();
	if(isDefine(callback)){
		callback();
	}
}

//显示加载更多
function showLoadMore(text){
	if(!isDefine(text)){
		text = '加载更多';
	}
	var loadMore = $api.dom('.load-more');
	if(loadMore){
		$api.text(loadMore, text);
	}
}

//关闭窗口win
function closeWin(name){
	if(isDefine(name)){
		api.closeWin({
			name: name
		});
	}else{
		api.closeWin();
	}
}

// 取日期
function  getDate(date) {
	var data = /(\d{4}-\d{2}-\d{2})/.exec(date);
	return data !== null ?data[0]:date;
}

//去衣服详情页
function showClothes(id,preSoldBefore,urls){
	if(id == 0){
		toastMsg('无效服装ID');
		return;
	}
	var name = 'winShow_new';
	var url = urls ? '../winShow_new.html': 'winShow_new.html';
	var data = {
		id: id,
		preSoldBefore: preSoldBefore,
		from:{
			winName: api.winName,
			frameName: api.frameName
		}
	};
	openNewWin(name,null,data,null,url,null,null);
}

//去衣服详情页
function showClothes2(id,preSoldBefore,fromWinName){
	if(id == 0){
		toastMsg('无效服装ID');
		return;
	}
	console.log(getLogStr([api.winName,fromWinName]));
	var name = 'winShow_new2';
	if(api.winName.indexOf('2') != -1){
		name = 'winShow_new';
	}
	if(fromWinName == name){
		api.closeWin({name:fromWinName});
	}
	var page = 'winShow_new';
	var url = 'winShow_new.html';
	var data = {
		id: id,
		preSoldBefore: preSoldBefore,
		from:{
			winName: api.winName,
			frameName: api.frameName
		}
	};
	openNewWin(name,null,data,null,url,null,null,page);

}

function getClothesId(_id,preSoldBefore){
	return "showClothes('" +_id+ "','"+preSoldBefore+"')";
}

//判断是否登录
function isLogin(token){
	if(!isDefine(token)){
		token = $api.getStorage('token');
	}
	if(!isDefine(token)){
		return false;
	}
	return true;
}
//判断是否是会员
function isMember(){
	var isMember = $api.getStorage('isMember');
	if(!isDefine(isMember)){
		return false;
	}
	return true;
}

//判断是否绑定手机号
function isBindPhone(tel){
	if(!isDefine(tel)){
		tel = $api.getStorage('userPhone');
	}
	if(!isDefine(tel)){
		return false;
	}
	return true;
}
//关闭App
function closeApp(){
	api.closeWidget({
		animation: {
			type: 'flip',
			subType: 'from_bottom',
			duration: 500
		}
	});
}
//打开登录窗口
function goLogin(from,url,data){
	//var name = 'loginBetter';
	//var title = "";
	//data = data || {};
	//url = url ||'winLogin.html';
	//var animation = {
	//	type:'movein',
	//	subType:'from_bottom',win_regin
	//	duration:300
	//};
	//openNewWin(name,title,data,from,url,animation);
	api.openWin({
		name: 'reginWin',
		url: url || 'win_regin.html' ,
		animation: {
			type:"movein",
			subType:'from_bottom',
			duration:300
		},
		pageParam:{
			from:{
				winName:api.winName,
				frameName:api.frameName
			}
		},
		bounces:false,
		scrollEnabled:false,
		vScrollBarEnabled:false,
		slidBackType:'edge',
		allowEdit:true
	});

}

//打开绑定电话号码窗口
function goWXTelBind(from){
	var name = 'bind_new';
	var title = '绑定电话号码';
	var data = {};
	var url ='';
	var animation = {
		type:'movein',
		subType:'from_bottom'
	};
	openNewWin(name,title,data,from,url,animation);
}

//打开新窗体
function openNewWin(name,title,params,from,url,animation,page){
	if (!isDefine(url)) {
		url = 'win.html';
	}
	if(from == CONSTANT.INDEX){
		url = './html/' + url;
	}
	if(from == CONSTANT.USER){
		url = '../' + url;
	}
	if(!isDefine(animation)){
		animation = {
			type:"push",                //动画类型（详见动画类型常量）
			subType:"from_right",       //动画子类型（详见动画子类型常量）
			duration:300                //动画过渡时间，默认300毫秒
		};
	}
	page = isDefine(page) ? page : name;
	console.log(getLogStr(new Array('openNewWin',name,url,animation,{
		page: page,
		title: title,
		name: name,
		data: params
	})));
	api.openWin({
		name: name,
		url: url,
		animation: animation,
		softInputMode:'resize',
		pageParam:{
			page: page,
			title: title,
			name: name,
			data: params
		}
	});
}

//打开新窗体和内置frame
function openNewWinFrame(name,title,params,from,url,animation,page,umengPage){
	if (!isDefine(url)) {
		url = 'header_new.html';
	}
	if(api.winName == 'root' && (from.frameName == null || from.frameName == '')){
		url = './html/' + url;
	}
	if(!isDefine(animation)){
		animation = {
			type:"push",                //动画类型（详见动画类型常量）
			subType:"from_right",       //动画子类型（详见动画子类型常量）
			duration:300                //动画过渡时间，默认300毫秒
		};
	}
	page = isDefine(page) ? page : name+'.html';
	umengPage = isDefine(umengPage) ? umengPage : title;
	var winName = name+'Win';
	var frameName = name+'Frame';
	console.log(getLogStr(new Array('openNewWinFrame',winName,url,{
		page: page,
		name: frameName,
		animation: animation,
		title: title,
		from:from,
		data: params,
		umengPage:umengPage
	})));
	api.openWin({
		name: winName,
		url: url,
		animation: animation,
		softInputMode:'resize',
		slidBackType:'edge',
		delay:100,
		pageParam:{
			page: page,
			name: frameName,
			title: title,
			from:from,
			data: params,
			umengPage:umengPage
		}
	});
}

//设置导航左右侧
//callback 不能是function对象，只能是字符串函数名
function setNavData(icon,text,callback,extra,navClass){
	if(!isDefine(text)){
		text = '';
	}
	if(!isDefine(extra)){
		extra = '';
	}
	return {
		icon:icon,
		text:text,
		callback:callback,
		extra:extra,
		navClass:navClass
	}
}
//设置导航栏
function setNav(leftNav,border,rightNav,headerBg){
	return {
		leftNav:leftNav,
		border:border,
		rightNav:rightNav,
		headerBg:headerBg
	}
}
//设置导航栏左侧
function getNavLeft(navParam){
	if(!isObj(navParam)){
		return;
	}
	var icon = navParam.icon ? navParam.icon : '';
	var text = navParam.text ? navParam.text : '';
	var navClass = navParam.navClass ? navParam.navClass : '';

	if(!isDefine(icon)){
		return;
	}
	if(isDefine(icon)){
		var iconEl = $api.byId('nav-left-icon');
		if(iconEl){
			var icons = icon.split(' ');
			icons.map(function(value){
				$api.addCls(iconEl,value);
			});
		}
	}
	if(isDefine(text)){
		var textEl = $api.byId('nav-left-text');
		if(textEl){
			$api.html(textEl,text);
		}
	}
	if(isDefine(navClass)){
		var iconEl = $api.byId('nav-left-icon');
		var textEl = $api.byId('nav-left-text');
		if(textEl){
			$api.addCls(textEl,navClass);
		}
		if(iconEl){
			$api.addCls(iconEl,navClass);
		}
	}

}
//设置导航栏右侧
function getNavRight(navParam){
	if(!isObj(navParam)){
		return;
	}
	var icon = navParam.icon ? navParam.icon : '';
	var text = navParam.text ? navParam.text : '';
	var navClass = navParam.navClass ? navParam.navClass : '';
	if(isDefine(icon)){
		var iconEl = $api.byId('nav-right-icon');
		if(iconEl){
			var icons = icon.split(' ');
			icons.map(function(value){
				$api.addCls(iconEl,value);
			});
		}
	}
	if(isDefine(text)){
		var textEl = $api.byId('nav-right-text');
		if(textEl){
			$api.html(textEl,text);
		}
	}
	if(isDefine(navClass)){
		var iconEl = $api.byId('nav-right-icon');
		var textEl = $api.byId('nav-right-text');
		if(textEl){
			$api.addCls(textEl,navClass);
		}
		if(iconEl){
			$api.addCls(iconEl,navClass);
		}
	}
}

//设置内置frame
function setFrame(bounces,data,allowEdit,progress,scaleEnabled,vScrollBarEnabled){
	return {
		bounces:bounces,
		allowEdit:allowEdit,
		progress:progress,
		scaleEnabled:scaleEnabled,
		vScrollBarEnabled:vScrollBarEnabled,
		data:data
	}
}

//设置标题
function getTitle(title){
	var el = $api.byId('nav-title');
	if(el){
		$api.html(el, title);
	}
}
//设置导航栏底部边框
function getNavBorder(border){
	if(border){
		var header = $api.byId('header');
		if(header){
			$api.addCls(header, 'border-bottom');
		}
	}
}

//拼接execScript
//注意注意，所有参数都是已字符串格式传递，失去原有的数据格式
function getExecScript(callback,paramArray){
	var paramStr = callback+"('";

	for(var i in paramArray){
		if(typeof paramArray[i] == 'object'){
			paramStr += JSON.stringify(paramArray[i]);
		}else if(typeof paramArray[i] != 'undefined'){
			paramStr += paramArray[i];
		}
		if(i != paramArray.length - 1){
			paramStr +="','";
		}
	}
	paramStr += "')";
	return paramStr;
}

//打开新的frame
function openNewFrame(name,page,bounces,rect,data,vScrollBarEnabled,hScrollBarEnabled,allowEdit,progress,scaleEnabled,animation){
	if(!isDefine(vScrollBarEnabled)){
		vScrollBarEnabled = true;
	}else{
		vScrollBarEnabled = false;
	}
	if(!isDefine(hScrollBarEnabled)){
		hScrollBarEnabled = false;
	}
	if(!isDefine(allowEdit)){
		allowEdit = false;
	}
	if(!isDefine(progress)){
		progress = {};
	}
	if(!isDefine(animation)){
		animation = {
			type:'none'
		};
	}
	console.log(getLogStr(new Array('openNewFrame',name,page,rect,bounces,progress,allowEdit,data,vScrollBarEnabled,hScrollBarEnabled,allowEdit,progress,scaleEnabled,animation)));
	api.openFrame({
		name: name,
		url: page,
		rect: rect,
		bounces: bounces,
		progress: progress,
		allowEdit: allowEdit,
		scaleEnabled: scaleEnabled,
		softInputMode:'resize',
		pageParam:{
			data: data,
		},
		animation:animation,
		vScrollBarEnabled: vScrollBarEnabled,
		hScrollBarEnabled: hScrollBarEnabled
	});
}


//检查登录
function checkLogin(){
	var token =$api.getStorage('token');
	if(token==undefined||token=="undefined"){
		return false;
	}else{
		return true ;
	}
}
//关闭页面
function closeThisWin(){
	//api.execScript({
	//	name:'root',
	//	script: 'hideLoading()'
	//});
	//api.execScript({
	//	name:'root',
	//	frameName:'footer_tab_1',
	//	script: 'init()'
	//});
	api.closeWin();
}
//跳转登录页面
function toLogin(source){
	//api.openWin({
	//    name: 'loginBetter',
	//    url: 'winLogin.html',
	//    animation: {
	//	    type:"none",
	//	    subType:'from_bottom',
	//	    duration:300
	//	},
	//	softInputMode:'resize',
	//	bounces:false,
	//	scrollEnabled:false,
	//	vScrollBarEnabled:false,
	//    pageParam: {
	//        title: '用户登录',
	//        page: 'loginBetter',
	//        bounces: false,
	//        data: ''
	//    }
	//});
	api.openWin({
		name: 'reginWin',
		url: 'win_regin.html',
		animation: {
			type:"movein",
			subType:'from_bottom',
			duration:300
		},
		bounces:false,
		scrollEnabled:false,
		vScrollBarEnabled:false,
		slidBackType:'edge',
		allowEdit:true
	});
}

//跳转我的多啦袋页面
function toMyBag(mybag){
	api.openWin({
		name: 'myDrabag',
		url: 'winBag.html',
		animation: {
			type:"none",
			subType:'from_bottom',
			duration:600
		},
		pageParam: {
			title: '我的多啦袋',
			page: 'myDrabag',
			bounces: true,
			data: mybag
		}
	});
}
//客服
var token;
function openMeChat(){
	token = $api.getStorage('token');
	if(token=='undefined'||token==undefined){
		api.openWin({
			name: 'login',
			url: 'win.html',
			pageParam:{
				page: 'login',
				title: '登录'
			},
			animation:{
				type:'movein',
				subType:'from_bottom'
			}
		});
	}else{
		sendEventUmeng(CONSTANT.UMENGEVENT.ONLINE_SERVICE,{
			from:'我的'
		});
		api.openWin({
			name: '在线客户',
			url: 'winWeb.html',
			pageParam:{
				page: 'winWeb',
				title: '在线客服',
				url:'http://m.duolayimeng.com/chatService?token='+token
			}
		});
	}
//	toastMsg('暂未开通此服务')
//	return
//	var systemType = api.systemType;
//	if(systemType=='ios'){
//		var key = '5548dde34eae35c729000016';
//	}else{
//		var key = '5548dac34eae35c829000018';
//	}
//	
//	var obj = api.require('meChat');
//	obj.initMeChat({
//	    appkey:key
//	});
//	obj.addUserInfo({
//	    realName: $api.getStorage('uzUserName'),
//	    tel:$api.getStorage('uzaUserPhone'),
//	    sex: $api.getStorage('uzUserSex'),
//	    comment:str
//  });
//	obj.show();
}

//过滤字符
function _stripscript(s) {
	var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{}【】‘；：”“'。，、？]")
	var rs = "";
	for (var i = 0; i < s.length; i++) {
		rs = rs + s.substr(i, 1).replace(pattern, '');
	}
	return rs;
}
//打开新窗口
function _openWin(t,w,f){
	api.openWin({
		name: w,
		url: w+'.html',
		pageParam: {
			title: t,
			page: f
		}
	});
}
//显示PAGE
function _showPage(){
	$api.removeCls($api.byId('main'), 'hide');
}
//隐藏PAGE
function _hidePage(){
	$api.addCls($api.byId('main'), 'hide');
}

//关闭窗口
function _closeWin(){
	api.closeWin();
}
//打开新网页
function _openWeb(t,w,url){
	api.openWin({
		name: w,
		url: w+'.html',
		pageParam: {
			title: t,
			url: url
		}
	});
}

//获取input值
function _getInputVal(id){
	var val = $api.val($api.byId(id));
	return val;
}
//获取html值
function _getHtmlVal(id){
	var val = $api.html($api.byId(id));
	return val;
}

//获取input值
function _setInputVal(id,val){
	var val = $api.val($api.byId(id),val);
	return val;
}
//获取html值
function _setHtmlVal(id,val){
	var val = $api.html($api.byId(id),val);
	return val;
}

//错误
function _httpErr(functionName,submit){
	var msg = '请点击确定，刷新页面';
	if(submit){
		msg = '请点击确定重试'
	}
	api.confirm({
		title: '网络故障',
		msg: msg,
		buttons: ['确定', '取消']
	}, function(ret, err) {
		var index = ret.buttonIndex;
		if(index == 1){
			eval(functionName);
		}
	});
}
//loading
function _loadingShow(title){
	api.showProgress({
		style: 'default',
		animationType: 'fade',
		title: title||'数据加载中',
		text: '请稍候',
		modal: true
	});
}

function _loadingHide(){
	api.hideProgress();
}

//缓存图片
function _imgCacheUrl(url,id,localUrl){

	//判断cache路径是否在本地真实存在
	var savePath = getCacheUrl(url);
	var fs = api.require('fs');
	if(!isDefine(fs)){
		domImgUrl(id,url);
		return;
	}
	fs.exist({
		path: savePath
	}, function(ret, err) {

		if(ret.exist){
			domImgUrl(id,getLocalCacheUrl(url));
		} else {
			imgFromCache(id,url,domImgUrl,localUrl);
		}
	});
}

function _imgCacheUrl2(url,className,localUrl){
	//判断cache路径是否在本地真实存在
	var savePath = getCacheUrl(url);
	var fs = api.require('fs');
	if(!isDefine(fs)){
		domImgUrl2(className,url);
		return;
	}

	fs.exist({
		path: savePath
	}, function(ret, err) {
		if(ret.exist){
			domImgUrl2(className,getLocalCacheUrl(url));
		} else {
			imgFromCache(className,url,domImgUrl2,localUrl);
		}
	});
}

//根据class缓存图片,图片路径放在title
function _imgCacheUrl3(containerEl,currpageId){
	var el = null;
	if(containerEl){
		if(isDefine(currpageId)){
			//console.log(currpageId);
			var currpageEl = $api.byId(currpageId);
			el = $api.domAll(currpageEl,'img.' + CONSTANT.CACHECLASSNAME).length && $api.domAll(currpageEl,'img.' + CONSTANT.CACHECLASSNAME) || $api.domAll(currpageEl,CONSTANT.CACHECLASSNAME);
		}else{
			el = $api.domAll(containerEl,'img.' + CONSTANT.CACHECLASSNAME).length && $api.domAll(containerEl,'img.' + CONSTANT.CACHECLASSNAME) || $api.domAll(containerEl,CONSTANT.CACHECLASSNAME);
		}
	}else{
		el = $api.domAll('img.' + CONSTANT.CACHECLASSNAME).length && $api.domAll('img.' + CONSTANT.CACHECLASSNAME) || $api.domAll(CONSTANT.CACHECLASSNAME);
	}
	//console.log(el.length);
	for(var i = 0; i< el.length; i++){
		var url = $api.attr(el[i],'title');
		if(!isDefine(url)){
			continue;
		}
		//判断cache路径是否在本地真实存在
		var fs = api.require('fs');
		if(!isDefine(fs)){
			$api.attr(el[i], 'src', url);
		}else{
			var savePath = getCacheUrl(url);
			fs.exist({
				path: savePath
			}, (function(i,url,savePath){
				return function (ret,err){
					//console.log(getLogStr([i,url,savePath]));
					if(ret.exist){
						$api.attr(el[i], 'src', getLocalCacheUrl(url));
					} else {
						api.download({
							url: url,
							cache: true,
							savePath: savePath,
							allowResume: true
						}, (function(i){
							return function(ret, err) {
								//console.log(getLogStr([ret,err]));
								if (ret && ret.state == 1 && ret.savePath) {
									//下载成功
									$api.attr(el[i], 'src', ret.savePath);
								}
							}
						})(i));
					}
				}
			})(i,url,savePath));
		}

	}
}


function _imgCacheUrl4(url,callback,index) {
	var fs = api.require('fs');
	if(!isDefine(fs)){
		return url;
	}else{
		var savePath = getCacheUrl(url);
		fs.exist({
			path: savePath
		}, (function(url,savePath,callback,index){
			return function (ret,err){
				if(ret.exist){
					callback(getLocalCacheUrl(url),index)
				} else {
					api.download({
						url: url,
						cache: true,
						savePath: savePath,
						allowResume: true
					}, (function(){
						return function(ret, err) {
							//console.log(getLogStr([ret,err]));
							if (ret && ret.state == 1 && ret.savePath) {
								callback(ret.savePath,index)
							}
						}
					})(callback,index));
				}
			}
		})(url,savePath,callback,index));
	}

}


/**
 *
 * @param el this
 * @param localImg 默认有父容器，img是否有父容器
 * @param download 默认通过api.download，img是否download
 * 备注：当没有api对象时候，设置download为其他值
 */
//缓存图片,一定要有data-url
function cacheImgNew(el,localImg,download){
	var dataUrl = $api.attr(el,'data-url');
//		console.log(dataUrl);
	if(dataUrl){
		//下载
		if(!localImg){
			var imgHolderEl = $api.closest(el,'div');
			if(imgHolderEl){
				$api.removeCls(imgHolderEl,'bc-grey');
			}
		}
		$api.css(el,'opacity:1;');
		if(!download){
			var savePath = getCacheUrl(dataUrl);
			var fs = api.require('fs');
			fs.exist({
				path: savePath
			},function(ret,err){
//				console.log(getLogStr([ret,err]));
				if(ret.exist){
					$api.attr(el, 'data-url', '');
					$api.attr(el, 'src', getLocalCacheUrl(dataUrl));
				}else{
					api.download({
						url: dataUrl,
						cache: true,
						savePath: savePath,
						allowResume: true
					},function(ret,err){
//						console.log(getLogStr([ret,err]));
						if (ret && ret.state == 1 && ret.savePath) {
							//下载成功
							$api.attr(el, 'data-url', '');
							$api.attr(el, 'src', ret.savePath);
						}
					});
				}
			});
		}else{
			var img = new Image();
			img.onload = function() {
				$api.attr(el, 'data-url', '');
				el.src = this.src;
			};
			img.src = dataUrl;
		}
	}
}

//将url进行转换cache路径
function getCacheUrl(url){
	url = url.replace(/\/|:/g,'');
	var pref = url.substring(0,url.lastIndexOf('.'));
	var suffix = url.substring(url.lastIndexOf('.'));
	pref = pref.replace(/\./g ,'');
	return "cache://img/" + pref + suffix;
}

//将url进行转换本地路径
function getLocalCacheUrl(url){
	url = url.replace(/\/|:/g,'');
	var pref = url.substring(0,url.lastIndexOf('.'));
	var suffix = url.substring(url.lastIndexOf('.'));
	pref = pref.replace(/\./g ,'');
	if(api.systemType == 'ios'){
		return api.cacheDir +'/img/' + pref + suffix;
	}else{
		return api.cacheDir +'/cache/img/' + pref + suffix;
	}
	z
}

//下载url文件，缓存到本地
function imgFromCache(elId,url,callback,localUrl){
	var savePath = getCacheUrl(url);
	api.download({
		url: url,
		cache: true,
		savePath: savePath,
		allowResume: true
	}, function(ret, err) {
		if (ret && ret.state == 1 && ret.savePath) {
			//下载成功
			return callback(elId,ret.savePath);
		} else {
			var realUrl = localUrl ? localUrl : url;
			return callback(elId,realUrl);
		}
	});
}

//dom更改图片的src
function domImgUrl(elId,url){

	var el = $api.byId(elId);
	if(el){
		$api.attr(el, 'src', url);
	}
}
function domImgUrl2(className,url){
	//加入img标签加快查找速度并且兼容非img标签图片
	var el = $api.domAll('img'+className).length && $api.domAll('img'+className) || $api.domAll(className);
	//console.log(getLogStr([el.length,url]));
	for(var i = 0; i< el.length; i++){
		$api.attr(el[i], 'src', url);
	}
	//if(el && el.length > 0){
	//	$api.attr(el[(el.length - 1)], 'src', url);
	//}
}

//尺码
function _sizeStatus(str){
	if(str=='J'){
		return '均码';
	}else{
		return str;
	}
}

//function _page () {
//	var scroll = new auiScroll({
//		listen:true, //是否监听滚动高度，开启后将实时返回滚动高度
//		distance:0 //判断到达底部的距离，isToBottom为true
//	},function(ret){
//		console.log("=======>"+ret.scrollTop+"<=========================");
//		if(ret.isToBottom && isAdd == 'YES'){
//			console.log(ret.scrollTop);
//			toGoNextPage();
//		}
//	});
//}
//订单状态



function myScroll () {
	var tur = true;
	function haha()
	{tur = true;

	}

	$api.byId("list").onscroll = function(){
		if(tur){ setTimeout(haha,1000); tur = false;
		}else{ }
	}
}

function _orderStatus(str){
	if(str=='S_STATUS_PAID'){
		return '已预约';
	}else if(str=='S_STATUS_WAIT'){
		return '等待付款';
	}else if(str=='S_STATUS_START'){
		return '清洗中';
	}else if(str=='S_STATUS_END'){
		return '已完成';
	}else{
		return '已取消';
	}
}
function _orderStatusIcon(str){
	if(str=='S_STATUS_PAID'){
		return 'time';
	}else if(str=='S_STATUS_WAIT'){
		return 'time';
	}else if(str=='S_STATUS_START'){
		return 'paint';
	}else if(str=='S_STATUS_END'){
		return 'roundcheck';
	}else{
		return 'roundclose';
	}
}
//尺码
function _sizeWuLiuState(str){
	if(str=='0'){
		return '在途';
	}else if(str=='1'){
		return '揽件';
	}else if(str=='2'){
		return '疑难';
	}else if(str=='3'){
		return '签收';
	}else if(str=='4'){
		return '退签';
	}else if(str=='5'){
		return '派件';
	}else if(str=='6'){
		return '退回';
	}else{
		return str;
	}
}
//star....
function starImg(s){
	var st0 = '<img src="../icon/st0.png" width="12"/>';
	var st1 = '<img src="../icon/st1.png" width="12" />';
	var st='';
	var m=s;
	var n=sub(5,s);
	for(var i=0;i<m;i++){
		st +=st1;
	}
	for(var i=0;i<n;i++){
		st +=st0;
	}
	return st;
}
function starImg2(s){
	var st0 = '<img src="../icon/st0.png" width="16"/>';
	var st1 = '<img src="../icon/st1.png" width="16" />';
	var st='';
	var m=s;
	var n=sub(5,s);
	for(var i=0;i<m;i++){
		st +=st1;
	}
	for(var i=0;i<n;i++){
		st +=st0;
	}
	return st;
}


//js BUG
function add(a, b) {
	var c, d, e;
	try {
		c = String(a).split(".")[1].length;
	} catch (f) {
		c = 0;
	}
	try {
		d = String(b).split(".")[1].length;
	} catch (f) {
		d = 0;
	}
	return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}

function sub(a, b) {
	var c, d, e;
	try {
		c = String(a).split(".")[1].length;
	} catch (f) {
		c = 0;
	}
	try {
		d = String(b).split(".")[1].length;
	} catch (f) {
		d = 0;
	}
	return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}

function mul(a, b) {
	var c = 0,
		d = String(a),
		e = String(b);
	try {
		c += d.split(".")[1].length;
	} catch (f) {}
	try {
		c += e.split(".")[1].length;
	} catch (f) {}
	return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

function div(a, b) {
	var c, d, e = 0,
		f = 0;
	try {
		e = String(a).split(".")[1].length;
	} catch (g) {}
	try {
		f = String(b).split(".")[1].length;
	} catch (g) {}
	return c = Number(String(a).replace(".", "")), d = Number(String(b).replace(".", "")), mul(c / d, Math.pow(10, f - e));
}
//查询 数组 元素位置 
function checkArrIn(arr,val){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == val) return i;
	}
	return -1;
}
//删除 数组元素 
function removeArrValue(arr,val) {
	var index = checkArrIn(arr,val);
	if (index > -1) {
		arr.splice(index, 1);
	}
};

function toastMsg(msg){
	if(typeof msg == 'undefined'){
		msg = '未知错误';
	}
	api.toast({
		msg: msg,
		duration:2000,
		location: 'bottom'
	});
}
/**
 * 判断是否是空
 * @param value
 */
function isDefine(value){
	if (value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof (value) == 'undefined'){
		return false;
	}else{
		value = value + "";
		value = value.replace(/\s/g, "");
		if (value == ""){
			return false;
		}
		return true;
	}
}

function isDefineYESNO(value){
	if(isDefine(value)){
		return 'YES';
	}else{
		return 'NO';
	}
}

function isTrue(value){
	if(value == 'NO' || value == 'false' || value == false){
		return false;
	}else if(value == 'YES' || value == 'true' || value == true){
		return true;
	}else{
		return false;
	}
}
//判断是否独立设计
function isDesign(value){
	if(value == 'consign'){
		return true;
	}else{
		return false;
	}
}

/**
 * 拼接ajax请求headers
 * @param isToken 选填 接口是否需要user的凭证 无默认值
 * @param isAppInfo 选填 接口是否需要app版本和系统信息 无默认值
 * @param contentType 选填 接口的contentType 默认值为'application/json' 为NO表示不需要contentType
 * @return 对象 返回拼接好的header
 * @remark 需要api对象
 * @author 方晶晶  2016-8-28 17:08:56
 */
function _getAjaxHeaders(isToken,isAppInfo,contentType){
	var header = {};
	if(isToken){
		var token = $api.getStorage('token');
		if(!token){
			//发起跳转登录页面事件
			//api.sendEvent({
			//	name: 'goLogin'
			//});
			console.error('没有token');
			return false;
		}
		header.token = token;
	}else{
		//有token就传
		if(isDefine($api.getStorage('token'))){
			header.token = $api.getStorage('token');
		}
	}
	if(isAppInfo){
		var systemType = api.systemType;
		var appVersion = api.appVersion;
		var appInfo = systemType+"-version";
		var repair =  api.getPrefs({
				sync: true,
				key: 'appRepair'
			}) || 0;
		header[appInfo] = appVersion + '-repair.'+repair;
	}
	if(!isDefine(contentType)){
		header["Content-Type"] = 'application/json';
	}else if(contentType == 'NO'){

	}else{
		header["Content-Type"] = contentType;
	}
	return header;
}


/**
 * 拼接ajax请求body
 * @param data 选填 请求体数据 默认值为{}
 * @return 对象 返回拼接好的请求体数据
 * @author 方晶晶  2016-8-28 17:08:56
 */
function _getAjaxData(data){
	if(!isDefine(data)){
		data = {};
	}
	return {
		body:data
	};
}

/**
 * 发送ajax请求
 * @param url 必填 字符串 请求接口地址
 * @param method 必填 字符串 请求类型
 * @param headers 必填 对象 请求头
 * @param data 选填 对象 请求体
 * @param successCallback 选填 function 请求成功回调函数
 * @param errorCallback 选填 function 请求失败回调函数
 * @param errorCallback 选填 function 请求失败回调函数
 * @param retryTimes 选填 重试次数 无默认值
 * @param extra 选填 对象 请求回调额外的参数
 * @remark 需要api对象
 * @author 方晶晶  2016-8-28 17:08:56
 */
function _ajaxData(url,method,headers,data,successCallback,errorCallback,retryTimes,extra,dataType){
	console.log(getLogStr(new Array(url,method,headers,data)));
	if(!isDefine(url) || !isDefine(method) || !isObj(headers)){
		console.error('ajaxData : url,method,headers is empty!');
		return;
	}
	api.ajax({
		url: url,
		cache: false,
		method : method,
		timeout : 20,
		dataType : dataType || "json",
		returnAll : false,
		headers: headers,
		data: data
	}, function(ret, err) {
		console.log(getLogStr(new Array(ret,err)));
		if(ret){
			typeof successCallback === 'function' && successCallback(ret,extra);
		}else if(err && (err.statusCode == 503 || err.statusCode == 502)){
			//捕获502,503异常
			api.hideProgress();
			api.refreshHeaderLoadDone();
		}else{
			//http请求失败，除开502和503
			if(retryTimes > 0){
				setTimeout(function(){
					_ajaxData(url,method,headers,data,successCallback,errorCallback,retryTimes-1,extra);
				},1000);
			}else{
				if(errorCallback){
					errorCallback(err,extra);
				}
			}
		}
	});
}

/**
 * 判断对象变量是否为空对象{}
 * @param obj 选填 对象
 * @param ISYESNO 选填 是否返回字符串格式 无默认值
 * @return 默认返回 布尔值true,false，当YESNO为true时返回 字符串YES,NO
 * @author 方晶晶  2016-8-28 17:08:56
 */
function isObj(obj,ISYESNO){
	var ret = false;
	if(!isDefine(obj)){
		return ret;
	}
	if(typeof obj == 'object' && Object.keys(obj).length > 0){
		ret = true;
	}
	return ISYESNO ? boolToYESNO(ret) : ret;
}


/**
 * 把布尔值转化成字符串YES,NO
 * @param boolValue 布尔值
 * @return 字符串 YES,NO
 * @author 方晶晶  2016-8-28 17:08:56
 */
function boolToYESNO(boolValue){
	return boolValue ? 'YES' : 'NO';
}

/**
 * 拼接多个参数，参数类型为任意
 * @param array 参数数据，为了得到多个不定参数 选填 无默认值
 * @author 方晶晶  2016-8-28 17:08:56
 */
function getLogStr(array){
	//if(api && !api.debug){return '';}
	for(var i in array){
		if(typeof array[i] == 'object'){
			array[i] = JSON.stringify(array[i]);
		}
	}
	return array.toString();
}

//滚动到顶部
function _goTop(){
	api.pageUp({
		top:true
	});
}

//滚动到底部
function _goBottom(){
	api.pageDown({
		bottom:true
	});
}

//获取url中的参数
function getUrlParams(url){
	var reg_url = /^[^\?]+\?([\w\W]+)$/,
		reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
		arr_url = reg_url.exec(url),
		ret = {};
	if (arr_url && arr_url[1]) {
		var str_para = arr_url[1], result;
		while ((result = reg_para.exec(str_para)) != null) {
			ret[result[1]] = result[2];
		}
	}
	return ret;
}
//获取url中的指定name的参数
function getUrlParam(url,name) {
	if(!isDefine(url) || url.indexOf('?') == -1){
		return '';
	}
	url = url.substr(url.indexOf('?'));
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	var r = url.substr(1).match(reg);
	if (r!=null){
		return (r[2].split('#')[0]);
	}else{
		return null;
	}
}

//判断url中的参数是否包含needLogin=true
function isNeedLoginUrl(url){
	var isNeddLogin = getUrlParam(url,'needLogin');
	return isTrue(isNeddLogin);
}

//判断手机是否安装微信
function isInstalledWx(callback,extra){
	var wx = api.require('wx');
	wx.isInstalled(function(ret, err) {
		callback(ret.installed,extra);
	});
}

function comform(title,msg,callback,extra){
	if(!isDefine(title) || !isDefine(msg)){
		return;
	}
	api.confirm({
		title: title,
		msg: msg,
		buttons: ['确定', '取消']
	}, function(ret, err) {
		var index = ret.buttonIndex;
		if(index == 1){
			if(isDefine(callback)){
				callback(extra);
			}
		}
	});
}
//判断字符串是否以endStr结尾
String.prototype.endWith=function(endStr){
	var d=this.length-endStr.length;
	return (d>=0&&this.lastIndexOf(endStr)==d)
}

//合并两个对象
var objExtend = function(obj1,obj2){
	for (var key in obj2){
		if(obj1.hasOwnProperty(key))continue;
		obj1[key] = obj2[key];
	}
	return obj1;
}

//判断对象是否是数组
function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]' && o.length;
}

// 原型扩展

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
				(o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
};

Date.format = function (str, fmt) {
	str = Date.standardDateStr(str);
	return new Date(str).format(fmt);
};

Date.standardDateStr = function (str) {
	return str.replace(/\-/g, '/').replace(/\.\d+$/, '');
};
function updateCloset(){
	api.execScript({
		name:'root',
		frameName:"footer_tab_3",
		script: 'init("reInfo");'
	});
}
//获取浏览器滚动条距离底部距离
function getScrollTop() {
	var scrollPos;
	if (window.pageYOffset) {
		scrollPos = window.pageYOffset; }
	else if (document.compatMode && document.compatMode != 'BackCompat')
	{ scrollPos = document.documentElement.scrollTop; }
	else if (document.body) { scrollPos = document.body.scrollTop; }
	return scrollPos;
}

//跳转到webUrl页面
function goWebUrl(name,page,title,url){
	var title = title || '多啦衣梦';
	var leftIcon = 'duola-iconfont icon-left';
	var leftNav = setNavData(leftIcon);
	var border = true;
	var bounces = false;
	var params = {};
	params.nav= setNav(leftNav,border);
	params.frame=setFrame(bounces);
	var from = {
		winName: api.winName,
		frameName: api.frameName
	};
	var url = url || 'header_web.html';
	openNewWinFrame(name,title,params,from,url,null,page);
}

//英文首字母大写
function upperEnName(enName){
	return enName.substr(0,1).toUpperCase()+enName.substr(1);
}
//html转义
function HTMLEncode(html) {
	var temp = document.createElement("div");
	(temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
	var output = temp.innerHTML;
	temp = null;
	return output;
}
//html反转义
function HTMLDecode(text) {
	var temp = document.createElement("div");
	temp.innerHTML = text;
	var output = temp.innerText || temp.textContent;
	temp = null;
	return output;
}
//公用头部导航栏坐侧点击异步执行的方法
function execNavLeftCallback(value){
	var frameData  = api.pageParam.data;
	var from = frameData.from;
	var callback = frameData.leftNavCallback ? frameData.leftNavCallback : '';
	if(!isDefine(callback)){
		return;
	}
	var extra = frameData.leftNavExtra ? frameData.leftNavExtra : '';
	var params = {
		script: getExecScript(callback,new Array(extra,api.winName,value))
	};
	if(isDefine(from.winName)){
		params.name = from.winName;
	}
	if(isDefine(from.frameName)){
		params.frameName = from.frameName;
	}
	api.execScript(params);
}

function getDeviceId(){
	var device = api.deviceId;
	return device.split('-').join('');
}

function openDialogAlert(data,callback){
	var dialogBox = api.require('dialogBox');
	dialogBox.alert(data, function(ret) {
		if(typeof callback == 'function'){
			callback(ret);
		}
		dialogBox.close({
			dialogName: 'alert'
		});
	});
}