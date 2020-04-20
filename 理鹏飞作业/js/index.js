$(function () {
    //头部下拉菜单
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

                //检测是否有新消息
                hasNewMessage();
                setInterval(function () {
                    hasNewMessage();
                }, 180000);
            }
        }
    });
    //搜索框模糊过滤
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
function quit() {
    $.ajax({
        type: 'GET',
        url: 'http://u.qihuiwang.com/member/signout',
        crossDomain: true,
        dataType: 'jsonp',
        xhrFields: {
            withCredentials: true
        },
        success: function (json) {
            if (json.Success == 1) {
                var url = window.location.href;
                if (url.indexOf('#') > -1)
                    url = url.substr(0, url.indexOf('#'));
                window.location = url;
            }
        }
    });
}
function hasNewMessage() {
    var support = 'localStorage' in window && window['localStorage'] !== null;
    if (support) {
        if (localStorage["message_timestamp"] == undefined || new Date().getTime() >= localStorage["message_timestamp"]) {
            localStorage["message_timestamp"] = new Date().getTime() + 180000;
            localStorage["message_new"] = 1;
        } else {
            if (localStorage["message_new"] == 1) $('#top_new_msg').show();
            return false;
        }
    }
    $.ajax({
        type: 'GET',
        url: 'http://u.qihuiwang.com/member/hasNewMessage',
        crossDomain: true,
        dataType: 'jsonp',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            if (data == "1") {
                if (support) localStorage["message_new"] = 1;
                $('#top_new_msg').show();
            } else {
                if (support) localStorage["message_new"] = 0;
            }
        }
    });
}
function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + month + strDate;
    return currentdate;
}

$(function () {
    $.each($('.floorNav a'), function () {
        if ($(this).attr('href') == '') {
            $(this).remove();
        }
    })
    //浮动搜索
    $(".barSubmit").click(function () {
        if ($(".barText").val() != "") {
            window.location.href = "http://s.qihuiwang.com/?mc=product&w=" + escape($(".barText").val());
        }
    });
    //判断登录
    $.ajax({
        type: "GET",
        url: 'http://www.qihuiwang.com/home/GetUserAndProAndPurcount',
        data: {},
        async: false,
        error: function (request) {

        },
        success: function (data) {
            if (data.userId == 0) {
                $("#noLogin").show();
                $("#Logined").hide();
            }
            else {
                $("#noLogin").hide();
                $("#Logined").show();
                if (data.IdentityType == 1) {
                    $("#Identylink").attr("href", "http://u.qihuiwang.com/provider/");
                    $("#IdentyImg").attr("src", data.CompanyLogoUrl);
                }
                else {
                    $("#Identylink").attr("href", "http://u.qihuiwang.com/buy/");
                    $("#IdentyImg").attr("src", data.PhotoUrl);
                }
                $("#divuserName").html("Hi，" + data.userName);
            }
            $("#productCount").text(data.productCount);
            $("#purchaseCount").text(data.purchaseCount);
            var tempdate = getNowFormatDate();
            $("#productCount").attr("href", "http://product.qihuiwang.com/newlist/d" + tempdate);
            $("#purchaseCount").attr("href", "http://buy.qihuiwang.com/newlist/d" + tempdate);


        }
    });
});
$(function () {
    if ($(".qqChat").length > 0) {
        $.cachedScript("http://static.qihuiwang.com/js/bizqq.js").done(function () {
            var q_Num = $(".qqChat").length;
            for (var i = 0; i < q_Num; i++) {
                $(".qqChat").eq(i).attr("id", "qqChat" + i);
                BizQQWPA.addCustom({ aty: '1', a: '1001', nameAccount: 4006677369, selector: "qqChat" + i });
            }
        });
    }
});
