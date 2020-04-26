$(function () {

    $(".dorpDown,.msg,.dorpTel").hover(function () {
        $(this).addClass("on").children(".dorpDownLayer").slideDown(200);
    }, function () {
        $(this).removeClass("on").children(".dorpDownLayer").slideUp(0);
    });
    $.ajax({
        type: 'GET',
        url: 'http://u.qihuiwang.com/member/getUserInfo',
        crossDomain: true,
        dataType: 'jsonp',
        xhrFields: {
            withCredentials: true
        },
        success: function (json) {
            if (json.Success == 1) {
                $('.noLogin').hide();
                $('.login').find('.userName').text(json.UserName);
                $('.login').show();


                hasNewMessage();
                setInterval(function () {
                    hasNewMessage();
                }, 180000);
            }
        }
    });

    $("#searchKey").keyup(function (event) {
        event = event || window.event;
        if (event.keyCode == 13) {
            if ($("#searchKey").val() == "")
                return false;
            var type = "product";
            if ($(".seachName").text() == "产品")
                type = "product";
            else if ($(".seachName").text() == "企业")
                type = "company";
            else if ($(".seachName").text() == "采购")
                type = "buy";
            window.location.href = "http://s.qihuiwang.com/?w=" + escape($.trim($("#searchKey").val())) + "&mc=" + type;
        }
        else {
            $.ajax({
                type: 'GET',
                url: 'http://s.qihuiwang.com/Search/GetTipList',
                data: { keyword: function () { return $("#searchKey").val() }, typeName: $(".seachName").text() },
                timeout: 500,
                crossDomain: true,
                dataType: 'jsonp',
                xhrFields: {
                    withCredentials: true
                },
                success: function (json) {
                    var type = "";
                    if ($(".seachName").text() == "产品")
                        type = "product";
                    else if ($(".seachName").text() == "企业")
                        type = "company";
                    else
                        type = "purchase";
                    if (json.Success == 1) {
                        $(".filterDropDwon").empty();
                        $.each(json.list, function (index, item) {
                            $(".filterDropDwon").append("<a href='http://s.qihuiwang.com/?w=" + escape(item.keyword.replace('<em>', '').replace('</em>', '')) + "&mc=" + type + "'><li><div class='searchItem'>" + item.keyword + "</div><div class='searchCount'>被搜索" + item.count + "次</div></li>");
                        });
                        $(".filterDropDwon").show();
                    }
                }
            });
        }
        return false;
    });
    $(".textBtn").click(function () {
        if ($("#searchKey").val() == "")
            return false;
        var type = "product";
        if ($(".seachName").text() == "产品")
            type = "product";
        else if ($(".seachName").text() == "企业")
            type = "company";
        else if ($(".seachName").text() == "采购")
            type = "buy";
        window.location.href = "http://s.qihuiwang.com/?w=" + escape($.trim($("#searchKey").val())) + "&mc=" + type;
    });
    $(".searchShop").click(function () {
        if ($(".textInput").val() != "") {
            window.location.href = "http://s.qihuiwang.com/?mc=product&userId=" + $("#userId").val() + "&w=" + escape($(".textInput").val());
        }
    });
});

