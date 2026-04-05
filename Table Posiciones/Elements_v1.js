/**
 * @layout LCD_20x4_Posiciones_F1
 * @version 1.0.0
 * @component Elements_List
 * @build 20251003.01
 * @description Lista todos los elementos del Screen Editor y sus propiedades.
 */

//#region ANUNCIO
|                  ||     TABLA DE     ||    POSICIONES    ||                  |
// #endregion

//#region Encabezados
if([SessionTypeName] = 'Practice 2' || [SessionTypeName] = 'Practice 1' || [SessionTypeName] = 'Practice 3' || [SessionTypeName] = 'Qualifying 1' || [SessionTypeName] = 'Qualifying 2' || [SessionTypeName] = 'Qualifying 3',
'P. DRIVER   BEST LAP',
'P. DRIVER   INTERVAL')
// #endregion

// Añadir linea de retorno

// Añadir '1  '

//#region Calcular nombre del piloto (properties: display length 9)
if([GarySwallowDataPlugin.Leaderboard.Position01.DriverName]=[GarySwallowDataPlugin.ObservedDriver.DriverName], 'TU', [GarySwallowDataPlugin.Leaderboard.Position01.DriverName.LastNameLong])
// #endregion

//#region Calcular tiempos del primer piloto (properties: display length 6)
if([SessionTypeName] = 'Practice 1' || [SessionTypeName] = 'Practice 2' || [SessionTypeName] = 'Practice 3' || [SessionTypeName] = 'Qualifying 1' || [SessionTypeName] = 'Qualifying 2' || [SessionTypeName] = 'Qualifying 3',

if([GarySwallowDataPlugin.Leaderboard.Position01.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position01.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position01.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position01.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position01.BestLap])) * 1000, 0), '000')),'')
// #endregion

//# Calcular nommbre de la tercera linea (properties: display length 12)
if([Position] = 1, 
'2  ' + [GarySwallowDataPlugin.Leaderboard.Position02.DriverName.LastNameLong],
if([Position] = 2, '^  ' + [GarySwallowDataPlugin.Leaderboard.Position01.DriverName.LastNameLong],
if([Position] = 3, '2  ' + [GarySwallowDataPlugin.Leaderboard.Position02.DriverName.LastNameLong],
if([Position] = 4, '3  ' + [GarySwallowDataPlugin.Leaderboard.Position03.DriverName.LastNameLong],
if([Position] = 5, '4  ' + [GarySwallowDataPlugin.Leaderboard.Position04.DriverName.LastNameLong],
if([Position] = 6, '5  ' + [GarySwallowDataPlugin.Leaderboard.Position05.DriverName.LastNameLong],
if([Position] = 7, '6  ' + [GarySwallowDataPlugin.Leaderboard.Position06.DriverName.LastNameLong],
if([Position] = 8, '7  ' + [GarySwallowDataPlugin.Leaderboard.Position07.DriverName.LastNameLong],
if([Position] = 9, '8  ' + [GarySwallowDataPlugin.Leaderboard.Position08.DriverName.LastNameLong],
if([Position] = 10, '9  ' + [GarySwallowDataPlugin.Leaderboard.Position09.DriverName.LastNameLong],
if([Position] = 11, '10 ' + [GarySwallowDataPlugin.Leaderboard.Position10.DriverName.LastNameLong],
if([Position] = 12, '11 ' + [GarySwallowDataPlugin.Leaderboard.Position11.DriverName.LastNameLong],
if([Position] = 13, '12 ' + [GarySwallowDataPlugin.Leaderboard.Position12.DriverName.LastNameLong],
if([Position] = 14, '13 ' + [GarySwallowDataPlugin.Leaderboard.Position13.DriverName.LastNameLong],
if([Position] = 15, '14 ' + [GarySwallowDataPlugin.Leaderboard.Position14.DriverName.LastNameLong],
if([Position] = 16, '15 ' + [GarySwallowDataPlugin.Leaderboard.Position15.DriverName.LastNameLong],
if([Position] = 17, '16 ' + [GarySwallowDataPlugin.Leaderboard.Position16.DriverName.LastNameLong],
if([Position] = 18, '17 ' + [GarySwallowDataPlugin.Leaderboard.Position17.DriverName.LastNameLong],
if([Position] = 19, '18 ' + [GarySwallowDataPlugin.Leaderboard.Position18.DriverName.LastNameLong],
if([Position] = 20, '19 ' + [GarySwallowDataPlugin.Leaderboard.Position19.DriverName.LastNameLong],
if([Position] = 21, '20 ' + [GarySwallowDataPlugin.Leaderboard.Position20.DriverName.LastNameLong],
if([Position] = 22, '21 ' + [GarySwallowDataPlugin.Leaderboard.Position21.DriverName.LastNameLong],
if([Position] = 23, '22 ' + [GarySwallowDataPlugin.Leaderboard.Position22.DriverName.LastNameLong],
'^  30 CARS')))))))))))))))))))))))
//#endregion

