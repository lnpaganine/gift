//add onclick event to start the game and disable the button (to avoid trouble with the animation timer)
document.getElementById("music").onclick = () => {
  showMusic();
  document.getElementById("music").disabled = true;
  document.getElementById("light").style.backgroundColor = "#ABFF00";
  document.getElementById("light").style.boxShadow =
    "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px";
};

var c = document.getElementById("myCanvas"); //get Canvas element
var ctx = c.getContext("2d"); // start canvas context

//initialize background
var back = new Image();
back.src = "images/back/final1.gif";
back.onload = function () {
  ctx.drawImage(back, 0, 0);
  ctx.drawImage(carS, 101, 17, 90, 77, 180, 325, 175, 150);
  ctx.drawImage(edil, 14, 458, 30, 50, 480, 320, 50, 70);
  ctx.drawImage(iara, 16, 331, 30, 50, 525, 320, 50, 70);
};

//initialize car
var carS = new Image();
carS.src = "images/sprites/vehicles_sprites.png";
carS.onload = function () {
  ctx.drawImage(carS, 101, 17, 90, 77, 180, 325, 175, 150);
  ctx.drawImage(edil, 14, 458, 30, 50, 480, 320, 50, 70);
  ctx.drawImage(iara, 16, 331, 30, 50, 525, 320, 50, 70);
};

//initialize second car
var car = new Image();
car.src = "images/sprites/redcar.png";

//initialize Edilza
var edil = new Image();
edil.src = "images/sprites/Edilza.png";
edil.onload = function () {
  ctx.drawImage(carS, 101, 17, 90, 77, 180, 325, 175, 150);
  ctx.drawImage(edil, 14, 458, 30, 50, 480, 320, 50, 70);
  ctx.drawImage(iara, 16, 331, 30, 50, 525, 320, 50, 70);
};

//initialize Iara
var iara = new Image();
iara.src = "images/sprites/Iara.png";
iara.onload = function () {
  ctx.drawImage(carS, 101, 17, 90, 77, 180, 325, 175, 150);
  ctx.drawImage(edil, 14, 458, 30, 50, 480, 320, 50, 70);
  ctx.drawImage(iara, 16, 331, 30, 50, 525, 320, 50, 70);
};

//initialize Dani
var dani = new Image();
dani.src = "images/sprites/Dani.png";

//initialize music tab
var mus = new Image();
mus.src = "images/back/music.png";

//initialize check icon
var chec = new Image();
chec.src = "images/back/checkF.png";

//initialize hold icon
var tri = new Image();
tri.src = "images/back/triangF.png";

//initialize wrong icon
var wro = new Image();
wro.src = "images/back/wrongF.png";

//initialize second back
var back2 = new Image();
back2.src = "images/back/finalP.png";

//initialize heart
var heat = new Image();
heat.src = "images/back/heart.png";

var tabX = 3; //animation checker
var win = false; //checking for endgame

//function to show music tab and start the notes
function showMusic() {
  var tst = null;
  clearInterval(tst);
  tst = setInterval(expandTab, 1);

  var id = null;
  clearInterval(id);
  id = setInterval(startNotes, 750);

  var fin = null;
  clearInterval(fin);
  fin = setInterval(cutScene, 100);
}

var notGo = false;
//function to expand music tab
function expandTab() {
  if (tabX == 876) {
    notGo = true;
    return;
  } else {
    ctx.drawImage(mus, -10, 30, tabX, 80);
    tabX = tabX + 3;
  }
}

//global variables to store some data to check later

var gloX1 = 0;
var gloX2 = 0;
var gloY1 = 0;
var gloY2 = 0;
var hit = 0;
var aim = 1;

