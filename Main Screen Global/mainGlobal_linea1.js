/**
 * @layout LCD_20x4_Main_global
 * @version 2
 * @component Linea_1
 * @description Muestra posición, vuelta y tiempo delta
 * @build 1
 * @update 2026-07-01
 */

let pos = $prop('Position');
let posStr = 'P' + pos.toString().padEnd(3, ' ');

let vuelta = $prop('CurrentLap');
let vueltaStr = 'L' + vuelta.toString().padEnd(3, ' ');

let tiempoDelta = $prop("PersistantTrackerPlugin.SessionBestLiveDeltaSeconds");
let deltaStr = '';

if (tiempoDelta == 0) {
    deltaStr = '-.--';
} else if (tiempoDelta > 0) {
    deltaStr = '+' + format(tiempoDelta, '0.00');
} else {
    deltaStr = format(tiempoDelta, '0.00');
}

deltaStr = alinearDerecha(deltaStr, 6);

let linea1 = posStr + vueltaStr + ' Delta' + deltaStr;
linea1 = dimensionarLinea(linea1);

return linea1;