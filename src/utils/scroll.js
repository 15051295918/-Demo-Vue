
var scroll = function(dom) {
   var beforeScrollTop = document.body.scrollTop;
    window.addEventListener("scroll", function(){

        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if (delta > 0){
            dom.style.cssText = "display:none";
        }else{
            dom.style.cssText = "display:inline";
           
        }
        beforeScrollTop = afterScrollTop;
    }, false)
}
export default{
    scroll:scroll
}