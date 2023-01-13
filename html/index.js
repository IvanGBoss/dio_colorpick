var gameLen = 5; 
var gameStarted = false;
var cbMode = false;
var clickNum = 0;
var canClick = false;
var gameStep = 0;
var code = "";

$(document).ready(function(){
     $("#game").hide()
})

function generateCode(length) {
  let code = "";
  const colors = ["G", "B", "Y", "R"];
  for (let i = 0; i < length; i++) {
    code += colors[Math.floor(Math.random() * colors.length)];
  }
  return code;
}

function startGame() {
  code = generateCode(gameLen);
  document.getElementById('start-btn').removeAttribute('onclick');
  document.getElementById('start-btn').style.backgroundColor = "grey";
  nextGameStep();
}

function nextGameStep() {
  gameStep++;
  canClick = false;
  clickNum = 0;
  for (let i = 0; (i < gameStep) && i < gameLen ; i++) {
    setTimeout(function() {
      lightUp(code[i].toLowerCase());
    }, 1000 * i);
  }
  setTimeout(function() {
    canClick = true;
  }, 1000 * gameStep);
}


function playerClick(color) {
  if (canClick) {
    lightUp(color);
    if (code[clickNum] !== color.toUpperCase()) {
      canClick = false;
      endGame(false);
      document.getElementById("start-btn").innerHTML = "Failed!";
      document.getElementById("start-btn").style.backgroundColor = "red";
      return;
    } else if (clickNum === gameLen - 1) {
      endGame(true);
      document.getElementById("start-btn").innerHTML = "Success!";
      document.getElementById("start-btn").style.backgroundColor = "green";
    } else if (clickNum === gameStep - 1) {
      canClick = false;
      clickNum = 0;
      setTimeout(function() {
        nextGameStep();
      }, 1000);
    }
    clickNum++;
  }
}

function toggleCB() {
  cbMode = !cbMode;
  if (cbMode) {
    $("p").show();
  } else {
    $("p").hide();
  }
}

function endGame(result) {
  $.post('https://dio_colorpick/dio_colorpick:result', JSON.stringify({
      success: result
  }))
  gameStarted = false;
  setTimeout(function() {
      window.location.reload();
  }, 2000);
  
}

function lightUp(color) {
  if (color === "g") {
    let green = document.getElementById("green");
    green.style.backgroundColor = "green";
    green.style.color = "black";
    setTimeout(function() {
      green.style.backgroundColor = "rgb(0, 73, 0)";
      green.style.color = "white";
    }, 500)
  } else if (color === "b") {
    let blue = document.getElementById("blue");
    blue.style.backgroundColor = "blue";
    blue.style.color = "black";
    setTimeout(function() {
      blue.style.backgroundColor = "rgb(0, 0, 107)";
      blue.style.color = "white";
    }, 500)
  } else if (color === "y") {
    let yellow = document.getElementById("yellow");
    yellow.style.backgroundColor = "yellow";
    yellow.style.color = "black";
    setTimeout(function() {
      yellow.style.backgroundColor = "rgb(99, 99, 0)";
      yellow.style.color = "white";
    }, 500)
  } else if (color === "r") {
    let red = document.getElementById("red");
    red.style.backgroundColor = "red";
    red.style.color = "black";
    setTimeout(function() {
      red.style.backgroundColor = "rgb(80, 0, 0)";
      red.style.color = "white";
    }, 500)
  }
}

function endGameStrict() {
  $.post('https://dio_colorpick/dio_colorpick:result', JSON.stringify({
      success: false
  }))
  gameStarted = false;
  window.location.reload();
}

window.addEventListener('message', (event) => {
    const data = event.data
    if (data.type === 'Start') {
        $("#game").show()
        gameLen = data.gameLen
        gameStarted = true;
    }
});

document.addEventListener("keydown", function(ev) {
  let key_pressed = ev.key;
  let valid_keys = ['Escape'];

  if (gameStarted && valid_keys.includes(key_pressed)) {
      switch (key_pressed) {
          case 'Escape':
              endGameStrict();
              break;
      }
  }
});