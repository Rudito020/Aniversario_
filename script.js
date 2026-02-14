// =============================
// CONTADOR EN TIEMPO REAL
// =============================
const fechaInicio = new Date("2025-02-14T12:00:00");

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// =============================
// LLUVIA DE CORAZONES
// =============================
function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    heart.style.fontSize = (15 + Math.random() * 15) + "px";

    document.querySelector(".rain-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(crearCorazon, 90);

// =============================
// COPA FRONDOSA DEL ÁRBOL
// =============================
function crearCorazonesCopa() {
    const copa = document.querySelector(".copa");
    const cantidad = 2200; // más corazones para que la copa se vea llena
    const colores = ["#ffdde1", "#ff4d6d", "#b71c1c", "#ff80ab", "#c2185b"];

    for (let i = 0; i < cantidad; i++) {
        const corazon = document.createElement("div");
        corazon.classList.add("arbol-corazon");
        corazon.innerHTML = "❤";

        let t = Math.random() * Math.PI * 2;
        let r = Math.random();
        let x = 16 * Math.pow(Math.sin(t), 3) * r * 15;
        let y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t)) * r * 15;

        corazon.style.left = `calc(50% + ${x}px)`;
        corazon.style.bottom = `${220 + y}px`;
        corazon.style.fontSize = `${10 + Math.random() * 20}px`;
        corazon.style.color = colores[Math.floor(Math.random() * colores.length)];

        const moverX = (Math.random() * 20 - 10) + "px";
        const moverY = (Math.random() * 10 - 5) + "px";
        corazon.style.setProperty('--dx', moverX);
        corazon.style.setProperty('--dy', moverY);

        copa.appendChild(corazon);
    }
}

crearCorazonesCopa();