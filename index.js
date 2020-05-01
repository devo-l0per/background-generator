
var butLength = document.querySelectorAll("button").length;


for(var i = 0;i < butLength ; i++)
{





  document.querySelectorAll("button")[i].addEventListener("click",function(event){
    var letter =  this.innerHTML;


switch (letter) {
  case  "w": var audio = new Audio("sounds/crash.mp3");
             audio.play();
             console.log(event);
  break;
  case  "a": var audio = new Audio("sounds/kick-bass.mp3");
             audio.play();
  break;
  case  "s": var audio = new Audio("sounds/snare.mp3");
             audio.play();
  break;
  case  "d":var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
  break;
  case  "k": var audio = new Audio("sounds/tom-2.mp3");
             audio.play();
  break;
  case  "l": var audio = new Audio("sounds/tom-4.mp3");
             audio.play();
  break;

  default: alert("problem");

}
});
}
