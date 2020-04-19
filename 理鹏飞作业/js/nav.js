
Object.keys($(" #topLeft .foldUp")).forEach(index => {
    if (index < index.length) {
        $(" #topLeft .foldUp")[0].index = index * 1
        $(" #topLeft .foldUp")[0].onmouseenter = function (e) {
            console.log(e.target)
            $("#conceal").css({ "height": "200PX" })
            e.target.style = "transform: rotate(180deg);transition: all 1s;"
            $("#conceal").text("")
            $(" #topLeft .foldUp")[0].parentElement.style = "height:auto;"
            $("<div>").append($("<img>").attr({ src: "img/xiaochengxu.jpg" })).append($("<p>").text("手机站")).appendTo($("#conceal"))
            $("<div>").append($("<img>").attr({ src: "img/oneCode.jpg" })).append($("<p>").text("小程序")).appendTo($("#conceal"))
        }
        $(" #topLeft .foldUp")[0].onmouseleave = function (e) {
            $("#conceal").css({ "height": "0" })
            e.target.style = "transform: rotate(0deg);transition: all 1s;"
        }
    }
})
Object.keys($(" #topRight .foldUp")).forEach(index => {

    if (index < $(" #topRight .foldUp").length) {
        $(" #topRight .foldUp").eq(index)[0].index = index * 1
        $(" #topRight .foldUp").eq(index)[0].onmouseenter = function (e) {
            e.target.style = "transform: rotate(180deg);transition: all 1s;"
        }
        $(" #topRight .foldUp").eq(index)[0].onmouseleave=function(e){
            e.target.style = "transform: rotate(0deg);transition: all 1s;"
        }
       console.log( $(" #topRight .foldUp").eq(index)[0])
    }
})
$(window).scroll(function () {
    if ($(document).scrollTop() >= 230) {
        $("#movenav")[0].style = "width:100%;height:150px;position:fixed;top:0;left:0;"
        $("main")[0].style="  position: relative; top:200px"
        $("footer")[0].style="  position: relative; top:200px"
    } else {
        $("#movenav")[0].style = "height: 200px;position:none;"
        $("main")[0].style="  position: none; top:0"
        $("footer")[0].style="  position: none; top:0"
    }  
})
$("#divInputSelct").change(function(e){
    console.log(e.target.value,e.target.nextElementSibling.placeholder)
    e.target.nextElementSibling.placeholder="请输入"+e.target.value+"名"
})
