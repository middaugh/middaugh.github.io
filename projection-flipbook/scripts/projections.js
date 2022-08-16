
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
  ]
  // var projections = [
  // { name: "Gall-Peters Cylindrical equal-area", value: d3.geoCylindricalEqualArea(), type: 'cylindrical', property: 'equal-area', parallel: 45 }, // Gall Peters
  // { name: "Lambert Cylindrical equal-area", value: d3.geoCylindricalEqualArea(), type: 'cylindrical', property: 'equal-area', parallel: 0 }, // Lambert
  // { name: "Miller cylindrical", value: d3.geoMiller(), type: 'cylindrical', property: 'compromise' },
  // //MOLWEID,
  // { name: "Mercator", value: d3.geoMercator(), type: 'cylindrical', property: 'conformal' },

  // {name: "Sinusoidal", value: d3.geoSinusoidal(), type: "pseudocylindrical", property: ["equal-area", "equidistant"]
  // },
  // {name: "Mollweide", value: d3.geoMollweide(), type: "pseudocylindrical",property: ["equal-area"]
  // },
  // { name: "Eckert II", value: d3.geoEckert2(), type: 'pseudocylindrical', property: 'equal-area' },
  // { name: "Eckert IV", value: d3.geoEckert4(), type: 'cylindrical', property: 'equal-area' },
  // ]

  // var projectionOptions = [
  //   {name: "Aitoff", projection:   d3.geoAitoffRaw},
  //   {name: "August", projection: d3.geoAugustRaw},
  //   {name: "Baker", projection: d3.geoBakerRaw},
  //   {name: "Boggs", projection: d3.geoBoggsRaw},
  //   {name: "Bromley", projection: d3.geoBromleyRaw},
  //   {name: "Collignon", projection: d3.geoCollignonRaw},
  //   {name: "Craster Parabolic", projection: d3.geoCrasterRaw},
  //   {name: "Eckert I", projection: d3.geoEckert1Raw},
  //   {name: "Eckert II", projection: d3.geoEckert2Raw},
  //   {name: "Eckert III", projection: d3.geoEckert3Raw},
  //   {name: "Eckert IV", projection: d3.geoEckert4Raw},
  //   {name: "Eckert V", projection: d3.geoEckert5Raw},
  //   {name: "Eckert VI", projection: d3.geoEckert6Raw},
  //   {name: "Eisenlohr", projection: d3.geoEisenlohrRaw},
  //   {name: "Equirectangular (Plate Carrée)", projection: d3.geoEquirectangularRaw},
  //   {name: "Goode Homolosine", projection: d3.geoHomolosineRaw},
  //   {name: "Kavrayskiy VII", projection: d3.geoKavrayskiy7Raw},
  //   {name: "Larrivée", projection: d3.geoLarriveeRaw},
  //   {name: "Laskowski", projection: d3.geoLaskowskiRaw},
  //   {name: "Mercator", projection: d3.geoMercatorRaw},
  //   {name: "Miller", projection: d3.geoMillerRaw},
  //   {name: "Mollweide", projection: d3.geoMollweideRaw},
  //   {name: "Natural Earth", projection: d3.geoNaturalEarth1Raw},
  //   {name: "Nell–Hammer", projection: d3.geoNellHammerRaw},
  //   {name: "Robinson", projection: d3.geoRobinsonRaw},
  //   {name: "Sinusoidal", projection: d3.geoSinusoidalRaw},
  //   {name: "Sinu-Mollweide", projection: d3.geoSinuMollweideRaw},
  //   {name: "van der Grinten", projection: d3.geoVanDerGrintenRaw},
  //   {name: "van der Grinten IV", projection: d3.geoVanDerGrinten4Raw},
  //   {name: "Wagner IV", projection: d3.geoWagner4Raw},
  //   {name: "Wagner VI", projection: d3.geoWagner6Raw},
  //   {name: "Winkel Tripel", projection: d3.geoWinkel3Raw}
  // ];
  
  // // Modified from https://bl.ocks.org/mbostock/3711652