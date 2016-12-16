	function uploadImg(){
		api.actionSheet({
		    cancelTitle: '取消',
		    buttons: ['拍照','从手机相册选择'],
		    style:{
		    	fontNormalColor:'#AAAAAA'
		    }
		},function(ret,err){
		    var index=ret.buttonIndex;
		    if(index=='1'){
				getPic('camera');
		    }
		    if(index=='2'){
		    	getPic('library');
		    }
		});
	}
	
	function getPic(from){
		var systemType = api.systemType;
		api.getPicture({
		    sourceType: from,
		    encodingType: 'jpg',
		    mediaValue: 'pic',
		    quality: 30,
		    allowEdit: true
		}, function(ret, err){
		    if(ret.data){
		    	var path = ret.data;
		    	if(systemType=='ios'){
		    		uploadPic(path);
		    	}else{
		    		//android裁剪图片
		    		clipPic(path);
		    	}
		    }else{
		    	toastMsg('获取图片失败');
		    }
		});
	}
	
	//android裁剪图片开始
	function clipPic(imgPath){
		api.openWin({
	        name: 'winClip',
	        url: '../html/winClip.html',
	        pageParam:{
	        	imgPath: imgPath,
	        	winName: api.winName,
	        	frameName: api.frameName
	        },
	        bounces:false,
	        vScrollBarEnabled:false,
	        hScrollBarEnabled:false
        });
	}
	
	//上传头像
	function uploadPic(path){
		console.log(path);
		api.showProgress({
		    style: 'default',
		    animationType: 'fade',
		    title: '正在上传图片',
		    text: '请稍候',
		    modal: true
		});
		var url = serviceUser + 'info/changeHeadPort';
		var token = $api.getStorage('token');
		api.ajax({
		    url: url,
		    method: 'post',
		    headers :{
                token:token
                
            },
		    timeout: 60,
		    dataType: 'json',
		    returnAll:false,
		    data:{
		        stream: path
		    }
		},function(ret,err){
			console.log(JSON.stringify(err));
			api.hideProgress();
		    if (ret) {
		        if(ret.statusCode=='200' && ret.result.avatar){
					setImg(userPhoto+ret.result.avatar);
		        }else{
		        	toastMsg('更改头像失败');
		        }
		    }else if(err && err.statusCode != 503){
		    	toastMsg(err.msg);
		    }
		});
	}
