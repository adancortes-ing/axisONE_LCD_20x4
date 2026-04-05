/**
 * @layout LCD_20x4_Main_F1
 * @version 1.0.0
 * @component Elements_List
 * @build 20251003.01
 * @description Lista todos los elementos del Screen Editor y sus propiedades.
 */

//#region ANUNCIO
|                  ||       MAIN       ||      SCREEN      ||                  |
// #endregion

//#region Encabezados
if([SessionTypeName] = 'Practice 1', 'PRAC. 1| POS |R.TIME',
if([SessionTypeName] = 'Practice 2', 'PRAC. 2| POS |R.TIME',
if([SessionTypeName] = 'Practice 3', 'PRAC. 3| POS |R.TIME',
if([SessionTypeName] = 'Qualifying 1', '  Q1   | POS |R.TIME',
if([SessionTypeName] = 'Qualifying 2', '  Q2   | POS |R.TIME',
if([SessionTypeName] = 'Qualifying 3', '  Q3   | POS |R.TIME',
' RACE  | POS |  LAP '))))))
// #endregion

//Añadir un espacio en blanco de 8.

//#region calcular posición
format([Position], 0) + '/' + format([OpponentsCount], 0)
// #endregion

//Añadir un espacio en blanco de 1.

//#region calcular el numero de vuelta
if([DataCorePlugin.GameData.NewData.SessionTypeName] = 'Practice 1' || 
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Practice 2' ||
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Practice 3' ||
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Qualifying 1' ||
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Qualifying 2' ||
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Qualifying 3', format([SessionTimeLeft], 'mm') + ':' + format([SessionTimeLeft], 'ss'),
format([CurrentLap], '0') + '/' + format([TotalLaps], '0'))
// #endregion

// Añadir un retorno de carro.

//#region Datos del ERS
if([DataCorePlugin.GameData.NewData.SessionTypeName] = 'Practice 1' || 
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Practice 2' ||
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Practice 3' ||
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Qualifying 1' ||
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Qualifying 2' ||
[DataCorePlugin.GameData.NewData.SessionTypeName] = 'Qualifying 3',
if([GameRawData.PlayerCarStatusData.m_ersDeployMode] = 0, 'ERS: 0 RECHARGE  ',
if([GameRawData.PlayerCarStatusData.m_ersDeployMode] = 1, 'ERS: 1 NORMAL    ',
if([GameRawData.PlayerCarStatusData.m_ersDeployMode] = 2, 'ERS: 2 FASTLAP   ',
if([GameRawData.PlayerCarStatusData.m_ersDeployMode] = 3, 'ERS: 3 OVERTAKE  ',
'0       ERS      100')))),
if([GameRawData.PlayerCarStatusData.m_ersDeployMode] = 0, ' ERS: 0 RECHARGE  ',
if([GameRawData.PlayerCarStatusData.m_ersDeployMode] = 1, ' ERS: 1 NORMAL    ',
if([GameRawData.PlayerCarStatusData.m_ersDeployMode] = 2, ' ERS: 2 FASTLAP   ',
if([GameRawData.PlayerCarStatusData.m_ersDeployMode] = 3, ' ERS: 3 OVERTAKE  ',
' 0       ERS      100')))))
// #endregion

// Llamar a la propiedad ERSPercent

//#region Barra de ERS
var ersPercent = $prop('ERSPercent');
var fullBar = "====================";
var barLength = Math.floor(ersPercent / 100 * 20);

if (barLength < 0) {
    barLength = 0;
} else if (barLength > 20) {
    barLength = 20;
}

return fullBar.substring(0, barLength);
// #endregion