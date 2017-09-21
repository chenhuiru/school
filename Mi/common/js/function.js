
/**
 * 将location.search -> Obj
 * @param  {string} searchStr [location.search]
 * @return {object}           [转换后的结果]
 */
function locSearchValToObj(searchStr) {
    // 异常处理
    if (!searchStr) {
        return null;
    }else {
        var str = searchStr.slice(1);
        var strArr = str.split('&');
        var obj = {};
        strArr.forEach(function(item, idx, arr){
            var arr = item.split('=');
            var key = decodeURI(arr[0]);
            var val = decodeURI(arr[1]);
            obj[key] = val;
        });
        return obj;
    }
}

/**
 * 异常处理（断言）
 * @param  {boolean} expression [判断条件]
 * @param  {string} message     [提示信息]
 * @return {object}             [描述错误的对象]
 */
function assert(expression, message) {
    if (!expression){
        throw {name: 'Assertion Exception', message: message};
    }
}


/**
 * 添加事件
 * @param {object} element   [元素节点]
 * @param {string} type       [事件类型]
 * @param {function} callBack [监听函数]
 */
function addEvent(element, type, callBack) {
    // 兼容IE10.0以下
    if(element.attachEvent) {
        element.attachEvent('on' + type, callBack);
    }else {
        element.addEventListener(type, callBack, null);
    }
}

/**
 * 获取非行间样式
 * @param  {object} obj  [元素节点]
 * @param  {string} attr  [要获取的样式属性]
 * @return {string}       [样式属性值]
 */
function getStyle(obj, attr) {
    // 兼容IE
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj, null)[attr];
    }
}

/**
 * 获取任意数之间的随机数
 * @param  {number} min [最小值]
 * @param  {number} max [最大值]
 * @return {number}     [随机数]
 */
function randomDecimals(min, max) {
    if (!min || !max || isNaN(min) || isNaN(max)) {
        return -1;
    }else {
        return Math.random() * (max - min) + min;
    }
}


/**
 * 获取任意数之间的整数随机数
 * @param  {number} min [最小值]
 * @param  {number} max [最大值]
 * @return {number}     [随机数]
 */
function randomInteger(min, max) {
    if (!min || !max || isNaN(min) || isNaN(max)) {
        return -1;
    }else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


/**
 * 获取随机字符
 * @param  {number} length [字符长度]
 * @return {string}        [随机结果]
 */
function random_char(length) {
    var bStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    bStr += 'abcdefghijklmnopqrstuvwxyz';
    bStr += '0123456789';
    var rStr = '';
    for (var i = 0; i < length; ++i) {
        var idx = Math.floor(Math.random() * bStr.length);
        rStr += bStr.substring(idx, idx + 1);
    }
    return rStr;
}



/**
 * 获取元素节点
 * @param  {string} Selector [选择器（id/class/tagName）]
 * @return {object}           [返回节点]
 */
function $(Selector) {
    // 异常处理
    if (typeof Selector != 'string' || Selector == '' || /\s/.test(Selector) == true) {
        return null;
    }
    if (/^#/.test(Selector) == true) {
        return document.getElementById(Selector.slice(1));
    }
    if (/^\./.test(Selector) == true) {
        return document.getElementsByClassName(Selector.slice(1));
    }
    return document.getElementsByTagName(Selector);
}


/**
 * XMLHttpRequest for GET
 * @param {string} url     [请求地址]
 * @param {function} success [请求成功回调函数]
 * @param {function} fail    [请求失败回调函数]
 */
function GET(url, success, fail) {
    // 异常处理
    assert(url, "缺乏请求参数！");
    // 创建请求对象
    var request = new XMLHttpRequest();
    // 配置请求
    request.open("GET", url, true);
    // 发送请求
    request.send(null);
    // 监听请求
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            // 请求成功
            // 解析数据
            var response = JSON.parse(request.responseText);
            if(success) { success(response); }
        }else {
            // 请求失败
            if(fail) { fail(request.status); }
        }
    }
}


/**
 * 淡入淡出效果-封装
 * @param element   执行元素
 * @param target    目标值
 * @param duration  持续时间
 * @param completed 回调函数
 */
function fade(element, target, duration, completed) {
    // Exception handling
    if(!element || target == undefined) {
        throw 'Error：Parameter is not complete in function \'changeOpacity\'.';
    }
    // Set the default value
    duration  = duration  ? duration  : 1000;
    // Gets the current opacity
    var curOpa = getCurrentOpacity();
    // Calculating offset
    var offset   = target - curOpa;
    // Set the interval
    var interval = 30;
    // Calculating speed
    var speed    = offset > 0 ? Math.ceil(offset / (duration / interval)) : Math.floor(offset / (duration / interval));
    // Execute transition animations
    var t = setInterval(function () {
        // Update the current opacity
        curOpa = getCurrentOpacity();
        // Determine whether to reach the target
        if((offset > 0 && curOpa < target) || (offset < 0 && curOpa > target)) {
            // Frame by frame change
            element.style.opacity = (curOpa + speed) / 100
        }else { // Has completed the transition animation
            element.style.opacity = target / 100;
            clearInterval(t);
            // Invoke the callback function
            if(completed) {
                completed();
            }
        }
    }, interval);

    function getCurrentOpacity() {
        var curOpa = 0;
        // Compatible with IE browser
        if(element.currentStyle) {
            curOpa = element.currentStyle['opacity'] * 100;
        }else {
            curOpa = getComputedStyle(element, false)['opacity'] * 100;
        }
        return curOpa;
    }
}