/**
 * @layout LCD_20x4_Main_global
 * @version 2
 * @component Linea_3
 * @description Muestra las RPM y los datos del piloto detras
 * @build 1
 * @update 2026-07-01
 */

//Obtener revoluciones por minuto
let rpm = $prop('Rpms');
let rpmFormat = format(rpm, '0') + ' RPM';
rpmFormat = rpmFormat.padEnd(10, ' ');

//Datos de la sesion
let sesion = $prop('SessionTypeName');
let numPilotos = $prop("OpponentsCount");
let pos = $prop('Position');

//Obtener el apellido del piloto detrás
if (pos < numPilotos) {
    let posDetras = pos + 1;
    posDetras = posDetras.toString().padStart(2, '0');
    let nombre = $prop('GarySwallowDataPlugin.Leaderboard.Position' + posDetras + '.DriverName.LastNameLong');
    nombre = nombre !== null && nombre !== undefined ? nombre : '   ';
    nombre = nombre.toUpperCase();
    nombre = nombre.substring(0, 3);
    apellidoDetras = nombre.padEnd(3, ' ');
} else {
    apellidoDetras = '◫◫◫';
}

//Calcular la diferencia de tiempo con el piloto detras
let deltaDetras = '';

if (pos < numPilotos) {

    //CASO A: Carrera (Diferencial en tiempo real)
    if (sesion.includes('Race') || sesion.includes('RACE')) {
        let posDetras = pos + 1;
        posDetras = posDetras.toString().padStart(2, '0');
        let gap = $prop('GarySwallowDataPlugin.Leaderboard.Position' + posDetras + '.IntervalGap');
        deltaDetras = (gap > 0 && gap !== null) ? '+' + format(gap, '0.000') : ' ';
        deltaDetras = alinearDerecha(deltaDetras, 7);
    }

    //CASO B: Práctica o clasificación (Diferencia con el mejor tiempo)
    else if (sesion.includes('Practice') || sesion.includes('Qualifying') || sesion.includes('QUALIFY')  || sesion.includes('PRACTICE')) {
        let myBest = $prop('GarySwallowDataPlugin.Leaderboard.Position' + pos.toString().padStart(2, '0') + '.BestLap');
        let posDetras = pos + 1;
        posDetras = posDetras.toString().padStart(2, '0');
        let bestPilotoDetras = $prop('GarySwallowDataPlugin.Leaderboard.Position' + posDetras + '.BestLap');

        if (myBest > 0 && bestPilotoDetras > 0) {
            let gap = bestPilotoDetras - myBest;
            deltaDetras = (gap > 0) ? '+' + format(gap, '0.000') : ' ';
            deltaDetras = alinearDerecha(deltaDetras, 7);
        }
    }
} else {
    deltaDetras = '◫◫◫◫';
    deltaDetras = alinearDerecha(deltaDetras, 7);
}


let linea3 = rpmFormat + apellidoDetras + deltaDetras;
linea3 = dimensionarLinea(linea3);

return linea3;