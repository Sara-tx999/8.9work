$(function(){
    //菜单
    $(".menu img").hammer().bind("tap",function(){
        $(".list").css("display","block")
        $(".menu img").css("display","none");
    })
    $(".ex").hammer().bind("tap",function(){
        $(".list").css("display","none")
        $(".menu img").css("display","block")
    })
})