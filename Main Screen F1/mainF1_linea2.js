/**
 * @layout LCD_20x4_Main_F1
 * @version 2
 * @component Linea_2
 * @description Muestra el FuelDelta y los datos del piloto delante
 * @build 1
 * @update 2026-04-05
 */

//Datos de la sesión
let sesion = $prop('SessionTypeName');
let numPilotos = $prop("OpponentsCount");
let pos = $prop('Position');

//Datos del combustible delta
let fuelDelta = $prop("GameRawData.PlayerCarStatusData.m_fuelRemainingLaps");
let fuelDeltaStr = '';

if (fuelDelta == 0) {
    fuelDeltaStr = 'F -.--';
} else if (fuelDelta > 0) {
    fuelDeltaStr = 'F+' + format(fuelDelta, '0.00');
} else {
    fuelDeltaStr = 'F' + format(fuelDelta, '0.00');
}

fuelDeltaStr = alinearIzquierda(fuelDeltaStr, 10);

//Obtener el apellido del piloto delante
let apellido = '';

if (pos > 1 && pos <= numPilotos) {
    let posDelante = pos - 1;
    posDelante = posDelante.toString().padStart(2, '0');
    let nombre = $prop('GarySwallowDataPlugin.Leaderboard.Position' + posDelante + '.DriverName.LastNameLong');
    nombre = nombre !== null && nombre !== undefined ? nombre : '   ';
    nombre = nombre.toUpperCase();
    nombre = nombre.substring(0, 3);
    apellido = nombre.padEnd(3, ' ');
} else apellido = '◫◫◫';

//Calcular el tiempo de diferencia con el piloto delante
let deltaDelante = '';
if (pos > 1 && pos <= numPilotos) {

    //CASO A: Carrera (Gap en tiempo real)
    if (sesion.includes('Race')) {
        let gap = $prop('GarySwallowDataPlugin.Leaderboard.Position' + pos.toString().padStart(2, '0') + '.IntervalGap');
        deltaDelante = (gap > 0 && gap !== null) ? '-' + format(gap, '0.000') : ' ';
        deltaDelante = alinearDerecha(deltaDelante, 7);
    }

    //CASO B: Práctica o clasificación (Diferencia con el mejor tiempo)
    else if (sesion.includes('Practice') || sesion.includes('Qualifying')) {
        let myBest = $prop('GarySwallowDataPlugin.Leaderboard.Position' + pos.toString().padStart(2, '0') + '.BestLap');
        let bestDelante = pos - 1;
        bestDelante = bestDelante.toString().padStart(2, '0');
        let bestPilotoDelante = $prop('GarySwallowDataPlugin.Leaderboard.Position' + bestDelante + '.BestLap');
        if (myBest > 0 && bestPilotoDelante > 0) {
            let gap = myBest - bestPilotoDelante;
            deltaDelante = (gap > 0) ? '-' + format(gap, '0.000') : ' ';
            deltaDelante = alinearDerecha(deltaDelante, 7);
        }
    }
} else {
    deltaDelante = '◫◫◫◫';
    deltaDelante = alinearDerecha(deltaDelante, 7);
}

let linea2 = fuelDeltaStr + apellido + deltaDelante;
linea2 = dimensionarLinea(linea2); 

return linea2;