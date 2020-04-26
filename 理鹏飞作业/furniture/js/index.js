
Object.keys($(".foolerThreeoption")).forEach(function (index, item) {
    if (index * 1|| index * 1 == 0) {
        $(".foolerThreeoption")[index].index = index * 1
    }
})
$(".foolerThreeoption").mouseenter(function (e) {
    $(".foolerThreeoption>span").eq(e.target.index).css({ "display": "block" })
})
$(".foolerThreeoption").mouseleave(function (e) {
    $(".foolerThreeoption>span").eq(e.target.index).css({ "display": "none" })
})
Object.keys($(".foolerSevenItemTopImg")).forEach(function (index, item) {
    if (index * 1|| index * 1 == 0) {
        $(".foolerSevenItemTopImg")[index].index = index * 1
    }
})
$(".foolerSevenItemTopImg").mouseenter(function (e) {
    $(".foolerSevenItemTopImg>i").eq(e.currentTarget.index).css({ "display": "block" })
})
$(".foolerSevenItemTopImg").mouseleave(function (e) {
    $(".foolerSevenItemTopImg>i").eq(e.currentTarget.index).css({ "display": "none" })
})
var time=null
$(window).scroll(function () {

    if (document.documentElement.scrollTop <= $(".moveImgTxt")[0].offsetTop) {
        $("#navTop").css({ "display": "flex" })
        console.log()
    } else {
        $("#navTop").css({ "display": "none" })
    }
    if(document.documentElement.scrollTop<=0){
        clearInterval(time)
        time=null
    }

})
// huiding
$("#BackTopitemTOP").click(function(e){
    console.log(e.target,document.documentElement.scrollTop)
    time=setInterval(function(){
        document.documentElement.scrollTop-=10
    },1)
})
Object.keys($(".foolerFiveTextImg")).forEach(function (index, item) {
    if (index * 1|| index * 1 == 0) {
        $(".foolerFiveTextImg")[index].index = index * 1
    }
})
$(".foolerFiveTextImg").mouseenter(function (e) {
    $(".foolerFiveTextImg>i").eq(e.currentTarget.index).css({ "display": "block" })
})
$(".foolerFiveTextImg").mouseleave(function (e) {
    $(".foolerFiveTextImg>i").eq(e.currentTarget.index).css({ "display": "none" })
})
Object.keys($(".foolerTwoTextImgTop")).forEach(function (index, item) {
    if (index * 1|| index * 1 == 0) {
        $(".foolerTwoTextImgTop")[index].index = index * 1
    }
})
$(".foolerTwoTextImgTop").mouseenter(function (e) {
    $(".foolerTwoTextImgTop>i").eq(e.currentTarget.index).css({ "display": "block" })
})
$(".foolerTwoTextImgTop").mouseleave(function (e) {
    $(".foolerTwoTextImgTop>i").eq(e.currentTarget.index).css({ "display": "none" })
})