// Image incrise && reduce

function increaseSize() {
  document.getElementById("myImg").style.width = "40%";
}

function reduceSize() {
  document.getElementById("myImg").style.width = "60%";
}

// Word color changer

function backGroundRed() {
  document.getElementById("t1").style.color = "red";
}
function backGroundBlue() {
  document.getElementById("t2").style.color = "blue";
}
function backGroundGreen() {
  document.getElementById("t3").style.color = "green";
}

// Content hide || show

function content(action) {
  const p = document.getElementById("p");

  if (action === "show") {
    p.style.display = "block";
  } else if (action === "hide") {
    p.style.display = "none";
  }
}
