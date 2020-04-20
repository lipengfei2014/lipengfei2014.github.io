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


