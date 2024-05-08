var timer = 60;
var score = 0;
var hitrn = 0;
var help = document.getElementById("help");
var display = 0;

function scoreadd(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function newhit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitnum").textContent = hitrn;
}

function numgen(){
  var repeat = "";

for (var i = 0; i<=125; i++ ){
  var num = Math.floor(Math.random()*10)
  repeat += `<div class="bubble">${num}</div>`;
}

document.querySelector("#box-bottom").innerHTML = repeat;
}

function runtime(){
  var  timeint = setInterval(function () {
    if (timer>0){
      timer--;
    document.querySelector("#countdown").textContent = timer;
    }else{
      clearInterval(timeint);
      document.querySelector("#box-bottom").innerHTML = `<h1>Game Over! </br>Your Score: <span>${score}</span></h1>`;
    }
  },1000);

}

document.querySelector("#box-bottom").addEventListener("click", function(dets){
  var numclicked = Number(dets.target.textContent);
  if(numclicked === hitrn){
    scoreadd();
    numgen();
    newhit();
  }

});

function toggelHelp(){
  if(display == 1){
    help.style.display = "block";
    display = 0; 
  }else{
    help.style.display = "none";
    display = 1;
  }
}



newhit();
runtime();
numgen();