
$("span").mouseenter(function (e) {
    e.target.style = "color:rgb(220, 67, 68);"
    Object.keys(e.target.children).forEach(function (index) {
        if (e.target.children[index].href) {
            e.target.children[index].style = "color:rgb(220, 67, 68);"
        }
    })
})
$("span").mouseleave(function (e) {

    e.target.style = "color:rgb(0,0,0);"
    Object.keys(e.target.children).forEach(function (index) {
        if (e.target.children[index].href) {
            e.target.children[index].style = "color:rgb(0,0,0);"
        }

    })
})
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
            console.log(e.target)
            $("#conceal").css({ "height": "200PX" })
            e.target.style = "transform: rotate(180deg);transition: all 1s;"
        }
        $(" #topLeft .foldUp")[0].onmouseleave = function (e) {
            $("#conceal").css({ "height": "0" })
            e.target.style = "transform: rotate(0deg);transition: all 1s;"
        }
    }
})

