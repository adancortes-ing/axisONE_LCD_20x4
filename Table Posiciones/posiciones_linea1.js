/**
 * @layout LCD_20x4_Posiciones
 * @version 2
 * @component Linea_1
 * @description Muestra los encabezados de la tabla de posiciones.
 * @build 2
 * @update 2024-04-04
 */

let sesion = $prop("SessionTypeName");
let resultado = 'P. DRIVER';

if (sesion.includes('Practice') || sesion.includes('Qualifiying') || sesion.includes('QUALIFY') || sesion.includes('PRACTICE')) {
    resultado = 'P. DRIVER   BEST LAP';
} else {
    resultado = 'P. DRIVER    Gap to ';
}
return resultado;