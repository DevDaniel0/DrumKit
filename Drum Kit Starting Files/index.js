let numberOfDrumButton = document.querySelectorAll(".drum").length;
//how many classes has the name Drum
for (let i = 0; i<numberOfDrumButton; i++){
  //add the event to each number in the array, which is drum1 drum2 etc. until the last class
  //querySelectorAll is creating an array containing all the classes selected.

  // Add the audio file to each class in the loop, add DETECT CLICK event!
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  }
// Detect click function
  function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);
  }
//Detect Keyboard Press
document.addEventListener("keydown", typeKey);


// Detect click function
  function typeKey(touche){
    makeSound(touche.key);
    animation(touche.key);
  }

// Makes sounds based on the variable entered through keys or clicks..
function makeSound(key){

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log(this.innerHTML);
  }
}

function animation(currentKey){

  var activatedButton = document.querySelector("."+currentKey);
  activatedButton.classList.add("pressed"); //add a class to a element that already has class
  setTimeout(function(){
    activatedButton.classList.remove("pressed");
  },100); //after a certain time, activate the function : (function, milliseconds)
}
