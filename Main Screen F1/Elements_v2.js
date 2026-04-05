/**
 * @layout LCD_20x4_Main_F1
 * @version 2
 * @component Elements_List
 * @description Lista todos los elementos del Screen Editor y sus propiedades.
 * @build 1
 * @update 2026-04-02
 */

//#region ANUNCIO
⇿        F1        ⇿⇿     --------     ⇿⇿       MAIN       ⇿⇿      SCREEN      ⇿
// #endregion

//#region Calcular posicion (properties: Display length: 4)
if([Position] < 10, 'P' + format([Position], 0) + ' ', 'P' + format([Position], 0))
// #endregion

//#region Calcular vuelta actual (properties: Display length: 4)
if([CurrentLap] < 10, 'L' + format([CurrentLap], '0') + ' ', 'L' + format([CurrentLap], 0))
// #endregion

//' Delta'

//#region Calcular el tiempo delta (properties: Display length: 5 / Right align)
if([PersistantTrackerPlugin.SessionBestLiveDeltaSeconds]=0, '0.00',
if([PersistantTrackerPlugin.SessionBestLiveDeltaSeconds]>0, '+' + 
format([PersistantTrackerPlugin.SessionBestLiveDeltaSeconds], '0.00'),
format([PersistantTrackerPlugin.SessionBestLiveDeltaSeconds], '0.00')))
// #endregion

//#region Calcular el combustible (properties: Display length: 9)
'F ' + 
if([DataCorePlugin.GameRawData.PlayerCarStatusData.m_fuelRemainingLaps] > 0,
'+' + format([DataCorePlugin.GameRawData.PlayerCarStatusData.m_fuelRemainingLaps], '0.00'),
format([DataCorePlugin.GameRawData.PlayerCarStatusData.m_fuelRemainingLaps],'0.00'))
// #endregion

//#region Calcular apellido del piloto delante
let pos = $prop('Position');
let resultado = "   ";

if (pos > 1) {
    
    let aheadPosNum = pos - 1;
    
    let aheadPosStr = aheadPosNum.toString().padStart(2, '0');
    
    let propName = 'GarySwallowDataPlugin.Leaderboard.Position' + aheadPosStr + '.DriverName.LastNameLong';
    
    let name = $prop(propName);
    
    resultado = (name !== null && name !== undefined) ? name : "   ";
}

return resultado.substring(0, 3);
// #endregion

//#region Calcular el tiempo delta al piloto delante (properties: Display length: 6 / Right align)
// 1. Datos básicos
let pos = $prop('Position');
let session = $prop('SessionTypeName');
let resultado = "     "; // Espacios en blanco por defecto

// 2. Solo calculamos si NO somos el primer lugar (P1)
if (pos > 1) {

    // CASO A: CARRERA (Gap en tiempo real)
    if (session === 'Race') {
        // En carrera usamos el sensor de proximidad del PersistantTracker
        let gapReal = $prop('PersistantTrackerPlugin.DriverAhead_00_Gap');
        resultado = (gapReal !== null) ? format(gapReal, '0.000') : "0.000";
    }

    // CASO B: PRÁCTICA O CLASIFICACIÓN (Diferencia de Best Laps)
    else if (session.includes('Practice') || session.includes('Qualifying')) {
        
        // Formateamos los índices (ej: pos 2 busca a pos 1)
        let myPosStr = pos.toString().padStart(2, '0');
        let aheadPosStr = (pos - 1).toString().padStart(2, '0');

        // Obtenemos los tiempos de Gary Swallow
        let myBest = $prop('GarySwallowDataPlugin.Leaderboard.Position' + myPosStr + '.BestLap');
        let aheadBest = $prop('GarySwallowDataPlugin.Leaderboard.Position' + aheadPosStr + '.BestLap');

        // Validamos que ambos tengan tiempos registrados
        if (myBest > 0 && aheadBest > 0) {
            // Calculamos la diferencia: (Tu tiempo - Tiempo del de adelante)
            // Esto dará un número positivo indicando cuánto te falta para alcanzarlo
            let diff = myBest - aheadBest;
            resultado = format(diff, '-0.000');
        } else {
            resultado = "-.---";
        }
    }
} else {
	resultado = "-.---";
	}

