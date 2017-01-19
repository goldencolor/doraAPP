/**
 * Created by tiger on 2017/1/14.
 */
$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true
    });
    //var token=window.location.href.split('?')[1].split('=')[0].split('&')[0];
    var token = getUrlParam(window.location.href,'token');
    console.log(token);

    $.ajax({
        type:"post",
        url:"/app/user/info/duola2016",
        headers:{
            Accept: "application/json; charset=utf-8",
            token:token
        },
        data:{},
        dataType:"json",
        success:function(data){
            console.log(JSON.stringify(data));
            var ret=data.result;
            if(!ret){return}
//                用户昵称
            ret.nickname&&$('#nickname').html(ret.nickname);
//                穿了多少件衣服
            ret.clothesCount&&$('#clothesCount').html(ret.clothesCount);
//                在多啦花了多少钱
            ret.nickname&&$('#duolaPayMoney').html(parseInt(ret.payMoney));
//                少洗了多少次衣服
            ret.orderCount&&$('#orderCount').html(ret.orderCount);
//                多看了多少集韩剧
            ret.orderCount&&$('#korean').html(ret.orderCount*2);
//                减少了多少碳排放量
            ret.orderCount&&$('#emissions').html(ret.clothesCount*7);
//                穿过的衣服总价值
            ret.clothesMoney&&$('#clothesMoney').html(Math.floor(ret.clothesMoney));
//                省了多少买衣服的钱
            ret.saveMoney&&$('#saveMoney').html(Math.floor(ret.saveMoney));
//                排位
            ret.rank&&$('#rank').html(ret.rank);
        },
        error:function(){}
    });
});

//获取url中的指定name的参数
function getUrlParam(url,name) {
    if(!url || url.indexOf('?') == -1){
        return '';
    }
    url = url.substr(url.indexOf('?'));
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = url.substr(1).match(reg);
    if (r!=null){
        return (r[2].split('#')[0]);
    }else{
        return null;
    }
}
