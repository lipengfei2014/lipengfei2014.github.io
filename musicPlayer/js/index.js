   // 对象设置
   var page = 1
   var page2 = 1
   var par = {
       category: 0,
       pn: 1,
       rn: 50
   }
   // 等待图
   $('.loading').css("display", "block")
   // 下拉和触底

   var music = new iScroll("music", {
       snap: true,
       momentum: true,
       hScrollbar: false,
       vScrollba: false,
       topOffset: 50,
       y: -50,
       onScrollMove: function () {
           if (this.y > 0) {
               $('#tipSpan')[0].innerHTML = "松开立即刷新"
               this.minScrollY = 0;

               $('#tip').css({ 'background-color': "red", "color": "rgb(255, 255,255)" })
           } else if (this.y > -20) {
               $('#tipSpan')[0].innerHTML = "下拉刷新"
               $('#tip').css({ 'background-color': "red", "color": "rgb(0, 0,0)" })
               this.minScrollY = -50;


           }
       },
       // 触底更新
       onScrollEnd: function () {
           if (this.minScrollY == 0) {
               page2++
               $('#tipSpan')[0].innerHTML = "正在刷新中..."
               document.getElementById("singerList").innerHTML = ""
               par.pn = page2
               console.log(par)
               fun(par)
               $('#tipSpan')[0].innerHTML = "下拉刷新"
           }
          
           if (this.y == this.maxScrollY) {
               page++,
                   par.pn = page
               fun(par)
               console.log("触底")
           }
           this.refresh();
       }
   })
   // 动态创建歌手列表
   function fun2(StarsListdata) {
       for (var i = 0; i < StarsListdata.length; i++) {
           var div = document.createElement("div")
           div.classList.add("singer")
           var a = document.createElement('a')
           a.href = "singer.html?id=" + StarsListdata[i].id
           var img = document.createElement("img")
           img.src = StarsListdata[i].pic120
           a.appendChild(img)
           var p = document.createElement("p")
           p.innerText = StarsListdata[i].name
           p.classList.add("text-webkit-box")
           a.appendChild(p)
           div.appendChild(a)
           document.getElementById("singerList").appendChild(div)
       }
       music.refresh()

   }
   function fun(par) {
       axios({ url: "https://www.vebcoder.cn:9090/artist/artistInfo", params: par, method: "GET" }).then((response) => {
           console.log(response.data)
           $('.loading').css("display", "none")
           StarsListdata = response.data.data.artistList
           console.log(StarsListdata)
           fun2(StarsListdata)

       }).catch((error) => {
           console.log(error)
           $('.loading').css("display", "none")
       })
   }
   // 初始化
   fun(par)
   // 分类选择
   var SelectFilter = document.getElementById("SelectFilter")
   SelectFilter.onchange = function (e) {
       console.log(e.target.value)
       document.getElementById("singerList").innerHTML = ""
       par.category = e.target.value
       console.log(par)
       fun(par)
   }
   console.log(location)
   console.log($('#singerSearchInputput'))
   // 跳转歌手页面
   $('button').on("touchend", function () {
       console.log($('#singerSearchInputput')[0].valsue)
       window.location.assign("singer.html?key="+$('#singerSearchInputput')[0].value) 
   })