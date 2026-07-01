/**
 * @layout LCD_20x4_Posiciones
 * @version 2
 * @component Linea_2
 * @description Muestra los datos del líder.
 * @build 2
 * @update 2024-04-04
 */

//Datos del Piloto
let lider = $prop('GarySwallowDataPlugin.Leaderboard.Position01.DriverName.LastNameLong');
let recortado = lider.substring(0, 8);
let nombre = recortado.charAt(0).toUpperCase() + recortado.slice(1).toLowerCase();

//Datos del tiempo
let sesion = $prop("SessionTypeName");
let posicion = $prop("Position");
let tiempo = $prop("GarySwallowDataPlugin.Leaderboard.Position01.BestLap") * 1000;
let gapFormat;
let formatoTiempo = '-:--.---';
let tiempoDelante;

if (sesion.includes('Practice') || sesion.includes('Qualifiying') || sesion.includes('QUALIFY') || sesion.includes('PRACTICE')) {

    if (tiempo > 0) {
        let mins = Math.floor(tiempo / 60000);
        let seg = Math.floor((tiempo % 60000) / 1000);
        let msecs = Math.floor(tiempo % 1000);

        let mm = mins.toString();
        let ss = seg.toString().padStart(2, '0');
        let fff = msecs.toString().padStart(3, '0');

        formatoTiempo = mm + ':' + ss + '.' + fff;
    }
    formatoTiempo = formatoTiempo.substring(0, 8);
    tiempoDelante = '1  ' + nombre.padEnd(8, ' ') + ' ' + formatoTiempo;
} else {
    let gapLider = $prop('GarySwallowDataPlugin.Leaderboard.Position' + posicion.toString().padStart(2, '0') + '.GapToFirstDelayed');

    if (gapLider > 0) {
        gapFormat = '-' + format(gapLider, '0.000');
        gapFormat = gapFormat.padEnd(7, ' ');
        tiempoDelante = '1  ' + nombre.padEnd(8, ' ') + '  ' + gapFormat;
    } else {
        tiempoDelante = '1  ' + nombre.padEnd(8, ' ') + ' '.repeat(9);
    }
}

return tiempoDelante;