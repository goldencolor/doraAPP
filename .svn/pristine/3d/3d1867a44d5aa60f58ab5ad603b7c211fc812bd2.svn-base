/**
 * Created by oHHO on 2016-10-07.
 */
/**
 * oss 上传单张图片
 * @param path 手机文件真实路径
 * @param dir 上传目录 例如comment/150000/
 * @param eachCallback 单张上传图片回调
 * @param extra 单张上传图片回调额外参数
 */

var OSSDIR = {
    AVATAR: '/avatar/',
    COMMUNITY: '/community/'
};

function uploadOss(path,dir,eachCallback,extra,signatureParam){
    if(!isDefine(path)){
        console.error('path is empty!');
        return;
    }
    var suffix = path.substr(path.lastIndexOf('.'));
    if(!isDefine(suffix)){
        console.error('path is invalid!');
        return;
    }
    if(!isDefine(dir)){
        console.error('dir is empty!');
        return;
    }
    var returnKey = Date.now() + '' + parseInt(Math.random() * Math.pow(10,6));
    var key = dir + returnKey;
    //console.log(getLogStr([key,signatureParam]));
    if(signatureParam){
        var url = signatureParam.url;
        var OSSAccessKeyId = signatureParam.OSSAccessKeyId;
        var signature = signatureParam.signature;
        var policy = signatureParam.policy;
        var values ={
            'key': key,
            'success_action_status':'200',
            'x-oss-meta-name':'DorasDream',
            'x-oss-meta-token':'hqKhKWE4dZCCwzFTymA8o2cuFT8akp87',
            'OSSAccessKeyId':OSSAccessKeyId,
            'signature':signature,
            'policy':policy
        };
        api.ajax({
            url: url,
            method: 'post',
            timeout: 60,
            returnAll:false,
            data:{
                values: values,
                files: {
                    file: path
                }
            }
        },function(ret,err){
            //console.log(getLogStr([path,values,ret,err]));
            if(err.statusCode == 200){
                if(eachCallback){
                    //console.log(returnKey);
                    eachCallback(returnKey,extra);
                }
            }else{
                if(eachCallback){
                    eachCallback('error',true);
                }
            }
        });
    }else{
        var url = serviceNew + 'upload/getSignature';
        var headers = _getAjaxHeaders(false,true);
        var data = _getAjaxData();
        _ajaxData(url,'post',headers,data,function(ret){
            if(ret.statusCode != 200){
                if(isDefine(eachCallback)){
                    eachCallback('error',true);
                }
                console.error('get signature is failed! ' + JSON.stringify(ret));
                return;
            }
            var url = ret.info.host;
            var OSSAccessKeyId = ret.info.accessid;
            var signature = ret.info.signature;
            var policy = ret.info.policy;
            var values ={
                'key': key,
                'success_action_status':'200',
                'x-oss-meta-name':'DorasDream',
                'x-oss-meta-token':'hqKhKWE4dZCCwzFTymA8o2cuFT8akp87',
                'OSSAccessKeyId':OSSAccessKeyId,
                'signature':signature,
                'policy':policy
            };
            api.ajax({
                url: url,
                method: 'post',
                timeout: 60,
                returnAll:false,
                data:{
                    values: values,
                    files: {
                        file: path
                    }
                }
            },function(ret,err){
                //console.log(getLogStr([path,values,ret,err]));
                if(err.statusCode == 200){
                    if(eachCallback){
                        //console.log(returnKey);
                        eachCallback(returnKey,extra);
                    }
                }else{
                    if(eachCallback){
                        eachCallback('error',true);
                    }
                }
            });
        },function(err){
            console.error('get signature is failed! ' + JSON.stringify(err));
        },0);
    }

}
function testOss(){
    var paths = ['/mnt/sdcard/UZMap/A6918652765044/picture/p-4045ab72.jpg','/mnt/sdcard/UZMap/A6918652765044/picture/p-4045ab72.jpg'];
    paths.map(function(value){
        uploadOss(value,'bRiL7EmFrR9TiHpAH/avatar/',function(url){
            console.log(url);
        });
    });
}

function uploadComment(path,signatureParam,eachCallback,extra){
    var userId = $api.getStorage('id');
    if(!isDefine(userId)){
        console.error('userId is empty!');
        return;
    }
    var dir = userId + OSSDIR.COMMUNITY;
    uploadOss(path,dir,eachCallback,extra,signatureParam);
}

function uploadAvatar(path,eachCallback,extra){
    var userId = $api.getStorage('id');
    if(!isDefine(userId)){
        console.error('userId is empty!');
        return;
    }
    var dir = userId + OSSDIR.AVATAR;
    uploadOss(path,dir,eachCallback,extra);
}

//获取oss签名
function getSignature(callback,extra){
    var url = serviceNew + 'upload/getSignature';
    var headers = _getAjaxHeaders(false,true);
    var data = _getAjaxData();
    _ajaxData(url,'post',headers,data,function(ret){
        if(ret.statusCode != 200){
            if(isDefine(callback)){
                callback('error',true);
            }
            console.error('get signature is failed! ' + JSON.stringify(ret));
            return;
        }else{
            if(isDefine(callback)){
                var url = ret.info.host;
                var OSSAccessKeyId = ret.info.accessid;
                var signature = ret.info.signature;
                var policy = ret.info.policy;
                callback({
                    url:url,
                    OSSAccessKeyId:OSSAccessKeyId,
                    signature:signature,
                    policy:policy
                },extra);
            }
        }
    },function(err){
        console.error('get signature is failed! ' + JSON.stringify(err));
    },0);
}