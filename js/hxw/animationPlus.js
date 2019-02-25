/*
** Create by 一个单词拼错改半小时bug的人 on 2018/11/19
*/

/**1.匀速动画封装
 * @param ele 要移动的元素
 * @param target  目标距离
 */
function animationMove ( ele,target ) {
    //1.先清除之前的定时器，以本次移动为准
    clearInterval(ele.timeID);
    //2.开始本次移动
    ele.timeID = setInterval(function (  ) {
        //2.1 获取元素当前的位置
        var currentLeft = ele.offsetLeft;
        //2.2 开始移动
        var isLeft =  currentLeft < target?true:false;
        isLeft?currentLeft+=100:currentLeft-=100;
        ele.style.left = currentLeft + 'px';
        //2.3 边界检测
        if (isLeft?currentLeft>=target:currentLeft <= target){
            //(1)停止定时器
            clearInterval(ele.timeID);
            //(2)元素复位
            ele.style.left = target + 'px';
        }
    },20);
}


/** 2.缓动动画封装
 @param ele:要移动的元素
 @param target 移动目标距离
 */
// 封装一个缓慢移动动画
function animationSlow (obj,attrs,fn){
    // 1 第一步 清除定时器
    clearInterval(obj.timeID);
    // 2  设置定时器
    obj.timeID = setInterval(function(){
        var isAllOK = true;
        //对于一个属性数组对象来说，我们需要遍历这个对象来取出其中的属性
        for(var key in attrs) {
            if(key =='zIndex'|| key == 'backgroundColor'){
                obj.style[key] = attrs[key]; //判断如果是其他非数值类型 就直接提取它的属性
            }else if(key =='opacity'){
                var attr = key;  //这里声明变量名为 attr是为了方便后面直接调用  key就是属性名 字符串
                var target = attrs[key];
                //2.1 获取元素的初始位置
                var current = parseFloat(getStyle(obj, attr))*100;
                //2.2 元素的移动规律
                var step = (target*100-current)/10;
                // 2.3 判断 移动的正负性
                step = step>0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                // 2.4 元素位置显示
                obj.style[attr] = current/100;

                // 2.5 终点检测
                if (target != current) {
                    isAllOK = false;
                }
            }else{
                var attr = key;  //这里声明变量名为 attr是为了方便后面直接调用  key就是属性名 字符串
                var target = attrs[key];
                //2.1 获取元素的初始位置
                var current = parseInt(getStyle(obj, attr));
                //2.2 元素的移动规律
                var step = (target-current)/10;
                // 2.3 判断 移动的正负性
                step = step>0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                // 2.4 元素位置显示
                obj.style[attr] = current + 'px';

                // 2.5 终点检测
                if (target != current) {
                    isAllOK = false;
                }
            }
        };
        if (isAllOK){
            clearInterval(obj.timeID);//开关思想 防止属性误差
            //函数回调 酷炫连招
            if(typeof fn =='function'){
                fn();
            }
        }

    },30)

}