/**
 * @layout LCD_20x4_Main_F1
 * @version 1.0.0
 * @component Elements_List
 * @build 20251003.01
 * @description Lista todos los elementos del Screen Editor y sus propiedades.
 */

//#region Encabezados
if([SessionTypeName] = 'PRACTICE', ' PRACT | POS |R.TIME',
if([SessionTypeName] = 'QUALIFY', ' QUALY | POS |R.TIME',
' RACE  | POS |  LAP '))
// #endregion

//Añadir un espacio en blanco de 8.

//#Calcular la posicion en carrera (properties: display length 5 / Right align)
format([Position], 0) + '/' +
if([DataCorePlugin.CurrentGame] = 'AssettoCorsa'
|| [DataCorePlugin.CurrentGame] = 'AssettoCorsaCompetizione',
format([DataCorePlugin.GameRawData.StaticInfo.NumCars], 0),
if([DataCorePlugin.CurrentGame] = 'Automobilista2', [OpponentsCount] - 1,
format([PlayerClassOpponentsCount], 0)))
//#endregion

//Añadir espacio en blanco de 1.

//#Calcular el numero de vuelta (properties: display length 5 / Right align)
if([DataCorePlugin.GameData.NewData.SessionTypeName]='PRACTICE' || 
[DataCorePlugin.GameData.NewData.SessionTypeName]= 'QUALIFY',
format(floor([GameRawData.mEventTimeRemaining]/60), '00') + ':' + format(round(([GameRawData.mEventTimeRemaining]/60 - floor([GameRawData.mEventTimeRemaining]/60)) * 60, 0), '00'),
format([CurrentLap], '0') + '/' + format([TotalLaps], '0'))
//#endregion

//Añadir un salto de linea

//#Segunda linea de encabezados
if([SessionTypeName] = 'QUALIFY' || [SessionTypeName] = 'PRACTICE',
' RPMs | FUEL | TEMP ',
'  RPMs | FUEL | TEMP ')
//#endregion

//SimHub Propoerty (Rpms) (properties: display length 5 / Right align)

//Añadir un espacio en blanco de 3

//SimHub Propoerty (Fuel) (properties: display length 5)

//SimHub Propoerty (WaterTemperature) (properties: display length 5 / Right align)