
  var projectionOptions = [
  //{ name: "Gall-Peters Cylindrical equal-area", projection: d3.geoCylindricalEqualAreaRaw, type: 'cylindrical', property: 'equal-area', parallel: 45 }, // Gall Peters
  //{ name: "Lambert Cylindrical equal-area", projection: d3.geoCylindricalEqualAreaRaw, type: 'cylindrical', property: 'equal-area', parallel: 0 }, // Lambert
  { name: "Miller cylindrical", projection: d3.geoMillerRaw, type: 'cylindrical', property: 'compromise' },
  // { name: "Mercator", projection: d3.geoMercatorRaw, type: 'cylindrical', property: 'conformal' }, // DOESN"T WORK FOR SOME REASON
  {name: "Sinusoidal", projection: d3.geoSinusoidalRaw, type: "pseudocylindrical", property: ["equal-area", "equidistant"]
  },
  {name: "Equirectangular (Plate Carrée)", projection: d3.geoEquirectangularRaw},
  {name: "Mollweide", projection: d3.geoMollweideRaw, type: "pseudocylindrical",property: ["equal-area"]
  },
  {name: "Winkel Tripel", projection: d3.geoWinkel3Raw},
  { name: "Eckert II", projection: d3.geoEckert2Raw, type: 'pseudocylindrical', property: 'equal-area' },
  { name: "Eckert IV", projection: d3.geoEckert4Raw, type: 'cylindrical', property: 'equal-area' },
  {name: "Robinson", projection: d3.geoRobinsonRaw},
  { name: "Gall-Peters Cylindrical equal-area", value: d3.geoCylindricalEqualArea(), type: 'cylindrical', property: 'equal-area', parallel: 45 }, // Gall Peters
]
 