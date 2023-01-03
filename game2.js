//add onclick event to start the game and disable the button (to avoid trouble with the animation timer)
document.getElementById("music").onclick = () => {
  startRun();
  document.getElementById("music").disabled = true;
  document.getElementById("light").style.backgroundColor = "#ABFF00";
  document.getElementById("light").style.boxShadow =
    "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px";
};

var c = document.getElementById("myCanvas"); //get Canvas element
var ctx = c.getContext("2d"); // start canvas context

//initialize background
var back = new Image();
back.src = "images/back/newRoad.png";
back.onload = function () {
  ctx.drawImage(back, 0, 0);
  ctx.drawImage(car, 20, 20, 95, 77, 0, 365, 95, 77);
};

//initialize car
var car = new Image();
car.src = "images/sprites/redcar.png";
car.onload = function () {
  ctx.drawImage(car, 20, 20, 95, 77, 0, 365, 95, 77); //down pos 365 (up pos = 335)
};

//initialize explosion
var boom = new Image();
boom.src = "images/back/boom.png";

//initialize obstacle sprites
var obs1 = new Image();
obs1.src = "images/sprites/vehicles_sprites.png";

//initialize geleia prize
var gel = new Image();
gel.src = "images/back/geleia.png";

//initialize Maria Amelia prize
var ma = new Image();
ma.src = "images/back/mariMe.png";

//begins game
function startRun() {
  var id = null;
  clearInterval(id);
  id = setInterval(drawBack, 10);
}

var backPos = 0; //initial back position
var carY = 365;
var carX = 0;
var count = 0;
var count2 = 0;
var cX = 20;
var cY = 20;
var score = 0;
var loose = false;

//listens to keyboard
function checkKey(e) {
  e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      carX = carX - 24;
      break;
    case "ArrowRight":
      carX = carX + 24;
      break;
    case "ArrowUp":
      carY = 335;
      break;
    case "ArrowDown":
      carY = 365;
      break;
  }
}

//goes to next page
function next() {
  window.location.replace("third.html");
}

var obs1x = 834;
var obs2x = 934;
var obs3x = 984;
var gelx = 2184;
var flag = false;
var marx = 2984;
var exit = false;

document.getElementById("upArr").onclick = () => {
  carY = 335;
};

document.getElementById("leftArr").onclick = () => {
  carX = carX - 24;
};

document.getElementById("rightArr").onclick = () => {
  carX = carX + 24;
};

document.getElementById("downArr").onclick = () => {
  carY = 365;
};

