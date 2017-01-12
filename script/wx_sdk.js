/**
 * Created by oHHO on 2016-12-11.
 */
/**
 * 测试用例
 */
//		wx_install(function(ret){console.log(JSON.stringify(ret))});
//		wx_login(function(ret){console.log(JSON.stringify(ret))});
//		wx_share_txt({text:'i',scene:'session'},function(ret){console.log(JSON.stringify(ret))});
//		wx_share_img({contentUrl:'widget://image/guide3.png',thumb:'widget://image/sharedLogo.png',scene:'session'},function(ret){console.log(JSON.stringify(ret))});
//		wx_share_page({title:'百度',contentUrl:'http://www.baidu.com',thumb:'widget://image/sharedLogo.jpg',scene:'session'},function(ret){console.log(JSON.stringify(ret))});


/**
 * 判断wx是否安装
 * @param callback 选填 回调函数
 * @param extra 选填 回调时额外参数
 */
function wx_install(callback, extra) {
    var wx = api.require('wx');
    wx.isInstalled(function (ret) {
        //console.log(JSON.stringify(ret));
        if (callback) {
            callback(ret.installed, extra);
        }
    });
}

/**
 * wx授权及获取用户信息
 * @param callback 必填 回调函数 用户信息
 * @param extra 选填 回调时额外参数
 */
function wx_login(callback, extra) {
    var wx = api.require('wx');
    wx.auth(function (ret, err) {
        //console.log(JSON.stringify(ret) + JSON.stringify(err));
        if (ret.status && ret.code) {
            wx.getToken({
                code : ret.code
            }, function(ret, err) {
                //console.log(JSON.stringify(ret) + JSON.stringify(err));
                if (ret.status && ret.accessToken && ret.openId) {
                    var accessToken = ret.accessToken;
                    wx.getUserInfo({
                        accessToken : accessToken,
                        openId : ret.openId
                    }, function(ret, err) {
                        console.log(JSON.stringify(ret) + JSON.stringify(err));
                        if (ret.status && callback) {
                            ret.accessToken = accessToken;
                            callback(ret, extra);
                        } else {
                            var msg = '授权失败,请重试';
                            toastMsg(msg);
                        }
                    });
                } else {
                    var msg = '未知错误';
                    if(err.code == 1 || err.code == 2 || err.code == 3){
                        msg = '服务器忙,请稍后重试';
                    }else if(err.code == 4){
                        msg = '网络超时,请重试';
                    }
                    toastMsg(msg);
                }
            });
        } else {
            var msg = '未知错误';
            if(err.code == 1){
                msg = '授权失败,你取消了授权';
            }else if(err.code == 2){
                msg = '授权失败,你拒绝了授权';
            }else if(err.code == 3){
                msg = '手机未安装微信';
            }
            toastMsg(msg);
        }
    });
}

/**
 * wx分享文本
 * @param param object，包含
 *  text 必填 文本
 *  scene 必填 场景 session（会话）timeline（朋友圈）favorite（收藏）
 * @param callback 选填 回调函数 分享成功
 * @param extra 选填 回调时额外参数
 */
function wx_share_txt(param, callback, extra) {
    if(!param.hasOwnProperty('text')){
        console.error('text is needed!');
        return;
    }
    if(!param.hasOwnProperty('scene')){
        console.error('scene is needed!');
        return;
    }
    console.log(getLogStr([param]));
    var wx = api.require('wx');
    wx.shareText(param, function(ret, err) {
        if (ret.status && callback) {
            callback(extra);
        } else if (err) {
            var msg = '分享失败,请重试';
            if (err.code == 2) {
                msg = '分享失败,你取消了分享';
            }
            toastMsg(msg);
        }
    });
}

/**
 * wx分享图片
 * @param param object，包含
 * scene 必填 场景 session（会话）timeline（朋友圈）favorite（收藏）
 * thumb 选填 缩略图 本地图片 最大32k .png 后缀
 * contentUrl 必填 分享图片的 url 地址 本地图片 最大10M
 * @param callback 选填 回调函数 分享成功
 * @param extra 选填 回调时额外参数
 */
function wx_share_img(param, callback, extra) {
    if(!param.hasOwnProperty('scene')){
        console.error('scene is needed!');
        return;
    }
    if(!param.hasOwnProperty('contentUrl')){
        console.error('contentUrl is needed!');
        return;
    }else if(param.thumb.indexOf('http') != -1 || param.thumb.lastIndexOf('.png')!=param.thumb.length - 4){
        console.error('thumb must be local and endWith .png!');
        return;
    }
    if(param.hasOwnProperty('thumb') && (param.thumb.indexOf('http') != -1 || param.thumb.lastIndexOf('.png')!=param.thumb.length - 4)){
        console.error('thumb must be local and endWith .png!');
        return;
    }
    var wx = api.require('wx');
    console.log(getLogStr([param]));
    wx.shareImage(param, function (ret, err) {
        if (ret.status && callback) {
            callback(extra);
        } else if (err) {
            var msg = '分享失败,请重试';
            if (err.code == 2) {
                msg = '分享失败,你取消了分享';
            }
            toastMsg(msg);
        }
    });
}

/**
 * wx分享链接
 * @param param object，包含
 * scene 必填 场景 session（会话）timeline（朋友圈）favorite（收藏）
 * title 选填 标题
 * description 选填 描述
 * thumb 选填 缩略图 本地图片 最大32k .png 后缀
 * contentUrl 必填 分享链接的 url
 * @param callback 选填 回调函数 分享成功
 * @param extra 选填 回调时额外参数
 */
function wx_share_page(param, callback, extra) {
    if(!param.hasOwnProperty('scene')){
        console.error('scene is needed!');
        return;
    }
    if(!param.hasOwnProperty('contentUrl')){
        console.error('contentUrl is needed!');
        return;
    }else if(param.contentUrl.indexOf('http') == -1){
        console.error('contentUrl must be url!');
        return;
    }

    if(param.hasOwnProperty('thumb') && (param.thumb.indexOf('http') != -1 || param.thumb.lastIndexOf('.png')!=param.thumb.length - 4)){
        console.error('thumb must be local and endWith .png!');
        return;
    }

    var wx = api.require('wx');
    console.log(getLogStr([param]));
    wx.shareWebpage(param, function (ret, err) {
        if (ret.status && callback) {
            callback(extra);
        } else if (err) {
            var msg = '分享失败,请重试';
            if (err.code == 2) {
                msg = '分享失败,你取消了分享';
            }
            toastMsg(msg);
        }
    });
}

