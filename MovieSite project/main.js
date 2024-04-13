var sidenav=document.querySelector(".side-navbar")

function showBar(){
    sidenav.style.left="0"
 
}
function hideBar(){
    sidenav.style.left="-50%"
}

let items=document.querySelectorAll(".slider .list .item")
let next=document.getElementById("next")
let prev=document.getElementById("prev")
let numberButton=document.querySelectorAll(".number-button .num")

let countItem=items.length
let itemActive=0

next.onclick= function (){
    itemActive=itemActive+1
    if(itemActive>=countItem){
        itemActive=0
    }
    showSlider()
}

prev.onclick=function(){
    itemActive=itemActive-1
    if(itemActive<0){
        itemActive=countItem-1
    }
    showSlider()
}

let autoRunSlider=setInterval(()=>{
    next.click()
},5000)

function showSlider(){
    let itemActiveOld=document.querySelector(".slider .list .item.active")
    let numActiveOld=document.querySelector(".number-button .num.active")
    itemActiveOld.classList.remove("active")
    numActiveOld.classList.remove("active")


    items[itemActive].classList.add("active")
    numberButton[itemActive].classList.add("active")

    clearInterval(autoRunSlider)
    autoRunSlider=setInterval(()=>{
        next.click()
    },5000)
}


