/**
 * 将photoBrowser正在展示的图片保存至相册
 * @param extra 选填 回调时额外参数
 */
function savePhotoBrowserToAlbum(successCallback, errorCallback, extra){
	var photoBrowser = api.require('photoBrowser');
	photoBrowser.getIndex(function(ret, err) {
		if (ret) {
			photoBrowser.getImage({
				index:ret.index
			},function(ret, err){
				if(ret){
					saveToAlbum(ret.path, successCallback, errorCallback, extra);
				}else{
					errorCallback(err, extra);
				}
			}) 
		} else {
			errorCallback(err, extra);
		}
	});
}

/**
 * 将文件保存至相册
 * @param path 必填 文件的本地路径
 * @param extra 选填 回调时额外参数
 */
function saveToAlbum(path,successCallback,errorCallback,extra){
	if(!path){
		return;
	}
	api.saveMediaToAlbum({
	    path: path
	}, function(ret, err) {
	    if (ret && ret.status) {
	    	ret.msg = ret.msg||"保存成功";
	        successCallback(ret, extra);
	    } else {
	        errorCallback(err, extra);
	    }
	});
}
