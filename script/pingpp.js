
function ping(charge,fromPage){
	for(var x in charge){
		if(charge[x]=='YES'){
			charge[x]=true;
		}
		if(charge[x]=='NO'){
			charge[x]=false;
		}
	}
	if(charge['refunds']['has_more']=='YES'){
		charge['refunds']['has_more']=true;
	}
	if(charge['refunds']['has_more']=='NO'){
		charge['refunds']['has_more']=false;
	}
	var pingpp = api.require('pingpp');
	var params = {
	    charge: charge,
	    scheme: "duola"
	};
	
	pingpp.createPayment(params, function(ret, err){
	    if (ret.result == "success"){
			console.log(fromPage);
			if(fromPage == 'buyCloth'){
				setTimeout(api.execScript({
					frameName:'buyClothesFrame',
					script: 'oppenSuccessPage()'
				}),500);
			}else if (fromPage =="bagChange"){
				vm.sucssAlert()
			}else if(fromPage =='userPayNew'){
				//新用户缴费成功，逻辑移到check方法中
			}else if(fromPage == 'userSesameDeposit'){  // 下单时缴纳押金成功，芝麻认证不符合要求时缴纳押金成功
				// 关闭下单页面的模态框
				//execCloseModal();
			}else{
				setTimeout(api.execScript({
					name:'root',
					script: 'WinWallet("YES");'
				}),500);
			}
		    check(charge.channel,charge.amount);
		    var text ='支付成功';
		}else if(ret.result=='cancel'){
	    	var text ='您已取消支付';
	    }else if(ret.result=='invalid'){
	    	if(charge.channel=='alipay'){
	    		var text ='您未安装支付宝';
	    	}
	    	if(charge.channel=='wx'){
	    		var text ='您未安装微信';
	    	}	    	
	    }else if(ret.result=='fail'){
	    	var text ='支付失败,请重新操作';	
	    }
	    api.toast({
            msg:text,
            duration: 2000,
            location: 'bottom'
        });
        
        if(fromPage == 'userSesameDeposit'){ // 下单时缴纳押金失败，芝麻认证不符合要求时缴纳押金失败
        		_loadingHide();
        }     
	});	
}