//function to check the click
function check(e) {
  let rect = c.getBoundingClientRect();
  let f = e.clientX - rect.left;
  let g = e.clientY - rect.top;
  if (aim == 1) {
    if (
      hit == 1 &&
      f > gloX1 - 10 &&
      f < gloX2 + 10 &&
      g > gloY1 - 10 &&
      g < gloY2 + 10
    ) {
      ctx.drawImage(chec, gloX1, gloY1, 30, 30);
      aim++;
    } else {
      ctx.drawImage(wro, gloX1, gloY1, 30, 30);
    }
  } else if (aim == 2) {
    if (
      hit == 3 &&
      f > gloX1 - 10 &&
      f < gloX2 + 10 &&
      g > gloY1 - 10 &&
      g < gloY2 + 10
    ) {
      ctx.drawImage(chec, gloX1, gloY1, 30, 30);
      aim++;
    } else {
      ctx.drawImage(wro, gloX1, gloY1, 30, 30);
    }
  } else if (aim == 3) {
    if (
      hit == 4 &&
      f > gloX1 - 10 &&
      f < gloX2 + 10 &&
      g > gloY1 - 10 &&
      g < gloY2 + 10
    ) {
      ctx.drawImage(chec, gloX1, gloY1, 30, 30);
      aim++;
    } else {
      ctx.drawImage(wro, gloX1, gloY1, 30, 30);
    }
  } else if (aim == 4) {
    if (
      hit == 4 &&
      f > gloX1 - 10 &&
      f < gloX2 + 10 &&
      g > gloY1 - 10 &&
      g < gloY2 + 10
    ) {
      ctx.drawImage(chec, gloX1, gloY1, 30, 30);
      aim++;
      alert("You win <3");
      win = true;
    } else {
      ctx.drawImage(wro, gloX1, gloY1, 30, 30);
    }
  }
}

//renders the correct position
function pace() {
  if (aim == 1) {
    ctx.drawImage(tri, 345, 120, 20, 20);
  } else if (aim == 2) {
    ctx.drawImage(chec, 345, 120, 20, 20);
    ctx.drawImage(tri, 395, 120, 20, 20);
  } else if (aim == 3) {
    ctx.drawImage(chec, 345, 120, 20, 20);
    ctx.drawImage(chec, 395, 120, 20, 20);
    ctx.drawImage(tri, 429, 120, 20, 20);
  } else if (aim == 4) {
    ctx.drawImage(chec, 345, 120, 20, 20);
    ctx.drawImage(chec, 395, 120, 20, 20);
    ctx.drawImage(chec, 429, 120, 20, 20);
    ctx.drawImage(tri, 460, 120, 20, 20);
  } else if (aim == 5) {
    ctx.drawImage(chec, 345, 120, 20, 20);
    ctx.drawImage(chec, 395, 120, 20, 20);
    ctx.drawImage(chec, 429, 120, 20, 20);
    ctx.drawImage(chec, 460, 120, 20, 20);
  }
}

var rate = 10;
var frame = 10;
var posXD = 700;
var carX = 180;
var spX = 80;
var heart = true;
var hY = 300;
var cX = 20;
var cY = 20;
var count = 0;
var count2 = 0;

