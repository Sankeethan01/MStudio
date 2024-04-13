var sidenav=document.querySelector(".side-navbar")

function showBar(){
    sidenav.style.left="0"
 
}
function hideBar(){
    sidenav.style.left="-50%"
}


let inputedText=document.getElementById("searchMovie")
let movies=document.getElementById("movie-container")

let movieElements=movies.querySelectorAll("div")

inputedText.addEventListener("keyup",function(){
    var inputValue=event.target.value.toUpperCase()

    for(var count=0;count<movieElements.length;count++)
    {
        let movieName=movieElements[count].querySelector("p").textContent

        if(movieName.toUpperCase().indexOf(inputValue)<0)
        {
            movieElements[count].style.display="none"
        }
        else{
            movieElements[count].style.display="block"
        }
    }
})

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




