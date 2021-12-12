let right = 0, left = 0; 
let leftDiv = document.getElementById("left");
let rightDiv = document.getElementById("right");
let isDiv = document.getElementById("vs");


let resetGame = function() {
    right = 0; 
    left = 0;
    refresh();
}


let refresh = function() {
    leftDiv.style.width = (50 + left - right).toString() + "%";
    rightDiv.style.width = (50 - left + right).toString() + "%";
    isDiv.style.left = (50 + left - right).toString() + "%"
    leftDiv.firstChild.innerHTML = left;
    rightDiv.firstChild.innerHTML = right;
    if(leftDiv.style.width == "90%") {
        alert("White team is winner");
    } 
    if(rightDiv.style.width == "90%") {
        alert("Red team is winner");
    } 
}

refresh();

let left_click = function() {
    left += 1;
    refresh();
}

let right_click = function() {
    right += 1;
    refresh();
}

leftDiv.addEventListener("click", function(event) {
    left_click();
    event.preventDefault();
})

rightDiv.addEventListener("click", function(event) {
    right_click();
    event.preventDefault();
})

isDiv.addEventListener("click", function(event) {
    resetGame();
    event.preventDefault();
})

window.addEventListener("keypress", function (event) {
    if (event.defaultPrevented) {
      return;
    }
  
    switch (event.key) {
      case "L": 
      case "l": 
        left_click();
        break;
      case "R": 
      case "r":
        right_click();
        break;
      default:
        return; 
    }
    event.preventDefault();
  }, true);