$("span").mouseenter(function (e) {
    e.target.style = "color:rgb(220, 67, 68);"
    Object.keys(e.target.children).forEach(function (index) {
        if (e.target.children[index].href) {
            e.target.children[index].style = "color:rgb(220, 67, 68);"
        }
    })
})
$("span").mouseleave(function (e) {

    e.target.style = "color:rgb(0,0,0);"
    Object.keys(e.target.children).forEach(function (index) {
        if (e.target.children[index].href) {
            e.target.children[index].style = "color:rgb(0,0,0);"
        }

    })
})