function scaleDensityMapping(data) {
    // This function ensures that there will never be too many dots drawn; it scales all inputs to be between 0 and 1000 dots per country
    var scaledData = []

    function convertRange(value, r1, r2) {
      return Math.round((value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0]);
    }

    console.log(...Object.values(data))
    var maxValue = Math.max(...Object.values(data))

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        data[key] = convertRange(data[key], [0, maxValue], [0, 1000])
      }
    }
    return data

  }


function createDensitySetup(context, projection, minLat, maxLat) {
    // Finds the regular and hidden contexts / canvases 
    var canvas = context.canvas
    var canvasId = context.canvas.id
    var parentContainer = document.getElementById(canvasId).parentElement
    let hiddenCanvas = parentContainer.querySelector('.hidden')
    let hiddenContext = hiddenCanvas.getContext('2d');
    let hiddenCanvasId = hiddenCanvas.id

    hiddenCanvas = positionHidden(hiddenCanvasId, canvas.width, canvas.height) // remove reassignment? 

    var path = sizeScaleSection(canvas, projection, minLat, maxLat)
    var pathHidden = d3.geoPath(projection, hiddenContext);

    //Set height of containing div 
    return [context, hiddenContext, path, pathHidden]

}; 


function drawDensity(baseContext, hiddenContext, path, pathHidden, countries, densityValues) {
    var features = countries.features 

    // Scale all of the data to be used in density graphs
    densityValues = scaleDensityMapping(densityValues);

    // Set the Containing Div Height to the right amount
    document.getElementById(baseContext.canvas.id + `Container`).style.height = baseContext.canvas.height + `px`;
    hiddenContext.canvas.height = baseContext.canvas.height;

    // Draw the Country Paths in White
    baseContext.beginPath(), baseContext.strokeStyle = "#fff", path(countries), baseContext.stroke();
    baseContext.save();
    features.forEach(function (d, i) {
        // check that the country id exists in the dataset
        var r = parseInt(i / 256),
            g = i % 256;

        //Draw on the invisible one
        hiddenContext.beginPath()
        hiddenContext.fillStyle = "rgb(" + r + "," + g + ",0)";
        hiddenContext.beginPath();
        pathHidden(d);
        hiddenContext.fill();
        hiddenContext.stroke();
    }
    )

    // pixel data for the whole polygon map. Using color for checking if the point is in the polygon
    var imageData = hiddenContext.getImageData(0, 0, hiddenContext.canvas.width, hiddenContext.canvas.height);

    features.forEach(function (d, i) {
        // Taken Directly from Andrew Woodruff's, Dot Density Block, http://bl.ocks.org/awoodruff/94dc6fc7038eba690f43
        // check that the country id exists in the dataset
        var r = parseInt(i / 256),
            g = i % 256;
        var countryId = features[i].id

        // Find the value if the country exists in the dataset; if it doesn't set the value to zero 

        if (countryId in densityValues) {
            var pop = densityValues[countryId]; 
        }
        else {
            var pop = 0;
        }

        var bounds = pathHidden.bounds(features[i]),
            x0 = bounds[0][0],
            y0 = bounds[0][1],
            w = bounds[1][0] - x0,
            h = bounds[1][1] - y0,
            hits = 0,
            count = 0,
            limit = pop * 5,	// limit tests just in case of infinite loops
            x,
            y,
            r = parseInt(i / 256),
            g = i % 256;


        // test random points within feature bounding box
        while (hits < pop - 1 && count < limit) {	// we're done when we either have enough dots or have tried too many times
            x = parseInt(x0 + Math.random() * w);
            y = parseInt(y0 + Math.random() * h);
            // use pixel color to determine if point is within polygon. draw the dot if so.
            if (testPixelColor(imageData, x, y, hiddenContext.canvas.width, r, g)) {
                drawPixel(x, y, "rgba(255, 255, 255, 1)"); //#f4b9b2 salmon pink
                hits++;
            }

            hits++;
            count++;
        }
    }
    )

    function testPixelColor(imageData, x, y, w, r, g) {
        var index = (x + y * w) * 4;
        return imageData.data[index + 0] == r && imageData.data[index + 1] == g;
    }

    // modified to make the 'a' value more understandable
    function drawPixel(x, y, rgbaString) {
        baseContext.fillStyle = rgbaString
        baseContext.fillRect(x, y, 2, 2);
    }
};

function makeDotDensity(context, projection, minLat, maxLat, countries, densityValues) {
    setup = createDensitySetup(context, projection, minLat, maxLat);
    console.log(setup)
    drawDensity(...setup, countries, densityValues);
}