/**
 * Created by oHHO on 2016-12-11.
 */


/**
 * 判断微博是否安装
 * @param callback 选填 回调函数
 * @param extra 选填 回调时额外参数
 */
function weibo_install(callback, extra) {
    var weibo = api.require('weibo');
    weibo.isInstalled(function (ret) {
        if (callback) {
            callback(ret.status, extra);
        }
    });
}
/**
 * 微博授权及获取用户信息
 * @param callback 必填 回调函数 用户信息
 * @param extra 选填 回调时额外参数
 */
function weibo_login(callback, extra) {
    var weibo = api.require('weibo');
    weibo.auth(function (ret, err) {
        console.log(JSON.stringify(ret) + JSON.stringify(err));
        if (ret.status && ret.token && ret.userId) {
            var token = ret.token;
            var userId = ret.userId;
            weibo.getUserInfo({
                token: token,
                userId: userId
            }, function (ret, err) {
                console.log(JSON.stringify(ret) + JSON.stringify(err));
                if (ret.status && ret.userInfo && callback) {
                    if (typeof (ret.userInfo) == 'string') {
                        ret.userInfo = JSON.parse(ret.userInfo);
                    }
                    ret.userInfo.token = token;
                    ret.userInfo.userId = userId;
                    callback(ret.userInfo, extra);
                } else {
                    var msg = '授权失败,请重试';
                    toastMsg(msg);
                }
            });
        } else if (err) {
            var msg = '授权失败,请重试';
            if (err.code == 1) {
                msg = '授权失败,你取消了授权';
            }
            toastMsg(msg);
        }
    });
}
/**
 * 微博分享文本
 * @param text 必填 文本
 * @param callback 选填 回调函数 分享成功
 * @param extra 选填 回调时额外参数
 */
function weibo_share_txt(text, callback, extra) {
    var weibo = api.require('weibo');
    weibo.shareText({
        text: text
    }, function (ret, err) {
        console.log(getLogStr([ret, err]));
        if (ret.status && callback) {
            callback(extra);
        } else if (err) {
            var msg = '分享失败,请重试';
            if (err.code == 1) {
                msg = '分享失败,你取消了分享';
            }
            toastMsg(msg);
        }
    });
}
/**
 * 微博分享图文
 * @param param 必填 对象必须包含imageUrl(本地,32k内)，其他参数参考：http://docs.apicloud.com/Client-API/Open-SDK/weibo#2
 * @param callback 选填 回调函数 分享成功
 * @param extra 选填 回调时额外参数
 */
function weibo_share_img(param, callback, extra) {
    var weibo = api.require('weibo');
    if (!param.imageUrl) {
        console.error('没有本地图片参数');
        return;
    }
    var shareParam = {
        imageUrl: param.imageUrl
    };
    if (param.text) {
        shareParam.text = param.text;
    }
    weibo.shareImage(shareParam, function (ret, err) {
        if (ret.status && callback) {
            callback(extra);
        } else if (err) {
            var msg = '分享失败,请重试';
            if (err.code == 1) {
                msg = '分享失败,你取消了分享';
            }
            toastMsg(msg);
        }
    });
}
/**
 * 微博分享链接
 * @param param 必填 对象必须包含contentUrl，thumb(本地,32k内),其他参数参考：http://docs.apicloud.com/Client-API/Open-SDK/weibo#5
 * @param callback 选填 回调函数 分享成功
 * @param extra 选填 回调时额外参数
 */
function weibo_share_page(param, callback, extra) {
    var weibo = api.require('weibo');
    if (!param.contentUrl) {
        console.error('没有页面url参数');
        return;
    }
    if (!param.thumb) {
        console.error('没有页面缩略图参数');
        return;
    }
    var shareParam = {
        thumb: param.thumb,
        contentUrl: param.contentUrl
    };
    if (param.text) {
        shareParam.text = param.text;
    }
    if (param.title) {
        shareParam.title = param.title;
    }
    if (param.description) {
        shareParam.description = param.description;
    }
    console.log(getLogStr([shareParam]));
    weibo.shareWebPage(shareParam, function (ret, err) {
        if (ret.status && callback) {
            callback(extra);
        } else if (err) {
            var msg = '分享失败,请重试';
            if (err.code == 1) {
                msg = '分享失败,你取消了分享';
            }
            toastMsg(msg);
        }
    });
}