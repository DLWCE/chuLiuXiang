/*
* 工具包封装：好处  便于维护/使用很方便,复用性高
* 本文件主要处理浏览器兼容性问题
*/

/**
 * 1. 根据id获取元素
 * @param str  id字符串
 * @return {HTMLElement | null}  元素/null
 */
function id ( str ) {
    return document.getElementById(str);
};

/**
 * 2.获取元素文本内容兼容性封装
 * @param ele  元素
 * @return {*}   文本内容
 */
function getText ( ele ) {
    //能力检测
    if(ele.innerText == undefined){//获取不到，火狐42之前浏览器
        return ele.textContent;//直接获取textContent
    }else{//如果innerText可以使用（非IE8浏览器）
        return ele.innerText;
    }
};


/**
 * 3.设置元素文本内容兼容性封装
 * @param ele  元素
 * @param text  文本
 * @return {*}   无返回值
 */
function setText ( ele,text ) {
    //能力检测
    if(ele.innerText == undefined){//获取不到，火狐42之前浏览器
        ele.textContent = text;//直接获取textContent
    }else{//如果innerText可以使用（非IE8浏览器）
        ele.innerText = text;
    }
};


/**
 * 4.获取元素的上一个兄弟元素
 * @param ele 元素
 * @return 上一个元素
 */
function getPreviousElementSibling ( ele ) {
    if(ele.previousElementSibling){//只要previousElementSibling不是undeifined，条件成立
        return ele.previousElementSibling;//非IE8浏览器
    }else{
        var node = ele.previousSibling;//获取元素的上一个节点（注释 文本 null ）
        console.log ( node.nodeType );
        /*思路：如果上一个节点类型不是1，说明不是元素，就要继续往上找
        循环特点：（1）次数不固定
        （2）循环结束的条件固定：（2.1）node.nodeType == 1  || node == null
         while小括号，条件成立才会执行循环体： node.nodeType != 1 &&  node != null
         while(条件 true){
             node = node.previousSibling;
         }
         */
        while (node.nodeType != 1  &&  node != null){//如果能够找到上一个节点，并且上一个节点的类型不是1
            node = node.previousSibling;//继续寻找
        }
        return node;
    }
};

/**
 * 5.获取元素的下一个兄弟元素
 * @param ele 元素
 * @return 元素
 */
function getNextElementSibling ( ele ) {
    if(ele.nextElementSibling){//只要previousElementSibling不是undeifined，条件成立
        return ele.nextElementSibling;//非IE8浏览器
    }else{
        //IE8浏览器
        var node = ele.nextSibling;//上一个节点 文本  注释  元素  null
        /*while循环
        结束条件：可以找到节点，并且节点类型是1
         */
        while(node != null && node.nodeType != 1){//只要节点存在并且类型不是1，就说明一定不是元素节点，继续寻找
            node = node.nextSibling;//继续找上一个
        }
        //只要节点的类型是1，就结束寻找，返回找到的节点
        return node;
    }
};

/**
 * 6.获取第一个子元素
 * @param ele  父元素
 * @return {*} 第一个子元素
 */
function getFirstElementChild  ( ele ) {
    if(ele.firstElementChild){
        return ele.firstElementChild;//非IE8浏览器
    }else{
        //IE8 需要通过节点来获取
        var node = ele.firstChild;
        while (node.nodeType != 1 && node != null){
            node = node.nextSibling;
        }
        return node;
    }
};

/**
 * 7.获取元素的最后一个子元素
 * @param ele 元素
 * @return {*} 最后子元素
 */
function getLastElementChild ( ele ) {
    if(ele.lastElementChild){//非IE8
        return ele.lastElementChild;
    }else{//IE
        var node = ele.lastChild;//获取最后一个节点
        while (node.nodeType != 1 && node != null){
            node = node.previousSibling;//找上一个节点
        }
        return node;
    }
};

/** @description 获取元素属性get_style(ele, attr)
    * @param  ele 网页元素
    * @param  attr 元素的属性名(str)
    * @return  元素对应的属性样式值(带单位)
    */
   function get_style(ele, attr) {
    //兼容性处理,能力检测,这里要使用window.getComputerStyle()
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];//对象的取值法
    }else {
        // IE8的方法
        return ele.currentStyle[attr];
    }
};

