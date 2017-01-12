/**
 * Created by oHHO on 2017-01-08.
 */

/**
 * android
 * 获取本机手机号
 * @param cb 回调函数
 */
function smsGetTel(cb){
    if(api.systemType != 'android'){
        return;
    }
    var sms = api.require('moduleSMS');
    sms.getSmsNumber(cb);
}

/**
 * android
 * 开启监听短信
 * @param cb 回调函数
 */
function smsStartListen(cb){
    if(api.systemType != 'android'){
        return;
    }
    var sms = api.require('moduleSMS');
    sms.startListening({time:0},cb);
}

/**
 * android
 * 关闭监听短信
 * 在关闭页面调用（android返回键和关闭页面）
 */
function smsStopListen(){
    if(api.systemType != 'android'){
        return;
    }
    var sms = api.require('moduleSMS');
    sms.stopListening(function(ret,err){console.log(JSON.stringify(ret)+':'+JSON.stringify(err));});
}