//#region Calcular tiempo de la tercera linea (properties: Display length: 6 / Right align)
if([SessionTypeName] = 'Practice 1' || [SessionTypeName] = 'Practice 2' || [SessionTypeName] = 'Practice 3' || [SessionTypeName] = 'Qualifying 1' || [SessionTypeName] = 'Qualifying 2' || [SessionTypeName] = 'Qualifying 3',

if([Position] = 1,
if([GarySwallowDataPlugin.Leaderboard.Position02.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position02.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position02.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position02.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position02.BestLap])) * 1000, 0), '000')),

if([Position] = 2,
if([GarySwallowDataPlugin.Leaderboard.Position01.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position01.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position01.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position01.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position01.BestLap])) * 1000, 0), '000')),

if([Position] = 3,
if([GarySwallowDataPlugin.Leaderboard.Position02.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position02.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position02.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position02.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position02.BestLap])) * 1000, 0)), '000'),

if([Position] = 4,
if([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position03.BestLap])) * 1000, 0), '000')),

if([Position] = 5,
if([GarySwallowDataPlugin.Leaderboard.Position04.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position04.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position04.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position04.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position04.BestLap])) * 1000, 0), '000')),

if([Position] = 6,
if([GarySwallowDataPlugin.Leaderboard.Position05.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position05.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position05.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position05.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position05.BestLap])) * 1000, 0), '000')),

if([Position] = 7,
if([GarySwallowDataPlugin.Leaderboard.Position06.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position06.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position06.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position06.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position06.BestLap])) * 1000, 0), '000')),

if([Position] = 8,
if([GarySwallowDataPlugin.Leaderboard.Position07.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position07.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position07.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position07.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position07.BestLap])) * 1000, 0), '000')),

if([Position] = 9,
if([GarySwallowDataPlugin.Leaderboard.Position08.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position08.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position08.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position08.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position08.BestLap])) * 1000, 0), '000')),

if([Position] = 10,
if([GarySwallowDataPlugin.Leaderboard.Position09.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position09.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position09.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position09.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position09.BestLap])) * 1000, 0), '000')),

if([Position] = 11,
if([GarySwallowDataPlugin.Leaderboard.Position10.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position10.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position10.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position10.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position10.BestLap])) * 1000, 0), '000')),

if([Position] = 12,
if([GarySwallowDataPlugin.Leaderboard.Position11.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position11.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position11.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position11.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position11.BestLap])) * 1000, 0), '000')),

if([Position] = 13,
if([GarySwallowDataPlugin.Leaderboard.Position12.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position12.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position12.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position12.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position12.BestLap])) * 1000, 0), '000')),

if([Position] = 14,
if([GarySwallowDataPlugin.Leaderboard.Position13.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position13.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position13.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position13.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position13.BestLap])) * 1000, 0), '000')),

if([Position] = 15,
if([GarySwallowDataPlugin.Leaderboard.Position14.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position14.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position14.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position14.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position14.BestLap])) * 1000, 0), '000')),

if([Position] = 16,
if([GarySwallowDataPlugin.Leaderboard.Position15.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position15.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position15.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position15.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position15.BestLap])) * 1000, 0), '000')),