/** @description 缓动动画
* @param ele元素
* @param attrs对象属性
* @param 回调函数
* @return  无
*/
function animation_move(ele, attrs, callback) {
    // 用定时器来完成缓动动画,先清除之前的定时器
    clearInterval(ele.tid);
    ele.tid = setInterval(function () {
        // 定时器里用到的值都是attrs里面的, 我们要遍历传入的attrs对象
        var flag = true;
        for (var key in attrs) {
            // 这里要对层级属性进行单独处理; 背景色也是..,
            if (key == 'zIndex' || key == 'backgroundColor') {
                // 如果存在,则直接赋值...
                ele.style[key] = attrs[key];
            } 
            else if (key == 'opacity') {
                // 透明度(0~1的小数)的数值要放大处理
                var target = attrs[key]*100;
                var cur = parseFloat(get_style(ele, key))*100; 
                var step = (target - cur)/10;
                step = cur < target ? Math.ceil(step) : Math.floor(step);
                cur += step;
                // 赋值给对象,更新其属性值
                ele.style[key] = cur/100;
                if (cur != target) {
                    flag = false;
                }
            }
            else {
               // 此时的目标位置相当于key对应的值, 我们取出来
                var target = attrs[key]; // 对对象中的属性进行动画操作
                var cur = parseInt(get_style(ele, key)); //带单位需转化
                var step = (target - cur)/10;//存在小数
                step = cur < target ? Math.ceil(step) : Math.floor(step);
                cur += step;
                // 赋值给对象,更新其属性值
                ele.style[key] = cur + 'px'; //这里只能采用对象字符串的方法来赋值/取值
            
                if (cur != target) {
                    // 如果有一个元素没到达目标位置,让循环继续走, 直到每一个属性都走完
                    flag = false;
                } 
            }
        };
        if (flag) {
            clearInterval(ele.tid);
            // 这里要对函数进行判断
            if (typeof callback == 'function') {
                callback();
            }
        }
    }, 50);
};

/** @description 获取浏览器页面滚动距离
    * @return  {scrollLeft, scrollTop}
    */
    function get_scroll() {
    // 使用逻辑或来找真
    var x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    var y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    return {
        scrollLeft: x,
        scrollTop: y,
    }
};

/** @description 获取浏览器页面可视宽高
    * @return  {clientWidth, clientHeight}
    */
    function get_client_size() {
    // 使用逻辑或来找真
    var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    var y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    return {
        clientWidth: x,
        clientHeight: y,
    }
};

/** @description 获取事件对象触发点的pagex和pagey值
* @param e事件对象
* @return {pageX, pageY}
*/
function get_page_point(e) {
    var x = e.clientX + get_scroll().scrollLeft;
    var y = e.clientY + get_scroll().scrollTop;
    return {
        pageX:x,
        pageY:y
    }
};

// 事件对象的兼容
// e = e || window.event;

/** @description 元素多个同名事件监听
        * @param ele事件对象,即元素
        * @param type,事件类型 (str)
        * @param func,事件处理函数
        * @return func的结果
        */
       function addEvent(ele, type, func) {
        // 能力检测
        if (ele.addEventListener) {
            //执行函数
            ele.addEventListener(type, func);
        }
        else if (ele.attachEvent) {
            // IE8, 方法需要加on
            ele.attachEvent('on'+type, func);
        }
        else {
            // 元素.事件类型
            ele['on'+type] = func;
        }
    };
    /** @description 元素多个同名事件移除
    * @param ele事件对象,即元素
    * @param type,事件类型
    * @param func,事件处理函数
    * @return func的结果
    */
    function removeEvent(ele, type, func) {
        // 能力检测
        if (ele.removeEventListener) {
            //执行函数
            ele.addEventListener(type, func);
        }
        else if (ele.detachEvent) {
            // IE8, 方法需要加on
            ele.detachEvent('on'+type, func);
        }
        else {
            // 元素.事件类型
            ele['on'+type] = null;
        }
    };

// 获取真实事件源
// e = e.target || e.srcElement

// coder悬浮下滑淡入
$(function () {
    $('.version').on('mouseenter', function () {
        console.log($('.coder'));
        $('.coder').stop(true, false).animate({
            top: 40,
            opacity: 1,
        }, 1000);
    })
    $('.version').on('mouseleave', function () {
        console.log($('.coder'));
        $('.coder').stop(true, false).animate({
            top: 15,
            opacity: 0,
        }, 1000);
    })

    // 圆点移入事件,委托注册

    var index = 0; // 保存图片索引

    $('.dot').on('mouseenter', 'i', function () {
        // 鼠标移入,图片改变
        clearInterval(timer);
        $(this).addClass('dot-bar').siblings('i').removeClass('dot-bar');
        var $index = $(this).attr('index');
        $('.game-banner li').eq($index).stop(true, false).fadeIn(1000).siblings('li').fadeOut(1000);
    })
    // 圆点移出
    $('.dot').on('mouseleave', 'i', function () {
        timer = setInterval(function(){
            if (index <= 4) {
                $(".dot i").eq(index).addClass('dot-bar').siblings('i').removeClass('dot-bar');
                $('.game-banner li').eq(index).stop(true, false).fadeIn(1000).siblings('li').fadeOut(1000);
                index++;
            }else{
                index = 0;
            }
        }, 1500);
    })
    // 自动轮播

    timer = setInterval(function(){
        if (index <= 4) {
            $(".dot i").eq(index).addClass('dot-bar').siblings('i').removeClass('dot-bar');
            $('.game-banner li').eq(index).stop(true, false).fadeIn(1000).siblings('li').fadeOut(1000);
            index++;
        }else{
            index = 0;
        }
    }, 2000);
        
});













