let tiempoRestante;
let intervalo;

function iniciarTemporizador() {
    const minutosInput = document.getElementById("minutos");
    const minutos = parseInt(minutosInput.value);

    tiempoRestante = minutos * 60;

    intervalo = setInterval(() => {
        actualizarTemporizador();
    }, 1000);
}

function pausarTemporizador() {
    clearInterval(intervalo);
}

function resetearTemporizador() {
    pausarTemporizador();
    actualizarTemporizador("00:00");
    document.getElementById("minutos").value = "";
}

function actualizarTemporizador(tiempoPersonalizado) {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    const formatoMinuto = formatoDosDigitos(minutos);
    const formatoSegundo = formatoDosDigitos(segundos);

    const tiempoFormateado = `${formatoMinuto}:${formatoSegundo}`;

    const temporizadorElemento = document.getElementById("temporizador");
    temporizadorElemento.textContent = tiempoPersonalizado || tiempoFormateado;

    if (tiempoRestante <= 0) {
        pausarTemporizador();
        alert("¡Tiempo agotado!");
    }

    tiempoRestante--;
}

function formatoDosDigitos(valor) {
    return valor < 10 ? `0${valor}` : valor;
}
