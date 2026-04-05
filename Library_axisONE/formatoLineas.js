function dimensionarLinea(texto){
    if (texto.length < 20) {
        return texto.padEnd(20, ' ');
    } else return texto.substring(0, 20);
}