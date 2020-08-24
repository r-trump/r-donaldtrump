https://voterportal.sos.la.gov/Home/Home?uid=53

var uid = (x) => {
  let paramx = () => {
    parishObjBoolean[x+1];
  };
  return paramx(); 
}


// Parish By uid: Name
var parishObjBoolean = {
  2: Acadia,
  3: Allen,
  4: Ascension,
  5: Assumption,
  6: Avoyelles,
  7: Beauregard,
  8: Bienville,
  9: Bossier,
  10: Caddo,
  11: Calcasieu,
  12: Caldwell,
  13: Cameron,
  14: Catahoula,
  15: Claiborne, 
  16: Concordia,
  17: De Soto, 
  18: East Baton Rouge,
  19: East Carroll,
  20: East Feliciana,
  21: Evangeline,
  22: Franklin,
  23: Grant,
  24: Iberia,
  25: Iberville,
  26: Jackson,
  27: Jefferson,
  28: Jefferson Davis,
  29: Lafayette,
  30: Lafourche,
  31: Lasalle,
  32: Lincoln,
  33: Livingston,
  34: Madison,
  35: Morehouse,
  36: Natchitoches,
  37: Orleans,
  38: Ouachita,
  39: Plaquemines,
  40: Pointe Coupee,
  41: Rapides,
  42: Red Red,
  43: Richland,
  44: Sabine,
  45: St Bernard,
  46: St Charles,
  47: St Helena,
  48: St James,
  49: St John The Baptist,
  50: St Landry,
  51: St Martin,
  52: St Mary,
  53: St Tammany,
  54: Tangipahoa,
  55: Tensas,
  56: Terrebonne,
  57: Union,
  58: Vermilion,
  59: Vernon,
  60: Washington,
  61: Webster,
  62: West Baton Rouge,
  63: West Carroll,
  64: West Feliciana,
  65: Winn,
}

// Parish by Name: uid
var parishObjName = {
  Acadia: 2,
  Allen: 3,
  Ascension: 4 ,
  Assumption: 5,
  Avoyelles: 6,
  Beauregard: 7,
  Bienville: 8,
  Bossier: 9,
  Caddo: 10,
  Calcasieu: 11,
  Caldwell: 12,
  Cameron: 13,
  Catahoula: 14,
  Claiborne: 15,
  Concordia: 16,
  DeSoto: 17,
  EastBatonRouge: 18,
  EastCarroll: 19,
  EastFeliciana: 20,
  Evangeline: 21,
  Franklin: 22,
  Grant: 23,
  Iberia: 24,
  Iberville: 25,
  Jackson: 26,
  Jefferson:
  JeffersonDavis:
  Lafayette:
  Lafourche:
  Lasalle:
  Lincoln:
  Livingston:
  Madison:
  Morehouse:
  Natchitoches:
  Orleans:
  Ouachita:
  Plaquemines:
  PointeCoupee:
  Rapides:
  RedRiver:
  Richland:
  Sabine:
  StBernard:
  StCharles:
  StHelena:
  StJames:
  StJohnTheBaptist:
  StLandry:
  StMartin:
  StMary:
  StTammany:
  Tangipahoa:
  Tensas:
  Terrebonne:
  Union:
  Vermilion:
  Vernon:
  Washington:
  Webster:
  WestBatonRouge:
  WestCarroll:
  WestFeliciana:
  Winn:
}

var parishFunc = function(params) {
  let x = Map(parishObjName[index()]);
  return x;
}

var parishObjByName = {
  parish: parishObjName
  parish1: parishFunc(),
}