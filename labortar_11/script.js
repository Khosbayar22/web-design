let display = document.getElementById("display");
let level = 1;
let count = document.getElementById("count");
let levelText = document.getElementById("level");
let startGame = document.getElementById("startGame");
let refreshGame = document.getElementById("resetGame");

let move = function() {
    let bubbles = document.getElementsByClassName("bubble");
    for(let i = 0; i < bubbles.length; i += 1) {
        let left = parseInt(bubbles[i].style.left);
        let top = parseInt(bubbles[i].style.top);
        if(left + bubbles[i].moveX > display.clientWidth - 50 || left + bubbles[i].moveX < 0) {
            bubbles[i].moveX *= -1;
        }
        if(top + bubbles[i].moveY > display.clientHeight - 50 || top + bubbles[i].moveY < 0) {
            bubbles[i].moveY *= -1;
        }
        bubbles[i].style.left = left + bubbles[i].moveX + "px";
        bubbles[i].style.top = top + bubbles[i].moveY + "px";
    }
}

let beginGame = function() {

    for(let i = 0; i < 9 + level; i += 1) {
        let bubble = document.createElement("div");
        let light = document.createElement("div");
        bubble.className = "bubble";
        bubble.appendChild(light);

        let clientWidth = (display.clientWidth == 0) ? 1 : display.clientWidth;
        let clientHeight = (display.clientHeight == 0) ? 1 : display.clientHeight;
        
        bubble.style.left = Math.round(Math.random() * (clientWidth - 50)) + "px";
        bubble.style.top = Math.round(Math.random() * (clientHeight - 50)) + "px";

        const widthAndHeight = Math.round(Math.random() * 50) + 50;
        bubble.style.height = widthAndHeight + "px";
        bubble.style.width = widthAndHeight + "px";
        bubble.style.borderRadius = widthAndHeight + "px";

        bubble.style.backgroundColor = "rgb(" +  Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + ","+ Math.round(Math.random() * 256)+")";
        bubble.moveX = Math.random() * 9 + 1; 
        bubble.moveY = Math.random() * 9 + 1; 

        bubble.addEventListener("click", function() {
            bubble.classList.add("active")
            display.removeChild(this);
            count.innerHTML = display.childNodes.length;
            if(display.childNodes.length == 0) {
                clearInterval("move()");
                if(confirm("Ta ene uyiig davlaa. Daraagiin uyiig ehluuleh uu ?")) {
                    level += 1;
                    beginGame();
                }
            }
        });

        display.appendChild(bubble);
    }
    count.innerHTML = display.childNodes.length;
    levelText.innerHTML = level
    setInterval("move()", 100);
}
startGame.addEventListener("click", function() {
    beginGame();
});
refreshGame.addEventListener("click", function() {
    window.location.reload();
});


