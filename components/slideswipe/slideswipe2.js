var lastIndex =-1;
//初始化侧滑组件
function initSlideSwipe2(containerId,data,activeIndex,callback,extra){
    lastIndex = activeIndex;
    try{
        var html = doTHtml('slideswipe-template2',{data:data,activeIndex:activeIndex?activeIndex:0,callback:callback?callback:''});
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
        console.error('initSlideSwipe error!');
    }
}

function slideSwipeClick2(el,index,lastIndex,value,callback){

    this.lastIndex = lastIndex;
    //点击变hit-color
    var swiperWrapperEl = $api.closest(el, 'div.swiper-wrapper');
    if (swiperWrapperEl) {
        var activeEl = $api.dom(swiperWrapperEl, 'span.my-hit-color');
        if (activeEl && activeEl == $api.closest(el, 'div.swiper-slide')) {
            return;
        }
        if(activeEl){
            $api.removeCls(activeEl, 'my-hit-color');
            // $api.addCls($api.dom(activeEl, 'div.red-dot'), 'hide')
        }
        //markll修改
        if (index == lastIndex || index == -1){
            // -1表示全部,一个都不选中
            index = -1;
        }else {
            var spanEl = $api.dom(el, 'span');
            $api.addCls(spanEl, 'my-hit-color');
            // $api.removeCls($api.dom(spanEl, 'div.red-dot'), 'hide')
        }
        lastIndex = index;
        //markll修改end

        //其他
        var execCallback = getExecScript(callback,[index,value]);
        eval(execCallback);
    }
}

//设置hit-color
function setSlideSwipeHitColor2(containerId,index){

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
function getSlideSwipeHitColor2(containerId){
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
function clearSlideSwipeHitColor2(containerId){
    var containerEl = $api.byId(containerId);
    if(containerEl){
        var activeEl = $api.dom(containerEl,'.swiper-slide span.my-hit-color');
        if(activeEl){
            $api.removeCls(activeEl,'my-hit-color');
        }
    }
}

//reset hit-color
function resetSlideSwipeHitColor2(containerId, index){
    setSlideSwipeHitColor2(containerId, index? index: 0);
}

