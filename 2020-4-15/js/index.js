
$("span").mouseenter(function (e) {
    e.target.style = "color:rgb(220, 67, 68);"
    Object.keys(e.target.children).forEach(function (index) {
        if (e.target.children[index].href) {
            e.target.children[index].style = "color:rgb(220, 67, 68);"
        }
        if (e.target.children[index].className == "foldUp") {
            e.target.children[index].style = "transform: rotate(180deg);transition: transform 1s;"
        }
    })
})
$("span").mouseleave(function (e) {
    e.target.style = "color:rgb(0,0,0);"
    Object.keys(e.target.children).forEach(function (index) {
        if (e.target.children[index].href) {
            e.target.children[index].style = "color:rgb(0,0,0);"
        }
        if (e.target.children[index].className == "foldUp") {
            e.target.children[index].style = "transform: rotate(0deg);transition: transform 1s;"
        }
    })
})
Object.keys($(".foldUp")).forEach(index=>{
    $(".foldUp").eq(index).mouseenter(function (e) {
        $("#conceal").css({top:"30px",transition: "top 1s"})
        $("img").attr({ src: "img/xiaochengxu.jpg", alt: "Test Image" }).appendTo($("#conceal"));
    })
    $(".foldUp").eq(index).mouseleave(function (e) {
        $("#conceal").css({top:"0px",transition: "top 1s"})
    })
})

