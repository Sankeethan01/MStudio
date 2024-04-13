var overLay=document.querySelector(".overlay")
var signIn=document.querySelector(".signIn")
var cancelButton=document.getElementById("cancelBtn")
var signInBtn=document.getElementById("signInBtn")


var sidesignInBtn=document.getElementById("sidesignInBtn")



signInBtn.addEventListener("click",function(){
    overLay.style.display="block"
    signIn.style.display="block"
    
})




sidesignInBtn.addEventListener("click",function(){
    overLay.style.display="block"
    signIn.style.display="block"
    
})

cancelButton.addEventListener("click",function(){
    
    signIn.style.display="none"
    overLay.style.display="none"
})



