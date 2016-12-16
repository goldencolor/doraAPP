//*******定义推送的方式**********
// 	推送H5 	web
//	推送产品 	goods
//	推送商户 	shop
//	推送项目	service
//	推送消息	msg
//	获得体验券	card
//	获得体验券	call

//**************************

function setPush(){
	var jpush;
	var str = api.deviceId;
	var pushDeviceId='';
	arrId = str.split('-');
	for(j=0;j<arrId.length;j++){
		pushDeviceId += arrId[j];
	}

	jpush = api.require('ajpush');
	var param = {alias:pushDeviceId};
	var systemType = api.systemType;
	if(systemType=='android'){ 	
		jpush.init(function(ret, err){
		});
	}
	jpush.bindAliasAndTags(param, function(ret, err){});
	if(systemType=='android'){
		api.addEventListener({name:'appintent'}, function(ret,err) {
			var  extra = ret.appParam.ajpush.extra;
			showInfo(extra);
		});
	}else{
		api.addEventListener({name:'noticeclicked'}, function(ret,err) {
		  	if(ret && ret.value){
		      	var  extra = ret.appParam.ajpush.extra;
		      	showInfo(extra);
			}
			
		});
	}
	jpush.setListener(
	    function(ret,err) {	    	
	    	if(ret){
	    		api.notification({
	    			sound:'default',
				    notify: {
				        content:ret.content,
				        extra:ret.extra
				    }
				}, function(ret, err){
				    var id = ret.id;
				});
	    	}
	    }
	);
	api.addEventListener({
	        name:'noticeclicked'
        },function(ret,err){
        	if(ret){
        		showInfo(ret.value);
        	}
    });
}
//	
//	


//
function showInfo(extras){
	var extras = JSON.parse(extras);
	var name = '';
	var id = '';
	if(extras.type=='ACTION_NAV'){
		if(extras.data=='0'){
			name ='首页';
			id = 'tabbar1';
		}else if(extras.data=='1'){
			name ='云衣橱';
			id = 'tabbar2';
		}else if(extras.data=='2'){	
			name ='我的衣服';
			id = 'tabbar3';
		}else{
			name ='我的';
			id = 'tabbar4';
		}
		if(id && name){
			api.execScript({
				name:'root',
		        script: 'randomSwitchBtn($api.byId('+id+'),"'+name+'",'+extras.data+');'
	        });
		}
	}else if(extras.type=='ACTION_GO'){
		var page = '';
		var url = '';
		var title = '';
		var text = '';
		if(extras.data=='MESSAGE'){
			page = 'msg';
			url  = 'html/win.html';
			title = '我的消息';
			text =extras.text;
		}else if(extras.data=='NEWCOME'){
			api.execScript({
				name: 'root',
	       		script: 'jumpPage(1);'
        	});
        	return;
        }else if(extras.data=='SHOW_CLOTH'){
			page = 'showInfo';
			url  = 'html/winShow.html';
			title = '····';		
			text =extras.text;
		}
		if(page && url){
			api.openWin({
	            name: page,
	            url: url, 
	            pageParam:{
	                page: page,
	                title:title,
	                id:text
	            }
	        });
		}
	}else if(extras.type=='ACTION_URL'){
		api.openWin({
            name: 'winWeb',
            url: 'html/winWeb.html', 
            pageParam:{
                page: 'winWeb',
                title:extras.text,
                url:extras.data
            }
        });
	}
}