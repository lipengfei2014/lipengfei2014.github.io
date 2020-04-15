
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
Object.keys($(" #topLeft .foldUp")).forEach(index=>{
    if(index<index.length){
        $(" #topLeft .foldUp")[0].index=index*1
        $(" #topLeft .foldUp")[0].onmouseenter=function(e){
            
        }
        console.log($(" #topLeft .foldUp")[0])
    }
})
Object.keys($(" #topRight .foldUp")).forEach(index=>{

    if(index<$(" #topRight .foldUp").length){
        $(" #topRight .foldUp").eq(index)[0].index=index*1
        console.log($(" #topRight .foldUp").eq(index)[0])
    }
})

