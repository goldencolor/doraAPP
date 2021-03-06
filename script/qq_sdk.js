/**
 * Created by oHHO on 2016-12-11.
 */


/**
 * 判断qq是否安装
 * @param callback 选填 回调函数
 * @param extra 选填 回调时额外参数
 */
function qq_install(callback, extra) {
    var qq = api.require('QQPlus');
    qq.installed(function (ret) {
        if (callback) {
            callback(ret.status, extra);
        }
    });
}

/**
 * qq授权及获取用户信息
 * @param callback 必填 回调函数 用户信息
 * @param extra 选填 回调时额外参数
 */
function qq_login(callback, extra) {
    var qq = api.require('QQPlus');
    qq.login(function (ret, err) {
        console.log(JSON.stringify(ret) + JSON.stringify(err));
        var accessToken = ret.accessToken;
        var openId = ret.openId;
        if (ret.status && accessToken && openId) {
            qq.getUserInfo(function (ret, err) {
                console.log(JSON.stringify(ret) + JSON.stringify(err));
                if (ret.status && ret.info && callback) {
                    if (typeof (ret.info) == 'string') {
                        ret.info = JSON.parse(ret.info);
                    }
                    ret.info.openId = openId;
                    ret.info.accessToken = accessToken;
                    callback(ret.info, extra);
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
 * qq分享文本
 * @param text 必填 文本
 * @param callback 选填 回调函数 分享成功
 * @param extra 选填 回调时额外参数
 */
function qq_share_txt(text, callback, extra) {
    var qq = api.require('QQPlus');
    qq.shareText({
        text: text,
    }, function (ret, err) {
        if (ret.status && callback) {
            callback(extra);
        } else if (err) {
            var msg = '分享失败,请重试';
            if (err.code == -4) {
                msg = '分享失败,你取消了分享';
            }
            toastMsg(msg);
        }
    });
}
/**
 * 微博分享图文
 * @param param 必填 对象必须包含imgPath(本地,32k内)，其他参数参考：http://docs.apicloud.com/Client-API/Open-SDK/QQPlus#5
 * @param callback 选填 回调函数 分享成功
 * @param extra 选填 回调时额外参数
 */
function qq_share_img(param, callback, extra) {
    var qq = api.require('QQPlus');
    if (!param.imgPath) {
        console.error('没有本地图片参数');
        return;
    }
    var shareParam = {
        imgPath: param.imgPath
    };
    if (param.type == 'QZone' || param.type == 'QFriend') {
        shareParam.type = param.type;
    }
    if (param.title) {
        shareParam.title = param.title;
    }
    if (param.description) {
        shareParam.description = param.description;
    }
    console.log(getLogStr([shareParam]));
    qq.shareImage(shareParam, function (ret, err) {
        if (ret.status && callback) {
            callback(extra);
        } else if (err) {
            var msg = '分享失败,请重试';
            if (err.code == -4) {
                msg = '分享失败,你取消了分享';
            }
            toastMsg(msg);
        }
    });
}
/**
 * 微博分享链接
 * @param param 必填 对象必须包含url，imgUrl(本地,32k内,android只支持网络图片),其他参数参考：http://docs.apicloud.com/Client-API/Open-SDK/QQPlus#6
 * @param callback 选填 回调函数 分享成功
 * @param extra 选填 回调时额外参数
 */
function qq_share_page(param, callback, extra) {
    var qq = api.require('QQPlus');
    if (!param.url) {
        console.error('没有页面url参数');
        return;
    }
    if (!param.imgUrl) {
        console.error('没有页面缩略图参数');
        return;
    }
    var shareParam = {
        imgUrl: param.imgUrl,
        url: param.url
    };
    if (param.type == 'QZone' || param.type == 'QFriend') {
        shareParam.type = param.type;
    }
    if (param.title) {
        shareParam.title = param.title;
    }
    if (param.description) {
        shareParam.description = param.description;
    }
    qq.shareNews(shareParam, function (ret, err) {
        if (ret.status && callback) {
            callback(extra);
        } else if (err) {
            var msg = '分享失败,请重试';
            if (err.code == -4) {
                msg = '分享失败,你取消了分享';
            }
            toastMsg(msg);
        }
    });
}

