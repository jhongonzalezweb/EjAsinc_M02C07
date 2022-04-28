var titulo = document.querySelector('h1');

titulo.textContent = "Hola, este es mi titulo pero ahora cambiado..."

var createP = document.createElement("p");
createP.textContent = "Parrafo nuevo";
document.body.appendChild(createP);

document.getElementById("firstH1").innerHTML = "Cambiando por este otro parrafo en duro";

var createP2 = document.createElement("p");
createP2.textContent = "Segundo Parrafo nuevo";
document.body.appendChild(createP2);