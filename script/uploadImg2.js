	//打开拍照菜单
	function openImgAction(isClip,callback,extra){
		api.actionSheet({
		    cancelTitle: '取消',
		    buttons: ['拍照','从手机相册选择'],
		    style:{
		    	fontNormalColor:'#AAAAAA'
		    }
		},function(ret,err){
		    var index=ret.buttonIndex;
		    if(index=='1'){
				getPic('camera',isClip,callback,extra);
		    }else if(index=='2'){
		    	getPic('library',isClip,callback,extra);
		    }
		});
	}
	//拍照
	function getPic(from,isClip,callback,extra){
		api.getPicture({
		    sourceType: from,
		    encodingType: 'jpg',
		    mediaValue: 'pic',
		    quality: 30,
		    allowEdit: true
		}, function(ret, err){
		    if(ret && ret.data){
				var path = ret.data;
				if(isClip && api.systemType == 'android'){
					//android裁剪图片
					clipPic(path,callback,extra);
				}else {
					callback(path,extra);
				}
		    }else{
		    	toastMsg('获取图片失败');
		    }
		});
	}
	
	//android裁剪图片开始
	function clipPic(imgPath,callback,extra){
		var leftIcon = 'duola-iconfont icon-Close';
		var leftText = '';
		var leftNav = setNavData(leftIcon, leftText);

		var rightIcon = '';
		var rightText = '保存';
		var rightExtra = '';
		var rightCallback = 'execSaveImg';
		var rightClass = 'hit-color';
		var rightNav = setNavData(rightIcon, rightText, rightCallback, rightExtra, rightClass);
        api.openWin({
	        name: 'winClip',
	        url: extra.url? extra.url : '../html/winClip.html',
	        pageParam:{
				title:'裁剪',
				imgPath: imgPath,
				leftNav:leftNav,
				rightNav:rightNav,
				winName: api.winName,
				frameName: api.frameName
			},
	        bounces:false,
	        vScrollBarEnabled:false,
	        hScrollBarEnabled:false
        });
	}

	//测试
	function testOpenImgAction(){
		openImgAction(false,function(path){
			alert(path);
		});
	}
