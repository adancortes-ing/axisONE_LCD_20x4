/**
 * @layout LCD_20x4_Posiciones
 * @version 2.0.0-beta
 * @component Linea_1
 * @build 20260404.01
 * @description Muestra los encabezados de la tabla de posiciones.
 */

let sesion = $prop("SessionTypeName");
let resultado = 'P. DRIVER';

if (sesion.includes('Practice') || sesion.includes('Qualifiying') || sesion.includes('QUALIFY')) {
    resultado = 'P. DRIVER   BEST LAP';
} else {
    resultado = 'P. DRIVER    Gap to ';
}
return resultado;