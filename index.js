let contactButton = document.querySelector(".contactBtn");
let shareButton = document.querySelector(".shareBtn");
let shareDiv = document.querySelector(".share");

function visibility(){
    if(shareDiv.style.visibility == 'hidden'){
            shareDiv.style.visibility = 'visible'
        }else{
            shareDiv.style.visibility = 'hidden'
    }
}

shareButton.addEventListener("click", visibility);
contactButton.addEventListener("click", visibility);
