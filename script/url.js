//接口正式的
var serviceUser = "https://restful.duolayimeng.com/app/user/";
var serviceNew = "https://restful.duolayimeng.com/app/";

//本地测试地址
// var serviceNew = "http://192.168.4.112:5000/app/";
// var serviceUser = "http://192.168.4.112:5000/app/user/";
// 公网测试地址
// var serviceNew = "https://101.201.101.61:10000/app/";
// var serviceUser = "https://101.201.101.61:10000/app/user/";
// var serviceNew = "https://test.duolayimeng.com/app/";
// var serviceUser = "https://test.duolayimeng.com/app/user/";

var duolaGoddess = 'https://goddess.duolayimeng.com/app/';
// var duolaGoddess = 'https://test.duolayimeng.com/app/';

// var serviceNew = "http://192.168.12.106:7000/app/";
// var serviceUser = "http://192.168.12.106:7000/app/user/";

// var serviceUser = "http://test.duolayimeng.com/app/user/";
// var serviceNew = "http://test.duolayimeng.com/app/";

//var serviceNew = "http://192.168.4.22:7000/app/";
//var serviceUser = "http://192.168.4.22:7000/app/user/";

//jim测试
//var serviceNew = "http://192.168.4.22:7000/app/";
//var serviceUser = "http://192.168.4.22:7000/app/user/"; 

//衣服图片地
var colthPath  = "http://img.duolayimeng.com/original/";
//用户头像
var userPhoto = "http://res.duolayimeng.com/";
//其他图片地址
var imgPath   	  = "http://img.duolayimeng.com/public/image/"; 
var imgChoosePath = "http://img.duolayimeng.com/new/";
var imgXydrPath   = "http://duola-r es.img-cn-beijing.aliyuncs.com/";
//衣服图片规格
//var colthPathStyle = '@1e_1c_0o_0l_720h_480w_90q';
var colthPathStyle = '@1e_1c_0o_0l_480h_320w_90q';
//选衣达人图片规格
var chooseColthStyle ='@!480w720h90q';
var showInfoStyle ='@!Detail';
//我的订单图片
var OrderColthStyle ='@!480w720h90q';

//首页主题图片样式
var IndexThemesStyle = '@0o_0l_640w_80q';
//首页轮播图片样式
var UIScrollPictureStyle = "@0o_0l_640w_80q"; 
 
//主题详情页图片样式
var ContentThemesStyle = '@40q';

//分享链接 
var shareUrl = 'http://m.duolayimeng.com/';
var shareColthStyle ='@!45w75h';

//物流接口
var shunfengUrl ='http://www.kuaidi100.com/query?type=shunfeng&postid=';


//根据config.xml 是否调试模式 自动切换到生产坏境的restful api 接口
function autoSwitchProduction(){
	if(!api.debug){
		//非调试模式
		serviceUser = "http://restful.duolayimeng.com/app/user/";
		serviceNew = "http://restful.duolayimeng.com/app/";
	}
}