function actualizarReloj() {
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
    const hora = ahora.toLocaleTimeString('en-US', opcionesHora);

    document.getElementById('reloj').innerHTML = `${fecha}<br>${hora}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();