Object.keys($("#diyheadBottomTextoneleft li")).forEach((index, item) => {
    if (index * 1 || index * 1 == 0) {
        $("#diyheadBottomTextoneleft li")[index].liindex = index * 1
    }
})
$("#diyheadBottomTextoneleft li").mouseenter(function (e) {
    $("#diyheadBottomTextoneright").css({ "width": "780px" }).html("<h1>" + e.target.liindex + "</h1>")
})
$("#diyheadBottomTextone").mouseleave(function () {
    $("#diyheadBottomTextoneright").css({ "width": "0px" }).html("")
})
Object.keys($("#diyheadBottomTextthreemain >div:nth-child(1) a")).forEach((index, item) => {
    if (index * 1 || index * 1 == 0) {
        $("#diyheadBottomTextthreemain >div:nth-child(1) a")[index].aindex = index * 1
    }
})
$("#diyheadBottomTextthreemain >div:nth-child(1) a").mouseenter(function (e) {
    $(".showUl").eq(0).removeClass("showUl")
    $("#diyheadBottomTextthreemain >div:nth-child(1) a").css({ "color": "black", "borderBottom": " solid 1px black" })
    $("#diyheadBottomTextthreemain >div:nth-child(1) a").eq(e.target.aindex).css({ "color": "rgb(243, 50, 70)", "borderBottom": " solid 1px rgb(243, 50, 70)" })
    $("#diyheadBottomTextthreemain >div:nth-child(2) ul").eq(e.target.aindex).addClass("showUl")
    console.log(e.target, $("#diyheadBottomTextthreemain >div:nth-child(2) ul")[e.target.aindex], $(".showUl"))
})
$(".floornumberTextThree>div").mouseenter(function (e) {
    e.currentTarget.children[1].children[1].style = " border:solid 1px orange;color:orange"
})
$(".floornumberTextThree>div").mouseleave(function (e) {
    e.currentTarget.children[1].children[1].style = " border:none;color:black"
})
// 回顶和楼层优化
var time = null
function floorFun() {
    time = setInterval(function () {
        document.documentElement.scrollTop-=10
        console.log(document.documentElement.scrollTop)
    }, 1)
}
function floormax(maxnumber) {
    if (document.documentElement.scrollTop == maxnumber * 1) {
        clearInterval(time)
        time = null
    }
}
function fun1(index) {
    $(".none").eq(index).removeClass("none")
    $(".floorbutton i").eq(index).addClass("none")
}
function fun2(index) {
    $(".floorbutton div").eq(index).addClass("none")
    $(".floorbutton i").eq(index).removeClass("none")
}
$("#windowtop").click(function () {
    floorFun()
})
Object.keys($(".floornumber")).forEach((index, item) => {
    if (index * 1 || index * 1 == 0) {
        $(".floornumber")[index].index = index * 1
    }
})
Object.keys($(".floorbutton")).forEach((index, item) => {
    if (index * 1 || index * 1 == 0) {
        $(".floorbutton i")[index].index = index * 1
        $(".floorbutton div")[index].index = index * 1
    }
})
$(".floorbutton").mouseenter(function (e) {
    var index = e.target.index
    fun1(index)
})
$(".floorbutton").mouseleave(function (e) {
    var index = e.target.parentElement.index
    fun2(index)
})
$(window).scroll(function () {
    if (document.documentElement.scrollTop * 1 >= 176) {
        $("#topinput").css({ "display": "none" })
        $("#navinput").css({ "display": "flex" })
        $("main").css({ "top": "50px" })
        $("footer").css({ "top": "50px" })
        $("#diyhead").css({ "top": "50px" })
        $("#floortop").css({"display":"flex"})
    } else {
        $("#topinput").css({ "display": "block" })
        $("#navinput").css({ "display": "none" })
        $("#diyhead").css({ "top": "0" })
        $("main").css({ "top": "0px" })
        $("footer").css({ "top": "0px" })
        $("#floortop").css({"display":"none"})
    }
    floormax(0)
    if (document.documentElement.scrollTop <= $("main")[0].offsetTop+240) {
        fun2(0)
        fun2(1)
        fun2(2)
        fun2(3)
        fun2(4)
        fun2(5)
        fun2(6)
        fun2(7)
    } else if (document.documentElement.scrollTop <= $(".floornumber")[0].offsetTop + $("main")[0].offsetTop+240) {
        fun1(0)
        fun2(1)
        fun2(2)
        fun2(3)
        fun2(4)
        fun2(5)
        fun2(6)
        fun2(7)
    } else if (document.documentElement.scrollTop <= $(".floornumber")[1].offsetTop + $("main")[0].offsetTop+240) {
        fun2(0)
        fun1(1)
        fun2(2)
        fun2(3)
        fun2(4)
        fun2(5)
        fun2(6)
        fun2(7)
    } else if (document.documentElement.scrollTop <= $(".floornumber")[2].offsetTop + $("main")[0].offsetTop+240) {
        fun2(0)
        fun2(1)
        fun1(2)
        fun2(3)
        fun2(4)
        fun2(5)
        fun2(6)
        fun2(7)
    } else if (document.documentElement.scrollTop <= $(".floornumber")[3].offsetTop + $("main")[0].offsetTop+240) {
        fun2(0)
        fun2(1)
        fun2(2)
        fun1(3)
        fun2(4)
        fun2(5)
        fun2(6)
        fun2(7)
    } else if (document.documentElement.scrollTop <= $(".floornumber")[4].offsetTop + $("main")[0].offsetTop+240) {
        fun2(0)
        fun2(1)
        fun2(2)
        fun2(3)
        fun1(4)
        fun2(5)
        fun2(6)
        fun2(7)
    } else if (document.documentElement.scrollTop <= $(".floornumber")[5].offsetTop + $("main")[0].offsetTop+240) {
        fun2(0)
        fun2(1)
        fun2(2)
        fun2(3)
        fun2(4)
        fun1(5)
        fun2(6)
        fun2(7)
    } else if (document.documentElement.scrollTop <= $(".floornumber")[6].offsetTop + $("main")[0].offsetTop+240) {
        fun2(0)
        fun2(1)
        fun2(2)
        fun2(3)
        fun2(4)
        fun2(5)
        fun1(6)
        fun2(7)
    } else if (document.documentElement.scrollTop <= $(".floornumber")[7].offsetTop + $("main")[0].offsetTop+240) {
        fun2(0)
        fun2(1)
        fun2(2)
        fun2(3)
        fun2(4)
        fun2(5)
        fun2(6)
        fun1(7)
    } else {
        fun2(0)
        fun2(1)
        fun2(2)
        fun2(3)
        fun2(4)
        fun2(5)
        fun2(6)
        fun1(7)
    }
})
$(".floorbutton").click(function(e){
    document.documentElement.scrollTop=$(".floornumber")[e.target.parentElement.index].offsetTop+ $("main")[0].offsetTop-48
})