if([Position] = 17,
if([GarySwallowDataPlugin.Leaderboard.Position16.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position16.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position16.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position16.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position16.BestLap])) * 1000, 0), '000')),

if([Position] = 18,
if([GarySwallowDataPlugin.Leaderboard.Position17.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position17.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position17.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position17.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position17.BestLap])) * 1000, 0), '000')),

if([Position] = 19,
if([GarySwallowDataPlugin.Leaderboard.Position18.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position18.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position18.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position18.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position18.BestLap])) * 1000, 0), '000')),

if([Position] = 20,
if([GarySwallowDataPlugin.Leaderboard.Position19.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position19.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position19.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position19.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position19.BestLap])) * 1000, 0), '000')),

if([Position] = 21,
if([GarySwallowDataPlugin.Leaderboard.Position20.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position20.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position20.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position20.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position20.BestLap])) * 1000, 0), '000')),

if([Position] = 22,
if([GarySwallowDataPlugin.Leaderboard.Position21.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position21.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position21.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position21.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position21.BestLap])) * 1000, 0), '000')),

'-:--.---')))))))))))))))))))))),
if([Position] = 1, format( isnull([PersistantTrackerPlugin.DriverBehind_00_Gap],'0'),'0.000'),
format( isnull([PersistantTrackerPlugin.DriverAhead_00_Gap],'0'),'0.000')))
//#endregion

//Insertar retorno de carro

//#region Calcular nombre de la cuarta linea (properties: Display length: 12)
if([Position] = 1, 
'3  ' + [GarySwallowDataPlugin.Leaderboard.Position03.DriverName.LastNameLong],

if([Position] = 2 && [Position] < [OpponentsCount], '3  ' + isnull([GarySwallowDataPlugin.Leaderboard.Position03.DriverName.LastNameLong], ''),


if([Position] = 3 && [Position] < [OpponentsCount], '4  ' + isnull([GarySwallowDataPlugin.Leaderboard.Position04.DriverName.LastNameLong], ''),
if([Position] = 4 && [Position] < [OpponentsCount], '5  ' + isnull([GarySwallowDataPlugin.Leaderboard.Position05.DriverName.LastNameLong], ''),
if([Position] = 5 && [Position] < [OpponentsCount], '6  ' + isnull([GarySwallowDataPlugin.Leaderboard.Position06.DriverName.LastNameLong], ''),
if([Position] = 6 && [Position] < [OpponentsCount], '7  ' + isnull([GarySwallowDataPlugin.Leaderboard.Position07.DriverName.LastNameLong], ''),
if([Position] = 7 && [Position] < [OpponentsCount], '8  ' + isnull([GarySwallowDataPlugin.Leaderboard.Position08.DriverName.LastNameLong], ''),
if([Position] = 8 && [Position] < [OpponentsCount], '9  ' + isnull([GarySwallowDataPlugin.Leaderboard.Position09.DriverName.LastNameLong], ''),
if([Position] = 9 && [Position] < [OpponentsCount], '10 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position10.DriverName.LastNameLong], ''),
if([Position] = 10 && [Position] < [OpponentsCount], '11 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position11.DriverName.LastNameLong], ''),
if([Position] = 11 && [Position] < [OpponentsCount], '12 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position12.DriverName.LastNameLong], ''),
if([Position] = 12 && [Position] < [OpponentsCount], '13 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position13.DriverName.LastNameLong], ''),
if([Position] = 13 && [Position] < [OpponentsCount], '14 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position14.DriverName.LastNameLong], ''),
if([Position] = 14 && [Position] < [OpponentsCount], '15 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position15.DriverName.LastNameLong], ''),
if([Position] = 15 && [Position] < [OpponentsCount], '16 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position16.DriverName.LastNameLong], ''),
if([Position] = 16 && [Position] < [OpponentsCount], '17 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position17.DriverName.LastNameLong], ''),
if([Position] = 17 && [Position] < [OpponentsCount], '18 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position18.DriverName.LastNameLong], ''),
if([Position] = 18 && [Position] < [OpponentsCount], '19 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position19.DriverName.LastNameLong], ''),
if([Position] = 19 && [Position] < [OpponentsCount], '20 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position20.DriverName.LastNameLong], ''),
if([Position] = 20 && [Position] < [OpponentsCount], '21 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position21.DriverName.LastNameLong], ''),
if([Position] = 21 && [Position] < [OpponentsCount], '22 ' + isnull([GarySwallowDataPlugin.Leaderboard.Position22.DriverName.LastNameLong], ''),
'')))))))))))))))))))))
//#endregion

