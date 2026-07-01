function dimensionarLinea(texto) {
    if (texto.length < 20) {
        return texto.padEnd(20, ' ');
    } else return texto.substring(0, 20);
}

function alinearIzquierda(texto, longitud) {
    if (texto.length < longitud) {
        return texto.padEnd(longitud, ' ');
    } else return texto.substring(0, longitud);
}

function alinearDerecha(texto, Longitud) {
    if (texto.length < Longitud) {
        return texto.padStart(Longitud, ' ');
    } else return texto.substring(0, Longitud);
}