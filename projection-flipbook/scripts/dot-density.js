function createDensitySetup(context, projection, minLat, maxLat) {

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


function drawDensity(baseContext, hiddenContext, path, pathHidden, features, densityValues) {

    // Set the Containing Div Height to the right amount
    document.getElementById(baseContext.canvas.id + `Container`).style.height = baseContext.canvas.height + `px`;

    baseContext.clearRect(0, 0, baseContext.canvas.width, baseContext.canvas.height);
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


    // pixel data for the whole polygon map. we'll use color for point-in-polygon tests.
    var imageData = hiddenContext.getImageData(0, 0, hiddenContext.canvas.width, hiddenContext.canvas.height);


    // Draw the Dots  -- TAKEN FROM THE DOT DENSITY BOSTON BLOCK
    features.forEach(function (d, i) {
        // check that the country id exists in the dataset
        var r = parseInt(i / 256),
            g = i % 256;
        var countryId = features[i].id

        // Find the value if the country exists in the dataset; if it doesn't set the value to zero 

        if (densityValues.has(countryId)) {
            var pop = densityValues.get(countryId) / 100;
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
                drawPixel(x, y, 0, 17, 204, 255);
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

    // there are faster (or prettier) ways to draw lots of dots, but this works
    function drawPixel(x, y, r, g, b, a) {
        baseContext.fillStyle = "rgba(" + r + "," + g + "," + b + "," + (a / 255) + ")";
        baseContext.fillRect(x, y, 1, 1);
    }
};

function makeDotDensity(context, projection, minLat, maxLat, features, densityValues) {
    console.log('entered make dot ')
    setup = createDensitySetup(context, projection, minLat, maxLat);
    drawDensity(...setup, features, densityValues);
}