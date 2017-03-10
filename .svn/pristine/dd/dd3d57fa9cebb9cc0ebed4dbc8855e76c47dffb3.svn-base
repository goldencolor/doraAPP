//初始化侧滑组件
function initSlideSwipe3(containerId,data,activeData,callback,extra){

    try{
        if (typeof activeData == 'string'){
            activeData = activeData.substring(1, activeData.length - 1);

            activeData = activeData.split(',');
        }
        var html = doTHtml('slideswipe-template3',{data:data,activeData:activeData?activeData:{},callback:callback?callback:''});
        var containerEl = $api.byId(containerId);
        if(containerEl){
            $api.html(containerEl,html);
            var swiper = new Swiper($api.dom(containerEl,'div.swiper-container'), {
                slidesPerView: 'auto',
                freeMode: true,
                speed: 100,
                resistanceRatio: 0.5
            });
        }
    }catch(e){
        console.error('initSlideSwipe3 error!');
    }
}

function slideSwipeClick3(el,index,state,value,callback){
    //点击变hit-color
    var swiperWrapperEl = $api.closest(el, 'div.swiper-wrapper');
    if (swiperWrapperEl) {
        var clickELs = $api.domAll(swiperWrapperEl, 'span');
        if (clickELs[index] && state){

            $api.removeCls(clickELs[index], 'my-hit-color');
            $api.addCls($api.dom(clickELs[index], 'div.red-dot'), 'hide')

        }else if (clickELs[index] && !state){
            $api.addCls(clickELs[index], 'my-hit-color');
            $api.removeCls($api.dom(clickELs[index], 'div.red-dot'), 'hide')

        }
    }


        //其他
        var execCallback = getExecScript(callback,[index,value]);
        eval(execCallback);
}

//设置hit-color
function setSlideSwipeHitColor3(containerId,index){

    var containerEl = $api.byId(containerId);
    if(containerEl){
        var activeEl = $api.dom(containerEl,'div.swiper-slide span.my-hit-color');
        if(activeEl && $api.attr(activeEl, 'title') == index){
            return;
        }
        var spanEl = $api.dom(containerEl,'div.swiper-slide span[title="'+index+'"]');
        if(activeEl){
            $api.removeCls(activeEl,'my-hit-color');
        }
        if(spanEl){
            $api.addCls(spanEl,'my-hit-color');
        }
    }
}

//获取hit-color
function getSlideSwipeHitColor3(containerId){
    var containerEl = $api.byId(containerId);
    if(containerEl){
        var activeEl = $api.dom(containerEl,'div.swiper-slide span.my-hit-color');
        if(activeEl){
            return {
                value: $api.text(activeEl),
                index: $api.attr(activeEl, 'title')
            }
        }
    }
}

//清除hit-color
function clearSlideSwipeHitColor3(containerId){
    var containerEl = $api.byId(containerId);
    if(containerEl){
        var activeEl = $api.dom(containerEl,'.swiper-slide span.my-hit-color');
        if(activeEl){
            $api.removeCls(activeEl,'my-hit-color');
        }
    }
}

//reset hit-color
function resetSlideSwipeHitColor3(containerId, index){
    setSlideSwipeHitColor3(containerId, index? index: 0);
}

