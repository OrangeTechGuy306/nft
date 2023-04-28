

const getId = document.getElementById("addColor")
const navBarColor = "#001328";
const nav = document.getElementsByClassName("navLinks")
const hamburger = document.getElementById("hamClick")
const showNav = document.getElementById("showNav")

hamburger.addEventListener("click", ()=>{
   if(showNav.style.display="none"){
     showNav.style.display="block"
   } else if(showNav.style.display="block"){
        showNav.style.display="none"
   }
})


window.addEventListener("scroll", ()=>{
 
    const pageScroll = window.pageYOffset
    getId.style.background=navBarColor
    getId.style.color = "white"

    if(pageScroll > 0){
        for(i=0; i<=nav.length; i++){
            nav[i].style.color="white"
        }
       
    } else{
        getId.style.background="white"
        getId.style.color = "black"
        for(i=0; i<=nav.length; i++){
            nav[i].style.color="black"
        }
    }
})