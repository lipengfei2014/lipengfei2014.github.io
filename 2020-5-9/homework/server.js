
var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');

request("http://www.qihuiwang.com/", function (err, res, body) {

    var $ = cheerio.load(body);
    var listData = [];
  
 
    // 一级分类
    $(".mCate .mNav").each(function () {
        var type_one = $(this).text();
        var dataTwo = [];
        // 二级分类
        $(this).siblings(".subNav").find("dt").each(function () {
            var type_two = $(this).text()
            // 三层
            var dataThree = []
            $(this).siblings("dd").find("a").each(function(){
				dataThree.push({text:$(this).text(),herf:"1"});
			})
           dataTwo.push({
            "type_two":type_two,
            "list":dataThree
           })
        })
        listData.push({
            "type_one": type_one,
            "list": dataTwo
        })
    })
    console.log(dataTwo)
    fs.writeFile("data.json",JSON.stringify(listData),function(err){
        if(err){
            console.log(err)
        }else{
            console.log("success")
        }
    })
})
