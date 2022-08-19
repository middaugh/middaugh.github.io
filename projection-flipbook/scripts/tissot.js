function makeCircles(){
    // Taken directly from Mike Bostock's Observable Notebook https://observablehq.com/@d3/tissots-indicatrix
    const step = 15;
    const circle = d3.geoCircle().center(d => d).radius(step / 4).precision(10);
    const coordinates = [];
    for (let y = -80; y <= 80; y += step) {
      for (let x = -180; x < 180; x += step) {
        coordinates.push(circle([x, y]).coordinates);
      }
    }
    return {type: "MultiPolygon", coordinates};
}


function makeTissot(context, path){
    var circles = makeCircles()
    context.beginPath(), path(circles), context.strokeStyle = "rgba(200, 200, 200, .5)", context.stroke(); // Salmon Pink
}



  