return resultado;
// #endregion

//#region Calcular el modo del ERS (properties: Display length: 10)
// 1. Obtenemos el valor del modo ERS
let mode = $prop('GameRawData.PlayerCarStatusData.m_ersDeployMode');

// 2. Creamos un "mapa" de nombres
const ersModes = {
    0: 'ERS load', // Recovery / RL
    1: 'ERS Norm ', // Standard / ST
    2: 'ERS Fast ', // Fast Lap / FL
    3: 'ERS Over ', // Overtake / OT
};

// 3. Devolvemos el nombre correspondiente o vacío si el modo no existe
return ersModes[mode] || '';
// #endregion

//#region Calcular el nombre del piloto detras
let pos = $prop('Position');
let nxtPos = pos + 1;
let maxRivales = $prop('OpponentsCount'); 
let resultado = '   ';

if (pos >= 1 && pos < maxRivales) {
    let posFormatted = nxtPos.toString().padStart(2, '0');
    
    let propName = 'GarySwallowDataPlugin.Leaderboard.Position' + posFormatted + '.DriverName.LastNameLong';
    
    resultado = $prop(propName);
}

return resultado.substring(0, 3);
// #endregion

//region Calcular el tiempo delta al piloto detras (properties: Display length: 6 / Right align)
// 1. Configuración de posición y total
let pos = $prop('Position');
let totalPilotos = $prop('OpponentsCount');
let session = $prop('SessionTypeName');
let resultado = "   ";

// 2. Verificamos si hay alguien detrás (si no eres el último)
if (pos < totalPilotos) {
    
    // CASO A: CARRERA (Diferencial en tiempo real)
    if (session === 'Race') {
        let propBehind = (pos === 1) ? 
            'PersistantTrackerPlugin.DriverBehind_01_Gap' : 
            'PersistantTrackerPlugin.DriverBehind_00_Gap';
            
        let gapReal = $prop(propBehind);
        resultado = (gapReal !== null) ? format(gapReal, '+0.000') : "0.000";
    } 
    
    // CASO B: PRÁCTICAS O CLASIFICACIONES (Diferencia de Best Laps)
    // Usamos .includes() para capturar Practice 1, 2, 3 y Qualifying 1, 2, 3
    else if (session.includes('Practice') || session.includes('Qualifying')) {
        
        // Formateamos los índices de posición (01, 02, 03...)
        let myPosStr = pos.toString().padStart(2, '0');
        let nextPosStr = (pos + 1).toString().padStart(2, '0');
        
        // Obtenemos los BestLaps numéricos de Gary Swallow
        let myBest = $prop('GarySwallowDataPlugin.Leaderboard.Position' + myPosStr + '.BestLap');
        let behindBest = $prop('GarySwallowDataPlugin.Leaderboard.Position' + nextPosStr + '.BestLap');

        // Validamos que ambos tengan tiempos (mayores a 0)
        if (myBest > 0 && behindBest > 0) {
            let diff = behindBest - myBest;
            // Si el de atrás es más lento, el resultado será positivo (ej: +0.500)
            resultado = format(diff, '+0.000');
        } else {
            // Si alguno no ha marcado tiempo aún
            resultado = "-.---";
        }
    }
}

return resultado;
// #endregion

//#region Calcular el porcentaje del ERS (properties Display length: 4)
if([ERSPercent] < 100, format([ERSPercent], '0') + '%',
format([ERSPercent], '0'))
// #endregion

//#region Dibujar la barra de ERS
var ersPercent = $prop('ERSPercent');
var fullBar = "⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿⇿";
var barLength = Math.floor(ersPercent / 100 * 16);

if (barLength < 0) {
    barLength = 0;
} else if (barLength > 16) {
    barLength = 16;
}

return fullBar.substring(0, barLength);
// #endregion
