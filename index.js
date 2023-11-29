var btn=document.getElementById("menubtn")
var menu=document.getElementById("navmenu")
var close=document.getElementById("close")
btn.addEventListener("click",function(){
    menu.style.right=0;
})
close.addEventListener("click",function(){
    menu.style.right="-50%"
})
var search=document.getElementById("searchbox")
var products=document.getElementById("products")
var productlist=products.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var searchtext=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i++){
        if(productlist[i].querySelector("h1").textContent.toUpperCase().includes(searchtext)){
            productlist[i].style.display="block"
        }else{
            productlist[i].style.display="none"
        }
    }
})
