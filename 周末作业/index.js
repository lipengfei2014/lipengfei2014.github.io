
var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');

request("http://www.qihuiwang.com/", function (err, res, body) {

    var $ = cheerio.load(body);
    var listData = [];


    // 一级分类
    $(".nav-sub .mNav").each(function () {
        var type_one = $(this).text();
        var dataTwo = [];
        // 二级分类
        $(this).siblings(".subNav").find("dl").each(function () {
            var type_two = $(this).find("dt").text()
            // 三层
            var dataThree = []
            $(this).children("dd").find("a").each(function () {
                dataThree.push({
                    "text": $(this).text(),
                    "herf": $(this).attr("href")
                });
            })
            dataTwo.push({
                "type_two": type_two,
                "list": dataThree
            })
        })
        listData.push({
            "type_one": type_one,
            "list": dataTwo
        })
    })

    fs.writeFile("dataList2.json", JSON.stringify(listData), function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("success")
        }
    })
})
// 总结 数组要在引入数据时创建