function drawBack() {
  //endgame
  if (score >= 100 || loose == true) {
    if (score >= 100) {
      if (flag == false) {
        flag = true;
        alert("Voce chegou!!!");
      }
      ctx.drawImage(back, backPos, 0);
      ctx.drawImage(back, 834 + backPos, 0);
      if (count <= 4) {
        ctx.drawImage(car, cX, cY, 95, 77, carX, carY, 95, 77);
      } else {
        ctx.drawImage(car, cX, cY, 95, 77, carX, carY, 95, 77);
      }
      carX = carX + 3;
      if (carX >= 900) {
        next();
      }
    }
    return;
  }

  //road
  ctx.drawImage(back, backPos, 0);
  ctx.drawImage(back, 834 + backPos, 0);
  backPos = backPos - 6;

  if (backPos == -834) {
    backPos = 0;
  }

  //score
  ctx.font = "30px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("Score: " + Math.floor(score), 650, 40);
  score = score + 0.01;

  //prize 1 Maria amelia
  ctx.drawImage(ma, marx, 343, 30, 40);
  marx = marx - 3;
  if (marx <= -2100) {
    marx = 2184;
  }

  //obstacle 1 green car
  ctx.drawImage(obs1, 185, 15, 90, 65, obs1x, 335, 90, 65);
  obs1x = obs1x - 1;
  if (obs1x == -400) {
    obs1x = 834;
  }

  //obstacle 2 pink truck
  ctx.drawImage(obs1, 460, 100, 100, 65, obs2x, 335, 90, 65);
  obs2x = obs2x - 1;
  if (obs2x == -300) {
    obs2x = 1134;
  }

  //listeners
  document.removeEventListener("keydown", checkKey);
  document.addEventListener("keydown", checkKey);

  //prize 2 geleia
  ctx.drawImage(gel, gelx, 383, 30, 40);
  gelx = gelx - 3;
  if (gelx <= -1900) {
    gelx = 1984;
  }

  //car
  if (count <= 4) {
    ctx.drawImage(car, cX, cY, 95, 77, carX, carY, 95, 77);
    cX = cX + 108;
    count++;
    count2++;
    if (count == 5) {
      cY = 104;
      cX = 20;
    }
  } else {
    ctx.drawImage(car, cX, cY, 95, 77, carX, carY, 95, 77);
    cX = cX + 108;
    count++;
    count2++;
    if (count2 == 8) {
      cY = 20;
      cX = 20;
      count = 0;
      count2 = 0;
    }
  }
  checkMa(); // check if hit prize Maria Amelia

  checkGel(); // check if hit prize Geleia

  //obstacle 3 bus
  ctx.drawImage(obs1, 15, 200, 150, 80, obs3x, 350, 160, 80);
  obs3x = obs3x - 2;
  if (obs3x == -500) {
    obs3x = 1084;
  }

  //show prize Geleia animation
  if (show == true) {
    ctx.drawImage(gel, carX - 10, 160, 150, 200);
    ctx.fillText("Score + 10!", carX - 20, 150);
    showCount++;
    if (showCount == 120) {
      show = false;
      showCount = 0;
    }
  }

  //show prize Maria Amelia animation
  if (showM == true) {
    ctx.drawImage(ma, carX - 10, 125, 150, 200); //ajeitar posicao
    ctx.fillText("Score + 10!", carX - 20, 115);
    showCountM++;
    if (showCountM == 120) {
      showM = false;
      showCountM = 0;
    }
  }

  checkCollision();
}

//ceck if any obstacle hit
function checkCollision() {
  if (
    (carX + 65 > obs1x && carX + 95 < obs1x + 90 && carY == 335) ||
    (carX < obs1x + 65 && carX + 75 > obs1x && carY == 335)
  ) {
    ctx.drawImage(boom, carX - 50, 305, 250, 100);
    ctx.drawImage(obs1, 15, 200, 150, 80, obs3x, 350, 160, 80);
    loose = true;
    alert("Oh no!");
  }

  if (
    (carX + 65 > obs2x && carX + 95 < obs2x + 90 && carY == 335) ||
    (carX < obs2x + 65 && carX + 70 > obs2x && carY == 335)
  ) {
    ctx.drawImage(boom, carX - 50, 305, 250, 100);
    ctx.drawImage(obs1, 15, 200, 150, 80, obs3x, 350, 160, 80);
    loose = true;
    alert("Oh no!");
  }

  if (
    (carX + 65 > obs3x && carX + 95 < obs3x + 90 && carY == 365) ||
    (carX < obs3x + 120 && carX + 70 > obs3x && carY == 365)
  ) {
    ctx.drawImage(boom, carX - 50, 335, 250, 100);
    loose = true;
    alert("Oh no!");
  }
}

show = false;
showM = false;
showCount = 0;
showCountM = 0;

//check if hit prize
function checkGel() {
  if (carX + 65 > gelx && carX < gelx + 40 && carY == 365) {
    show = true;
    score = score + 10;
    ctx.drawImage(gel, carX, 330, 60, 80);
    gelx = -40;
  }
}

//check if hit Maria Amelia
function checkMa() {
  if (carX + 65 > marx && carX < marx + 40 && carY == 335) {
    showM = true;
    score = score + 10;
    ctx.drawImage(ma, carX, 330, 60, 80);
    marx = -40;
  }
}
