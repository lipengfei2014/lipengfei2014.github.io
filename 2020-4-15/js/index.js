var navdata = {
    "topLeft": [{
        text: "手机站",
        aherf: "",
        textData: [{
            imgrul: "img/xiaochengxu.jpg",
            text: "手机站"
        }, {
            imgrul: "img/oneCode.jpg",
            text: "小程序"
        }]
    }, {
        text: "登陆",
        aherf: "http://u.qihuiwang.com/member/login.html",
        textData: []
    }, {
        text: "免费注册",
        aherf: "http://u.qihuiwang.com/member/register.html",
        textData: []
    }],
    "topRight": [{
        title: "企业首页",
        titleData: []
    }, {
        title: "收藏夹",
        titleData: [
            "收藏的产品", "收藏的商铺"
        ]
    }, {
        title: "我是采购商",
        titleData: [
            "采购商中心", "发布采购单", "管理采购"
        ]
    }, {
        title: "我是供应商",
        titleData: ["供应商中心","发布产品","产品管理","店铺管理"]
    },{
        title: "企汇管家",
        titleData: []
    },{
        title: "企汇服务",
        titleData: ["标王","黄金展位","热门推荐广告位","图片空间","信息包","企汇金铺","金铺装修","更多服务"]
    },{
        title: "客服中心",
        titleData: ["常见问题","在线客服"]
    },{
        title:"网站导航",
        titleData: ["首页","资讯","展会","企汇管家","企汇云信","天梯建站","企业库","产品库","郑州站","平顶山站","手机站","搜索","企汇软文通","百度爱采购","小程序","企业直通车","采购服务","采购中心","发布采购单","行业市场","建材频道","机械频道","农林频道 "]
    }]
}
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
console.log(navdata)

