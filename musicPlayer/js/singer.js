$("nav>button").on("touchend", function () {
    window.history.back(-1)
})
$(".loading").on("touchend", function () {
    window.history.back(-1)
})
// 搜索进入
var obj = {};
var arr1 = location.search.split("?")
var arr2 = arr1[1].split("=");
obj[arr2[0]] = decodeURIComponent(arr2[1])
console.log(obj)
// 判断是key进入还是id进入
if (obj.key) {
    console.log(obj)
    $("#singer").css({ " display": "block;" })
    $("#singertwo").css({ "display": "none" })
    var page = 1
    console.log("key进入")
    var name = obj.key
    $("nav h5")[0].innerText = name
    console.log($("nav>h5")[0], name, obj.key)
    // 初始化
    // 动态创建标签函数
    function fun1(StarsListdata) {

        StarsListdata.forEach(i => {

            var div = document.createElement("div")
            div.classList.add("singer")
            var a = document.createElement('a')
            a.href = "songs.html?hasmv=" + i.hasmv + ";&rid=" + i.rid+";&name="+i.name+";&src="+i.pic120
            var div1 = document.createElement("div")
            div1.classList.add("singer-left")
            var img = document.createElement("img")
            if (i.pic120) {
                img.src = i.pic120
            } else {
                img.src = "./img/timg.jpg"
            }
            div1.appendChild(img)
            var div2 = document.createElement("div")
            div2.classList.add("singer-artist")
            var div3 = document.createElement("div")
            div3.classList.add('text-webkit-box')
            div3.innerText = i.name
            var div4 = document.createElement("div")
            div4.classList.add('text-webkit-box')
            div4.innerText = i.artist+"-"+i.songTimeMinutes
            var div5 = document.createElement("div")
            div5.classList.add("singer-right")
            var button1 = document.createElement("button")
            button1.innerHTML = "<i class='iconfont'>&#xe622;</i>"
            div5.appendChild(button1)
            var button2 = document.createElement("button")
            if (i.hasmv) {
                button2.innerHTML = "<i class='iconfont'>&#xe8a5;</i>"
            } else {
                button2.innerHTML = ""
            }
            div5.appendChild(button2)
            div2.appendChild(div3)
            div2.appendChild(div4)
            div1.appendChild(div2)
            a.appendChild(div1)
            a.appendChild(div5)
            div.appendChild(a)
            $("#singerlist").append(div)
        });
    }
    function fun(name, page) {
        page = page || 1
        axios({ url: "https://www.vebcoder.cn:9090/search/searchMusicBykeyWord?key=" + name + "&pn=" + page + "&rn=30", method: "GET" }).then((response) => {
            console.log(response.data)
            $('.loading').css("display", "none")
            StarsListdata = response.data.data.list
            if (StarsListdata) {
                fun1(StarsListdata)
            } else {
                $("#singer").html('')
                $("#singer").html("NOT FOUND 404")
            }

        }).catch((error) => {
            console.log(error)
            $('.loading').css("display", "none")
        })
    }
    fun(name)
    // 创建iscroll实例
    var search = new iScroll("singer", {
        snap: true,
        momentum: true,
        hScrollbar: false,
        vScrollba: true,
        onScrollMove: function () {
            console.log(this.y, this.maxScrollY)
        },
        // 触底更新
        onScrollEnd: function () {
            if (this.y == this.maxScrollY) {
                page++,
                    fun(name, page)
                console.log("触底")
            }
            this.refresh();
        }
    })
} else if (obj.id) {
    console.log("id进入")
    var idpage = 1
    $("#singer").css({ "display": "none" })
    $("#singertwo").css({ " display": "block;" })
    var id = obj.id
    // 创建歌单的函数
    function fun4(songerList) {

        songerList.forEach(i => {

            var div = document.createElement("div")
            div.classList.add("singer")
            var a = document.createElement('a')
            a.href = "songs.html?hasmv=" + i.hasmv + ";&rid=" + i.rid+";&name="+i.name+";&src="+i.pic120
            var div1 = document.createElement("div")
            div1.classList.add("singer-left")
            var img = document.createElement("img")
            if (i.pic120) {
                img.src = i.pic120
            } else {
                img.src = "./img/timg.jpg"
            }
            div1.appendChild(img)
            var div2 = document.createElement("div")
            div2.classList.add("singer-artist")
            var div3 = document.createElement("div")
            div3.classList.add('text-webkit-box')
            div3.innerText = i.name
            var div4 = document.createElement("div")
            div4.classList.add('text-webkit-box')
            div4.innerText = i.artist+"-"+i.songTimeMinutes
            var div5 = document.createElement("div")
            div5.classList.add("singer-right")
            var button1 = document.createElement("button")
            button1.innerHTML = "<i class='iconfont'>&#xe622;</i>"
            div5.appendChild(button1)
            var button2 = document.createElement("button")
            if (i.hasmv) {
                button2.innerHTML = "<i class='iconfont'>&#xe8a5;</i>"
            } else {
                button2.innerHTML = ""
            }
            div5.appendChild(button2)
            div2.appendChild(div3)
            div2.appendChild(div4)
            div1.appendChild(div2)
            a.appendChild(div1)
            a.appendChild(div5)
            div.appendChild(a)
            $("#singerIdsongerMove").append(div)
        });
    }
    function fun2(id) {
        axios({ url: "https://www.vebcoder.cn:9090/artist/artist?artistid=" + id, method: "GET" }).then((response) => {
            console.log(response.data, $("#starIntro")[0].innerHTML)
            $('.loading').css("display", "none")
            console.log($("#intro>img")[0])
            $("#intro>img")[0].src = response.data.data.pic120
            $("#starIntro >div")[0].innerHTML = response.data.data.info

        }).catch((error) => {
            console.log(error)
            $('.loading').css("display", "none")
        })
    }
    function fun3(id, idpage) {
        idpage = idpage || 1
        axios({ url: "https://www.vebcoder.cn:9090/artist/artistMusic?artistid=" + id + "&pn=" + idpage + "&rn=30", method: "GET" }).then((response) => {
            console.log(response.data.data.list)
            var songerList = response.data.data.list
            fun4(songerList)
            $('.loading').css("display", "none")

        }).catch((error) => {
            console.log(error)
            $('.loading').css("display", "none")
        })
    }
    fun2(id)
    fun3(id)
    // 创建iscroll
    var starIntro = new iScroll("starIntro", {
        snap: true,
        momentum: true,
        hScrollbar: false,
        vScrollba: true,
        onScrollEnd: function () {

            this.refresh();
        }
    })
    // 创建歌单iscroll
    var singerIdsonger = new iScroll("singerIdsonger", {
        snap: true,
        momentum: true,
        hScrollbar: false,
        vScrollba: false,
        topOffset: 50,
        y: -50,
        onScrollMove: function () {
            if (this.y > 0) {
                $('#tlite')[0].innerHTML = "松开立即刷新"
                this.minScrollY = 0;

                $('#tlite').css({ 'background-color': "red", "color": "rgb(255, 255,255)" })
            } else if (this.y > -20) {
                $('#tlite')[0].innerHTML = "下拉刷新"
                $('#tlite').css({ 'background-color': "red", "color": "rgb(0, 0,0)" })
                this.minScrollY = -50;
            }
        },
        // 触底更新
        onScrollEnd: function () {
            if (this.minScrollY == 0) {
                $('#tlite')[0].innerHTML = "正在刷新中..."
                idpage++
                fun3(id, page)
                $('#tlite')[0].innerHTML = "下拉刷新"
            }

            if (this.y == this.maxScrollY) {
                idpage++
                fun3(id, page)
                console.log("触底")
            }
            this.refresh();
        }
    })
}