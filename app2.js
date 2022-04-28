
var captura = document.querySelector("div")
captura.style.width = "200px";
captura.style.height = "200px";
captura.style.background = "red";

captura.classList.add("square");

var squareNew = document.querySelector(".square");
squareNew.style.width = "200px";
squareNew.style.height = "200px";
squareNew.style.background = "blue";

var squareTres = document.querySelector("div");

squareTres.classList.remove("square");

const element = document.getElementById("demo");

setInterval(
    function() {

        
        squareTres.classList.toggle("square");
        

    }, 1000
);

setInterval()