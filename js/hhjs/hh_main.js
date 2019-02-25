 // js版  
    
    
   
    // 定义每一列之间的间隙 为10
    var gap = 10;
    box.style.height = 9500 + 'px'; 
    
    // var boxHeight = 0;
    // 先加载一次
    waterFall(get1()); 
    // 第二次加载
    // loading(3);

    // 瀑布流生成函数
    function waterFall(items) {
        // 列数  = 页面的宽度 / li的宽度
        var pageWidth = box.offsetWidth;
        var itemWidth = items[0].offsetWidth;
        var columns = parseInt(pageWidth / (itemWidth + gap));
        
        // console.log(boxHeight);
        // 用来存放图片高度
        var arr = [];

        for (var i = 0; i < items.length; i++) {
            if (i < columns) {
                // 第一行
                items[i].style.top = 0;
                items[i].style.left = (itemWidth + gap) * i + 'px';
                arr.push(items[i].offsetHeight);

            } else {
                // 其他行
                // 找到数组中最小高度和它的索引
                var minHeight = arr[0];
                var index = 0;
                for (var j = 0; j < arr.length; j++) {
                    if (minHeight > arr[j]) {
                        minHeight = arr[j];
                        index = j;
                    }
                }
                // 找到数组中最大高度和它的索引
                
                items[i].style.top = arr[index] + gap + 'px';
                // left值就是最小列距离左边的距离
                items[i].style.left = items[index].offsetLeft + 'px';

                // 修改最小列的高度 
                // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
                arr[index] = arr[index] + items[i].offsetHeight + gap;
            }
        }
    }
    function get1() {
        var box = document.getElementById('box');
        var items = box.children;
        return items;
    }
    // 加载图片函数
    // function loading(num) {

    //     for (var i = 0; i < (num+1)*30; i++) {
    //         var li = document.createElement("li");
    //         li.innerHTML = '<img src="hh_images/image2/' +i+ '.png">'+
    //         '<h3>【江湖笔墨客】双十一没情缘？快来看视频领上超美/酷捏脸数据和土味情话撩一撩你...</h3>'+
    //         '<p>'+'<span>寒深</span><a href="#">喜欢: 1 </a><a href="#">回复: 76</a>' 
    //         +'</p>';
    //         box.appendChild(li);
    //     }
    //     // items = document.getElementById('box').children;
    //     // console.log(items.length);
    //     waterFall(get1());
    // };
        
        


    
