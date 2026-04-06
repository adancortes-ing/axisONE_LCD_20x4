/**
 * @layout LCD_20x4_Main_F1
 * @version 2
 * @component Linea_4
 * @description Muestra el porcentaje y la barra de ERS
 * @build 1
 * @update 2026-04-05
 */

//Calcular el porcentaje de ERS y formatearlo
let ersPorcentaje = $prop("ERSPercent");
let ersFormateado = '';

ersFormateado = format(ersPorcentaje, '0') + '%';
ersFormateado = alinearIzquierda(ersFormateado, 4);

//Dibujar la barra de ERS
let simboloLlenado = '⇿';
let simboloVacio = '_';
let longitudBarra = 16;
let capMax = 100;

let numSimbolosLlenos = Math.round((ersPorcentaje / capMax) * longitudBarra);
let numSimbolosVacios = longitudBarra - numSimbolosLlenos;

let barraERS = simboloLlenado.repeat(numSimbolosLlenos) + simboloVacio.repeat(numSimbolosVacios);

// Combinar el porcentaje y la barra
linea4 = ersFormateado + barraERS;
linea4 = dimensionarLinea(linea4);
return linea4;