function cutScene() {
  if (win == true) {
    ctx.drawImage(back, 0, 0);
    ctx.drawImage(back2, 0, 0, 834, 469);

    if (rate < 30) {
      //leaving door
      ctx.drawImage(edil, 14, 458, 30, 50, 480, 320, 50, 70);
      ctx.drawImage(iara, 16, 331, 30, 50, 525, 320, 50, 70);
      ctx.drawImage(dani, 83, 590, rate, 50, posXD, 320, frame, 70); //both 10 to  grow untill 30/50
      ctx.drawImage(carS, 101, 17, 90, 77, 180, 325, 175, 150);
      rate = rate + 5;
      frame = frame + 10;
      posXD = posXD - 10;
    }
    if (posXD < 665 && posXD > 230) {
      //walking to car
      //ctx.drawImage(back, 0, 0);
      ctx.drawImage(back2, 0, 0, 834, 469);
      ctx.drawImage(edil, 14, 458, 30, 50, 480, 320, 50, 70);
      ctx.drawImage(iara, 16, 331, 30, 50, 525, 320, 50, 70);
      if (spX < 540) {
        ctx.drawImage(dani, spX, 590, 30, 50, posXD, 320, 50, 70);
        spX = spX + 64;
      } else {
        spX = 19;
        ctx.drawImage(dani, spX, 590, 30, 50, posXD, 320, 50, 70);
        spX = spX + 64;
      }
      ctx.drawImage(carS, 101, 17, 90, 77, 180, 325, 175, 150);
      posXD = posXD - 10;
    }
    if (posXD <= 230) {
      //show heart
      if (heart == true) {
        ctx.drawImage(heat, 240, hY, 30, 30);
        ctx.drawImage(edil, 14, 458, 30, 50, 480, 320, 50, 70);
        ctx.drawImage(iara, 16, 331, 30, 50, 525, 320, 50, 70);
        ctx.drawImage(carS, 101, 17, 90, 77, carX, 325, 175, 150);
        hY = hY - 5;
        if (hY == 250) {
          heart = false;
        }
      } else {
        //moving car
        ctx.drawImage(edil, 14, 458, 30, 50, 480, 320, 50, 70);
        ctx.drawImage(iara, 16, 331, 30, 50, 525, 320, 50, 70);

        if (count <= 4) {
          ctx.drawImage(car, cX, cY, 95, 77, carX, 325, 175, 150);
          cX = cX + 108;
          carX = carX + 20;
          count++;
          count2++;
          if (count == 5) {
            cY = 104;
            cX = 20;
          }
        } else {
          ctx.drawImage(car, cX, cY, 95, 77, carX, 325, 175, 150);
          cX = cX + 108;
          carX = carX + 20;
          count++;
          count2++;
          if (count2 == 8) {
            cY = 20;
            cX = 20;
            count = 0;
            count2 = 0;
          }
        }
      }
    }
    if (carX >= 850) {
      //going to next fase
      next();
    }
  } else {
    return;
  }
}

//function to go to next fase
function next() {
  window.location.replace("second.html");
}

//function to make notes appear randomly
function startNotes() {
  //rendering new backgroung
  if (win == true || notGo == false) {
    return;
  } else {
    ctx.drawImage(back, 0, 0);
    ctx.drawImage(edil, 14, 458, 30, 50, 480, 320, 50, 70);
    ctx.drawImage(iara, 16, 331, 30, 50, 525, 320, 50, 70);
    ctx.drawImage(carS, 101, 17, 90, 77, 180, 325, 175, 150);
    ctx.drawImage(mus, -10, 30, 873, 80);
    pace();
    var note = new Image(); //initialing note
    var a = Math.floor(Math.random() * 4 + 1); //genereting random number

    //rendering notes randomly
    if (a == 1) {
      note.src = "images/back/note1.png";
      note.onload = function () {
        ctx.drawImage(note, 100, 350, 30, 30);
        gloX1 = 100; //decrease to mobile
        gloX2 = 130; //increase to mobile
        gloY1 = 350; //decrease to mobile
        gloY2 = 380; //increase to mobile
        hit = 1;
        c.removeEventListener("click", check); //remove previous event
        c.addEventListener("click", check); //add new event to check the click
      };
    } else if (a == 2) {
      note.src = "images/back/note2.png";
      note.onload = function () {
        ctx.drawImage(note, 135, 325, 30, 30);
        gloX1 = 135;
        gloX2 = 165;
        gloY1 = 325;
        gloY2 = 355;
        hit = 2;
        c.removeEventListener("click", check); //remove previous event
        c.addEventListener("click", check); //add new event to check the click
      };
    } else if (a == 3) {
      note.src = "images/back/note3.png";
      note.onload = function () {
        ctx.drawImage(note, 170, 300, 30, 30);
        gloX1 = 170; //decrease to mobile
        gloX2 = 200; //increase to mobile
        gloY1 = 300; //decrease to mobile
        gloY2 = 330; //increase to mobile
        hit = 3;
        c.removeEventListener("click", check); //remove previous event
        c.addEventListener("click", check); //add new event to check the click
      };
    } else if (a == 4) {
      note.src = "images/back/note4.png";
      note.onload = function () {
        ctx.drawImage(note, 125, 285, 30, 30);
        gloX1 = 125; //decrease to mobile
        gloX2 = 155; //increase to mobile
        gloY1 = 285; //decrease to mobile
        gloY2 = 315; //increase to mobile
        hit = 4;
        c.removeEventListener("click", check); //remove previous event
        c.addEventListener("click", check); //add new event to check the click
      };
    }
  }
}
