/**
 * Created by oHHO on 2017-01-04.
 */

var CONSTANTLOG = {
    ACTION:{
        VIEW:'view',
        CONSUME:'consume',
        USE:'use',
        COLLECT:'collect',
        UNCOLLECT:'uncollect',
        LIKE:'like',
        DISLIKE:'dislike',
        GRADE:'grade',
        COMMENT:'comment',
        SHARE:'share',
        SEARCH_CLICK:'search_click',
        CLICK:'click'
    },
    SWITCH:true     //日志埋点开关
};


function sendLogData(action,extra,cb){
    var param = {
        "bhv_type":action,
        "bhv_datetime":(new Date()).format("yyyy-MM-dd hh:mm:ss"),
        env:{
            Network:api.connectionType
        }
    };
    var lon = $api.getStorage('lon');
    var lat = $api.getStorage('lat');
    if(lon && lat){
        param.pos_type = 'll';
        param.position = lon+':'+lat;
    }
    param = objExtend(param,extra);
    var url = serviceNew + 'behaviour';
    var headers = _getAjaxHeaders(true, true);
    var data = _getAjaxData(param);
    _ajaxData(url, 'post', headers, data, cb, null, 0);
}

/**
 * 物品曝光
 * @param item_id string 必填 物品id
 * @param cb function 选填 回调函数
 */
function setLogView(item_id,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    var extra = {
        item_id:item_id
    };
    sendLogData(CONSTANTLOG.ACTION.VIEW,extra,cb);
}

/**
 * 物品点击
 * @param item_id string 必填 物品id
 * @param bhv_amt float 选填 如果是推荐引导，取值推荐列表的展现次序
 * @param cb function 选填 回调函数
 * 备注：bhv_amt可以为回调函数
 */
function setLogClick(item_id,bhv_amt,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    var extra = {
        item_id:item_id
    };
    if(!isNaN(bhv_amt)){
        extra.bhv_amt = parseFloat(bhv_amt);
    }else if(typeof bhv_amt === 'function'){
        cb = bhv_amt;
    }
    sendLogData(CONSTANTLOG.ACTION.CLICK,extra,cb);
}

/**
 * 搜索物品点击
 * @param item_id string 必填 物品id
 * @param content string 必填 搜索词
 * @param cb function 选填 回调函数
 */
function setLogSearchClick(item_id,content,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    if(!content || typeof content != 'string'){
        console.error('log content is needed!');
        return;
    }
    var extra = {
        item_id:item_id,
        content:content
    };
    sendLogData(CONSTANTLOG.ACTION.SEARCH_CLICK,extra,cb);
}

/**
 * 物品收藏(添加衣橱)
 * @param item_id string 必填 物品id
 * @param cb function 选填 回调函数
 */
function setLogCollect(item_id,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    var extra = {
        item_id:item_id
    };
    sendLogData(CONSTANTLOG.ACTION.COLLECT,extra,cb);
}

/**
 * 物品取消收藏(移除衣橱)
 * @param item_id string 必填 物品id
 * @param cb function 选填 回调函数
 */
function setLogUnCollect(item_id,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    var extra = {
        item_id:item_id
    };
    sendLogData(CONSTANTLOG.ACTION.UNCOLLECT,extra,cb);
}

/**
 * 物品评分
 * @param item_id string 必填 物品id
 * @param bhv_amt float 必填 评分
 * @param cb function 选填 回调函数
 */
function setLogGrade(item_id,bhv_amt,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    if(isNaN(bhv_amt)){
        console.error('bhv_amt is number!');
        return;
    }
    var extra = {
        item_id:item_id,
        bhv_amt:parseFloat(bhv_amt)
    };
    sendLogData(CONSTANTLOG.ACTION.GRADE,extra,cb);
}

/**
 * 物品评论
 * @param item_id string 必填 物品id
 * @param content string 必填 评论文字
 * @param cb function 选填 回调函数
 */
function setLogComment(item_id,content,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    if(!content || typeof content != 'string'){
        console.error('log content is needed!');
        return;
    }
    var extra = {
        item_id:item_id,
        content:content
    };
    sendLogData(CONSTANTLOG.ACTION.COMMENT,extra,cb);
}

/**
 * 物品分享
 * @param item_id string 必填 物品id
 * @param media_type string 必填 渠道
 * @param cb function 选填 回调函数
 */
function setLogShare(item_id,media_type,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    if(!media_type || typeof media_type != 'string'){
        console.error('log media_type is needed!');
        return;
    }
    var extra = {
        item_id:item_id,
        media_type:media_type
    };
    sendLogData(CONSTANTLOG.ACTION.SHARE,extra,cb);
}

/**
 * 物品点赞
 * @param item_id string 必填 物品id
 * @param cb function 选填 回调函数
 */
function setLogLike(item_id,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    var extra = {
        item_id:item_id
    };
    sendLogData(CONSTANTLOG.ACTION.LIKE,extra,cb);
}

/**
 * 物品点衰
 * @param item_id string 必填 物品id
 * @param cb function 选填 回调函数
 */
function setLogDislike(item_id,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    var extra = {
        item_id:item_id
    };
    sendLogData(CONSTANTLOG.ACTION.DISLIKE,extra,cb);
}

/**
 * 物品消费(下单配送)
 * @param item_id string 必填 物品id
 * @param bhv_amt float 必填 购买金额
 * @param bhv_cnt int 必填 购买件数
 * @param cb function 选填 回调函数
 */
function setLogConsume(item_id,bhv_amt,bhv_cnt,cb){
    if(!CONSTANTLOG.SWITCH){
        return;
    }
    if(!item_id || typeof item_id != 'string'){
        console.error('log item_id is needed!');
        return;
    }
    if(isNaN(bhv_amt)){
        console.error('bhv_amt is number!');
        return;
    }
    if(isNaN(bhv_cnt)){
        bhv_cnt = 1;
    }
    var extra = {
        item_id:item_id,
        bhv_amt:parseFloat(bhv_amt),
        bhv_cnt:parseInt(bhv_cnt)
    };
    sendLogData(CONSTANTLOG.ACTION.CONSUME,extra,cb);
}