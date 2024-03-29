var len = document.querySelectorAll(".drum").length;
for (i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    touch(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
  document
    .querySelectorAll(".drum")
    [i].addEventListener("keypress", function (event) {
      touch(event.key);
      buttonAnimation(event.key);
    });
}

function touch(input) {
  switch (input) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
  }
}

function buttonAnimation(key) {
  var buttonclicked = document.querySelector("." + key);
  buttonclicked.classList.add("pressed");
  setTimeout(function () {
    buttonclicked.classList.remove("pressed");
  }, 100);
}
