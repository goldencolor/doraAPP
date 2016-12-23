/**
 * Created by oHHO on 2016-11-03.
 */
//开屏广告
//定义常量
var APPADCONSTANT = {
    ACTION:{
        GOWEB:'GOWEB',
        GOPAGE:'GOPAGE'
    },
    //跳转某个页面
    PAGENAME:['goAdActivity','goFlashLease']
};

//启动广告初始化
function appAdInit(){
    // 1.读取本地广告配置
    var appAd = $api.getStorage('appAd');
    //console.log(getLogStr(['appAdInit',appAd]));
    if(appAd){
        var adId = appAd.id;
        var adAction = appAd.action;
        var adForce = appAd.force;
        var adImg = appAd.adImg;
        var adLocalImg = appAd.adLocalImg;
        var adData = appAd.data;
        var adParam = appAd.param;
        var adUsed = appAd.used;
        if(adForce == 'YES' && adLocalImg && adAction){
            openAppAd(adForce,adLocalImg,adAction,adData,adParam);
        }else if(adForce == 'NO' && !adUsed && adLocalImg && adAction){
            openAppAd(adForce,adLocalImg,adAction,adData,adParam);
        }
    }

    // 2.向服务器请求最新App启动广告信息
    postAppAd(adId);
    //testPostAppAd(adId);
}

//打开本地广告
function openAppAd(adForce,adImg,action,data,param){
    if(!adImg){
        return;
    }
    api.openFrame({
        name: 'app_ad',
        url: 'dialog_didi.html',
        pageParam: {
            callback: 'execDialogDidi',
            from:{
                winName: api.winName,
                frameName: api.frameName
            },
            extra:{adForce:adForce,adImg:adImg,action:action,data:data,param:param},
            //desc: 'test'
            desc:'<img src="'+adImg+'"/>'
            //btnText:'现在去了解'
        },
        bounces: false,
        bgColor: 'rgba(0,0,0,0.5)',
        vScrollBarEnabled: false,
        animation: {
            type: "fade",
            duration: 150
        }
    });
}

//点击启动图或取消
function execDialogDidi(index,extra){

    var umengparam = '取消';
    if(typeof extra == 'string'){
        extra = JSON.parse(extra);
    }
    var adForce = extra.adForce;
    var action = extra.action;
    var data = extra.data;
    var param = extra.param;
    if(index == 1){
        //点击图片
        umengparam = '确定';
        if(action == APPADCONSTANT.ACTION.GOWEB && data ){//跳转网页
            if($api.getStorage('token')){
                //已经登陆
                if(adForce == 'NO'){
                    setAppAdUsed();
                }
                data = data + '?token=' + $api.getStorage('token');
                goWebPage('appAdWebUrl',data,param);
            }else{
                //未登陆
                goLogin('',null,{isAd:'isAd'});
            }
        }else if(action == APPADCONSTANT.ACTION.GOPAGE && APPADCONSTANT.PAGENAME.indexOf(data) != -1){//跳转APP页面
            if(param == 'needLogin'){
                if($api.getStorage('token')){
                    //已经登陆
                    if(adForce == 'NO'){
                        setAppAdUsed();
                    }
                    appAdGoPage(data,param);
                }else{
                    //未登陆
                    goLogin('',null,{isAd:'isAd'});
                }
            }else {
                if(adForce == 'NO'){
                    setAppAdUsed();
                }
                appAdGoPage(data,param);
            }
        }
    }else{
        //点击取消
        if(adForce == 'NO'){
            setAppAdUsed();
        }
    }
    sendEventUmeng(CONSTANT.UMENGEVENT.APPAD,{
        click:umengparam
    });
}

//跳转到活动web页面
function goWebPage(name,page,title){
    var title = title || '多啦衣梦';
    var leftIcon = 'duola-iconfont icon-left';
    var leftNav = setNavData(leftIcon);
    var rightIcon = 'duola-iconfont icon-share';
    var rightNav = setNavData(rightIcon);
    var border = true;
    var bounces = false;
    var params = {};
    params.nav= setNav(leftNav,border,rightNav);
    params.frame=setFrame(bounces);
    //分享url和加载的url 不一致
    //params.frame=setFrame(bounces,{
    //    sharedPage:'http://wag.i-h5.cn/lb_game/11yue/Nov_dlam/weixin.php'
    //});
    var from = {
        winName: api.winName,
        frameName: api.frameName
    };
    var url = 'header_web_trans.html';
    openNewWinFrame(name,title,params,from,url,null,page);
}


//清除AppAd缓存数据
function clearAppAd(){
    $api.rmStorage('appAd');
}

//设置AppAd缓存数据已经被使用过
function setAppAdUsed(){
    var appAd = $api.getStorage('appAd');
    appAd.used = 'used';
    $api.setStorage('appAd',appAd);
}

//向服务器请求最新App启动广告信息
function postAppAd(adId){
    var url = serviceNew + 'home/launchBanner';
    var headers = _getAjaxHeaders(false,true);
    var data = _getAjaxData();
    var extra = {adId:adId};
    _ajaxData(url,'post',headers,data,postAppAdSuccessCallback,postAppAdErrorCallback,0,extra);
}

