/**
 * @layout LCD_20x4_Posiciones
 * @version 2
 * @component Linea_3
 * @description Muestra los datos del piloto delante.
 * @build 15
 * @update 2024-04-04
 */

//Datos de la sesión
let simulador = $prop("DataCorePlugin.CurrentGame");
let sesion = $prop('SessionTypeName');
let numPilotos = $prop("OpponentsCount");
let pos = $prop('Position');

if (simulador == 'Automobilista2') {
    numPilotos = numPilotos - 1;
}

let posStr = ' ';
let apellido = ' ';
let gapFormat = ' ';
let bestFormat = ' ';
let linea;

if (pos > 2 && pos <= numPilotos) {
    calcularDatos(pos - 1, '-', pos);
    linea = construirLinea(posStr, apellido, bestFormat, gapFormat);
} else if (pos == 1) {
    calcularDatos(2, '+', 2);
    linea = construirLinea(posStr, apellido, bestFormat, gapFormat);
} else linea = ' '.repeat(20);

return linea;

function calcularDatos(posicion, signoGap, tuPosicion) {
    posStr = posicion.toString().padEnd(3, ' ');

    let name = $prop('GarySwallowDataPlugin.Leaderboard.Position' + posicion.toString().padStart(2, '0') + '.DriverName.LastNameLong');
    let nameRecortado = name.substring(0, 8);
    apellido = nameRecortado.charAt(0).toUpperCase() + nameRecortado.slice(1).toLowerCase();
    apellido = apellido.padEnd(8, ' ');

    let bestTime = $prop('GarySwallowDataPlugin.Leaderboard.Position' + posicion.toString().padStart(2, '0') + '.BestLap') * 1000;
    if (bestTime > 0) {
        convertirTiempo(bestTime);
    } else  bestFormat = '-:--.---';

    let gap = $prop('GarySwallowDataPlugin.Leaderboard.Position' + tuPosicion.toString().padStart(2, '0') + '.IntervalGap');
    if (gap > 0) {
        gapFormat = signoGap + format(gap, '0.000');
        gapFormat = gapFormat.padEnd(7, ' ');
    } else gapFormat = ' '.repeat(7);
}

function construirLinea(posStr, apellido, bestFormat, gapFormat) {
    if (sesion.includes('Practice') || sesion.includes('Qualifying') || sesion.includes('QUALIFY')  || sesion.includes('PRACTICE')) {
        return posStr + apellido + ' ' + bestFormat;
    } else {
        return posStr + apellido + '  ' + gapFormat;
    }
}

function convertirTiempo(minutos) {
    let mins = Math.floor(minutos / 60000);
    let seg = Math.floor((minutos % 60000) / 1000);
    let msecs = Math.floor(minutos % 1000);

    let mm = mins.toString();
    let ss = seg.toString().padStart(2, '0');
    let fff = msecs.toString().padStart(3, '0');

    bestFormat = mm + ':' + ss + '.' + fff;
    bestFormat = bestFormat.substring(0, 8);
}