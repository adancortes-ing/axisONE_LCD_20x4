/**
 * @layout LCD_20x4_Main_F1
 * @version 2
 * @component Linea_3
 * @description Muestra el modo del ERS y los datos del piloto detrás
 * @build 1
 * @update 2026-04-05
 */

//Datos de la sesion
let sesion = $prop('SessionTypeName');
let numPilotos = $prop("OpponentsCount");
let pos = $prop('Position');

//Obtener el modo del ERS
let mode = $prop('GameRawData.PlayerCarStatusData.m_ersDeployMode');

const ersModes = {
    0: 'ERS load', // Recovery / RL
    1: 'ERS Norm', // Standard / ST
    2: 'ERS Fast', // Fast Lap / FL
    3: 'ERS Over', // Overtake / OT
};

let modoERS = ersModes[mode] || '';
modoERS = alinearIzquierda(modoERS, 10);

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
    if (sesion.includes('Race')) {
        let posDetras = pos + 1;
        posDetras = posDetras.toString().padStart(2, '0');
        let gap = $prop('GarySwallowDataPlugin.Leaderboard.Position' + posDetras + '.IntervalGap');
        deltaDetras = (gap > 0 && gap !== null) ? '+' + format(gap, '0.000') : ' ';
        deltaDetras = alinearDerecha(deltaDetras, 7);
    }

    //CASO B: Práctica o clasificación (Diferencia con el mejor tiempo)
    else if (sesion.includes('Practice') || sesion.includes('Qualifying')) {
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

let linea3 = modoERS + apellidoDetras + deltaDetras;
linea3 = dimensionarLinea(linea3);
return linea3;