//测试
function testPostAppAd(adId){
    //var ret = {"statusCode":200,"msg":"OK","id":1478241019159,"action":"GOWEB","force":"YES","adImg":"http://img.duolayimeng.com/launchBanner/dialog_img.png@!480w","data":"http://www.baidu.com","param":"百度","name":"测试1"};
    //var extra = {adId:adId};
    //postAppAdSuccessCallback(ret,extra);
}

function postAppAdErrorCallback(err,extra){
    console.log(getLogStr([err,extra]));
    clearAppAd();
}

function postAppAdSuccessCallback(ret,extra){
    //在有新广告或者是无广告清除本地缓存
    if(ret && ret.statusCode == 200 && ret.id != extra.adId && ret.force && ret.adImg){
        clearAppAd();
        var appAd = {
            id:ret.id,
            action:ret.action,
            force:ret.force,
            adImg:ret.adImg,
            data:ret.data,
            param:ret.param
        };
        downloadAppAdImg(appAd);
    }else if(ret.errorType){
        clearAppAd();
    }
}

//下载广告图片
function downloadAppAdImg(appAd){
    if(appAd.adImg){
        var suffix = appAd.adImg.substr(appAd.adImg.lastIndexOf('.'));
        var savePath = "fs://ad/"+appAd.id+suffix;
        var fs = api.require('fs');
        fs.exist({
            path: savePath
        }, function(ret, err) {
            if(ret.exist){
                appAd.adLocalImg = getAdLocalImg(appAd.id,suffix);
                //console.log(getLogStr(['downloadAppAdImg',appAd]));
                $api.setStorage('appAd',appAd);
            }else{
                api.download({
                    url: appAd.adImg,
                    cache: true,
                    savePath: savePath,
                    allowResume: true
                }, function(ret, err) {
                    //console.log(getLogStr(['downloadAppAdImg',ret,appAd]));
                    if (ret && ret.state == 1 && ret.savePath) {
                        //下载成功
                        appAd.adLocalImg = ret.savePath;
                        $api.setStorage('appAd',appAd);
                    }
                });
            }
        });
    }
}

//获取广告图片本地路径
function getAdLocalImg(id,suffix){
    var adLocalImg = api.fsDir + '/ad/' + id + suffix;
    //console.log(getLogStr(['getAdLocalImg',adLocalImg]));
    return adLocalImg;
}

//登录后重新打开
function execAppAdInit(){
    // 1.读取本地广告配置
    var appAd = $api.getStorage('appAd');
    //console.log(getLogStr(['appAdInit',appAd]));
    if(appAd){
        var adAction = appAd.action;
        var adForce = appAd.force;
        var adLocalImg = appAd.adLocalImg;
        var adData = appAd.data;
        var adParam = appAd.param;
        var adUsed = appAd.used;
        if(adForce == 'YES' && adLocalImg && adAction){
            openAppAd(adForce,adLocalImg,adAction,adData,adParam);
        }else if(adForce == 'NO' && !adUsed && adLocalImg && adAction){
            openAppAd(adForce,adLocalImg,adAction,adData,adParam);
        }
    }
}

//跳转APP页面
function appAdGoPage(data,param){
    var execParam = param ? [].push(param) : [];
    var functionName = getExecScript(data,execParam);
    eval(functionName);
}

//跳转双十一活动页面
function goAdActivity(){
    var name = 'activity';
    var title = '买1送1';
    var leftIcon = 'duola-iconfont icon-left';
    var leftText = '';
    var leftExtra = '';
    var leftCallback = 'execCloseSlefWin';
    var leftNav = setNavData(leftIcon,leftText,leftCallback,leftExtra);
    var rightIcon = 'duola-iconfont icon-share';
    var rightNav = setNavData(rightIcon);
    var border = true;
    var bounces = true;
    var params = {};
    params.nav= setNav(leftNav,border,rightNav);
    params.frame=setFrame(bounces);
    var from = {
        winName:api.winName,
        frameName:api.frameName
    };
    var url = 'header_new.html';
    var animation = '';
    var page = 'activity.html';
    openNewWinFrame(name,title,params,from,url,animation,page);
}

//点击返回图标异步执行关闭窗口
function execCloseSlefWin(extra,winName,value){
    api.closeWin({
        name:winName
    });
}

//跳转圣诞元旦闪选活动页面
function goFlashLease(){
    var name = 'marquee';
    var title = '多啦闪选';
    var leftIcon = 'duola-iconfont icon-left';
    var leftText = '';
    var leftExtra = '';
    var leftCallback = 'execMarqueeWin';
    var leftNav = setNavData(leftIcon, leftText, leftCallback, leftExtra);
    var border = false;
    var bounces = false;
    var params = {};
    params.nav = setNav(leftNav, border);
    params.frame = setFrame(bounces);
    var from = {
        winName: api.winName,
        frameName: api.frameName
    };
    var url = 'header_new.html';
    var animation = '';
    var page = 'activity_marquee.html';
    openNewWinFrame(name, title, params, from, url, animation, page);
}

//点击闪选活动页面返回图标异步执行关闭窗口
function execMarqueeWin(extra,winName,value){
    var scriptFun = getExecScript('execClear', []);
    var params = {
        name:'marqueeWin',
        frameName: 'marqueeFrame',
        script: scriptFun
    };
    api.execScript(params);
    api.closeWin({
        name:winName
    });
}