//#region Calcular tiempos de la cuarta linea (properties: Display length: 6 / Right align)
if([SessionTypeName] = 'Practice 1' || [SessionTypeName] = 'Practice 2' || [SessionTypeName] = 'Practice 3' || [SessionTypeName] = 'Qualifying 1' || [SessionTypeName] = 'Qualifying 2' || [SessionTypeName] = 'Qualifying 3',

if([Position] = 1,
if([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position03.BestLap])) * 1000, 0), '000')),

if([Position] = 2 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position03.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position03.BestLap])) * 1000, 0), '000')),


if([Position] = 3 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position04.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position04.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position04.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position04.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position04.BestLap])) * 1000, 0), '000')),

if([Position] = 4 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position05.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position05.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position05.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position05.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position05.BestLap])) * 1000, 0), '000')),

if([Position] = 5 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position06.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position06.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position06.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position06.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position06.BestLap])) * 1000, 0), '000')),

if([Position] = 6 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position07.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position07.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position07.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position07.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position07.BestLap])) * 1000, 0), '000')),

if([Position] = 7 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position08.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position08.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position08.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position08.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position08.BestLap])) * 1000, 0), '000')),

if([Position] = 8 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position09.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position09.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position09.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position09.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position09.BestLap])) * 1000, 0), '000')),

if([Position] = 9 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position10.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position10.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position10.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position10.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position10.BestLap])) * 1000, 0), '000')),

if([Position] = 10 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position11.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position11.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position11.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position11.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position11.BestLap])) * 1000, 0), '000')),

if([Position] = 11 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position12.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position12.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position12.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position12.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position12.BestLap])) * 1000, 0), '000')),

if([Position] = 12 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position13.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position13.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position13.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position13.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position13.BestLap])) * 1000, 0), '000')),

if([Position] = 13 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position14.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position14.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position14.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position14.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position14.BestLap])) * 1000, 0), '000')),

if([Position] = 14 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position15.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position15.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position15.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position15.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position15.BestLap])) * 1000, 0), '000')),

if([Position] = 15 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position16.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position16.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position16.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position16.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position16.BestLap])) * 1000, 0), '000')),

if([Position] = 16 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position17.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position17.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position17.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position17.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position17.BestLap])) * 1000, 0), '000')),

if([Position] = 17 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position18.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position18.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position18.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position18.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position18.BestLap])) * 1000, 0), '000')),

if([Position] = 18 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position19.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position19.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position19.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position19.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position19.BestLap])) * 1000, 0), '000')),

if([Position] = 19 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position20.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position20.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position20.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position20.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position20.BestLap])) * 1000, 0), '000')),

if([Position] = 20 && [Position] < [OpponentsCount],
if([GarySwallowDataPlugin.Leaderboard.Position21.BestLap] = 0, '-:--.---',
format(floor([GarySwallowDataPlugin.Leaderboard.Position21.BestLap] / 60), '0') + ':' +
format(floor([GarySwallowDataPlugin.Leaderboard.Position21.BestLap] % 60), '00') + '.' +
format(round(([GarySwallowDataPlugin.Leaderboard.Position21.BestLap] - floor([GarySwallowDataPlugin.Leaderboard.Position21.BestLap])) * 1000, 0), '000')),


'')))))))))))))))))))),
if([Position] = 1, format( isnull([PersistantTrackerPlugin.DriverBehind_01_Gap],'0'),'+0.000'),
format( isnull([PersistantTrackerPlugin.DriverBehind_00_Gap],'0'),'+0.000')))
//#endregion
