/**
 * @layout LCD_20x4_Main_global
 * @version 2
 * @component Linea_4
 * @description Muestra la barra y datos del combustible
 * @build 1
 * @update 2026-07-01
 */


//Dibujar la barra de combustible
let ersPercent = $prop('DataCorePlugin.Computed.Fuel_Percent');
let fullBar = "⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿";
let totalLength = 8;
let barLength = Math.floor(ersPercent / 100 * totalLength);

// Limitar el rango para evitar errores
if (barLength < 0) {
    barLength = 0;
} else if (barLength > totalLength) {
    barLength = totalLength;
}
let barra = 'E' + fullBar.substring(0, barLength).padEnd(totalLength, '_') + 'F';

//Obtener la cantidad de combustible en litros
let fuel = $prop('Fuel');
let fuelFormat;

if(fuel > 100){
    fuelFormat = format(fuel, '000') + 'L.'
} else fuelFormat = format(fuel, '0.0') + 'L';
fuelFormat = alinearIzquierda(fuelFormat, 6);

//Obtener las vueltas de combustible restantes
let consumo = $prop('DataCorePlugin.Computed.Fuel_LitersPerLap');
let restante;

if(consumo > 0 || consumo !== null) {
    restante = Math.round(fuel / consumo);
    restante = restante + 'v';
    restante = alinearDerecha(restante, 3);
} else {
    restante = '◫◫◫';
}


let linea4 = barra + ' ' + fuelFormat + restante;
linea4 = dimensionarLinea(linea4);

return linea4;