//jq容器
$(function () {
    //首页点击事件
    $(".nav_menu li").click(function () {
        $(".nav_menu li").removeClass("shouye");
        $(this).addClass("shouye");

    });
    //图片的移入移出
    $(".big_container_img div").hover(function () {

        $(".big_container_img_mengban").eq($(this).index()).show();
        $(".hengxian").eq($(this).index()).show()
    }, function () {
        $(".big_container_img_mengban").eq($(this).index()).hide();
        $(".hengxian").eq($(this).index()).hide()

    });

    //TING图片部分
    $(".Ting_img_d1").hover(function () {
        $(".Ting_img_d1 img").css({
            transition: ' all 2s',
            transform: 'scale(1.1)'
        });
        $(".Ting_img_mengban1").show()
    }, function () {
        $(".Ting_img_d1 img").css({
            transform: 'scale(1)'
        });
        $(".Ting_img_mengban1").hide()
    });

    $(".Ting_img_d2").hover(function () {
        $(".Ting_img_d2 img").css({
            transition: ' all 2s',
            transform: 'scale(1.1)'
        });
        $(".Ting_img_mengban2").show()
    }, function () {
        $(".Ting_img_d2 img").css({
            transform: 'scale(1)'
        });
        $(".Ting_img_mengban2").hide()
    });

    $(".Ting_img_d3").hover(function () {
        $(".Ting_img_d3 img").css({
            transition: ' all 2s',
            transform: 'scale(1.1)'
        });
        $(".Ting_img_mengban3").show()
    }, function () {
        $(".Ting_img_d3 img").css({
            transform: 'scale(1)'
        });
        $(".Ting_img_mengban3").hide()
    });

    //底部
    $(".foot_wechat").hover(function () {

        $(".pianke-code").show();
    },function () {
        $(".pianke-code").hide();

    });
    //返回顶部
    $(".return").click(function () {
        $(window.document).scrollTop(0);
    });
    //导航栏响应事件

    var up = 0;
    $(window.document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if(scrollTop > up){
            if(scrollTop >= 90){
              $(".container").slideUp()
            }
        }else {
            $(".container").slideDown(1)

        }
        up = scrollTop;
    })


});


















