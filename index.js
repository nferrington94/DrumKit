document.querySelectorAll(".drum").forEach(item => {item.addEventListener("click",handleClick)});

function handleClick(){
    console.log(this.innerHTML);
    this.style.color="white";
}



// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();