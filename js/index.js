window.onload = function () {
    document.onscroll = function () {
        // 获取滚动条的纵坐标的值
        let s1 = document.documentElement.scrollTop;  // pc
        let s2 = document.body.scrollTop; // 移动
        let scroll =  s1 == 0? s2: s1;
        console.log("scroll"+ scroll)
        let search = document.querySelector('#search-fixxed-box')
        // 视口宽度
        let width = document.documentElement.clientWidth;
        console.log("width*0.12"+ width*0.12)
        if (scroll > width*0.12){
            // search变成固定定位
            search.style.position = 'fixed';
            search.style.left = 0;
            search.style.top = 0;
        }else {
            search.style.position = 'static';
        }




    }


}