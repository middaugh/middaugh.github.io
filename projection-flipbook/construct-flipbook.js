
    var abortion = d3.map();
    var covidDeaths = d3.map();
    var width;

    // POSSIBLY ALTER SO THAT IT RETURNS NEW PROJECTION
    function clipProjectionByLat(unclippedProjection, minLat, maxLat) {

        var maxLon = 180 - 0.01; // bug where if 180 breaks the clipping
        var minLon = -180

        var projectionCopy = {};
        var clippedProjection = Object.assign(projectionCopy, unclippedProjection)
        return clippedProjection
            .preclip(d3.geoClipPolygon({
                type: "Polygon",
                coordinates: [[[minLon, minLat], [minLon, maxLat], [maxLon, maxLat], [maxLon, minLat], [minLon, minLat]]]
            }))

    }

    function interpolateProjection(raw0, raw1) {
        // THIS FUNCTION TAKEN DIRECTLY FROM MIKE BOSTOCK'S ORTHOGRAPHIC TO EQUIRECTANGULAR BLOCK
        // https://observablehq.com/@d3/orthographic-to-equirectangular
        const mutate = d3.geoProjectionMutator(t => (x, y) => {
            const [x0, y0] = raw0(x, y), [x1, y1] = raw1(x, y);
            return [x0 + t * (x1 - x0), y0 + t * (y1 - y0)];
        });
        let t = 0;
        return Object.assign(mutate(t), {
            alpha(_) {
                return arguments.length ? mutate(t = +_) : t;
            }
        });
    }

    d3.queue()
        .defer(d3.json, "/data/countries-110m.json")
        .defer(d3.csv, "/data/abortion-access_clean.csv", function (d) { abortion.set(d.id, { id: d.id, value: +d.value }); })
        .defer(d3.csv, "/data/covid-deaths.csv", function (d) { covidDeaths.set(d.id, { id: d.id, value: +d.value }); })
        .await(ready);
    function ready(error, countries110m) {

        if (error) throw error;

        // Define Map Boundaries 
        let countries = topojson.feature(countries110m, countries110m.objects.countries);
        countries.features = countries.features.filter(feature => feature.properties.name !== 'Fiji'); // Remove because of problems with Clipping
        let features = countries.features;
        let countrymesh = topojson.mesh(countries110m, countries110m.objects.countries, (a, b) => a !== b)
        let graticule = d3.geoGraticule10()
        let outline = ({ type: "Sphere" })



        function constructCanvases(containerId) {

            // Select Container & Get Height and Width 
            var container = d3.select(containerId)
            width = container.node().clientWidth; // defined globally; 
            var height = container.node().clientHeight;

            console.log(height);
            console.log(width)

            var topCanvas = d3.select(containerId).append('canvas').attr('class', 'top').attr('id', 'top');
            var middleCanvas = d3.select(containerId).append('canvas').attr('class', 'middle').attr('id', 'middle');
            var bottomCanvas = d3.select(containerId).append('canvas').attr('class', 'bottom').attr('id', 'bottom');

            var canvases = [topCanvas, middleCanvas, bottomCanvas]

            canvases.forEach(function (element) {
                element.attr('width', width);
                element.attr('style', 'margin: 3px')
            });

            return [topCanvas.node(), middleCanvas.node(), bottomCanvas.node()]

        }



        function positionCanvases(containerId) {

            var width = 600,
                height = 400;

            var topCanvasId = "top"
            var topHiddenCanvasId = "topHidden"

            var middleCanvasId = "middle"
            var middleHiddenCanvasId = "middleHidden"

            var bottomCanvasId = "bottom"
            var bottomHiddenCanvasId = "bottomHidden"

            function positionBase(baseCanvasId, width, height) {
                // canvas for dot map
                var baseCanvas = d3.select(`#` + baseCanvasId)
                    .attr("width", width)
                    .attr("height", height)
                    .style("position", "absolute")
                    .style("top", "0px")
                    .style("left", "0px");
                return baseCanvas
            }

            function positionHidden(hiddenCanvasId, width, height) {
                // invisible map of polygons
                var hiddenCanvas = d3.select(`#` + hiddenCanvasId)
                    .attr("width", width)
                    .attr("height", height)
                    .style("display", "none")
                    .style("position", "absolute")
                    .style("top", "0px")
                    .style("left", "0px");
                return hiddenCanvas

            }
        }

        function sizeScaleSection(canvas, unclippedProjection, minLat, maxLat) {
            // Given a canvas, unclipped projection (eg, d3.geoMercator()), and minLat and maxLat, set the height of the section and return the path with the correct global scale
            // what if all this should return are the paths 
            var context = canvas.getContext('2d');
            var canvasWidth = canvas.width;
            var outline = ({ type: "Sphere" });

            var projection = clipProjectionByLat(unclippedProjection, minLat, maxLat);

            // Find out the global scale for a given projection at that size
            var globalScale = unclippedProjection.fitWidth(canvasWidth, outline).scale();

            // Find the height of a projection by taking the minimum and max values 
            var sectionHeight = d3.geoPath(projection).bounds(outline)[1][1] - d3.geoPath(projection).bounds(outline)[0][1]

            canvas.height = sectionHeight // KEEP OR NOT KEEP? OR RETURN SEPARATE 

            // Apply this scale to the clipped projection
            var path = d3.geoPath(projection.scale(globalScale), context);


            return path;
        }


        function createSection(canvas, path, countries) {
            var context = canvas.getContext('2d');

            context.save();
            context.beginPath(), path(graticule), context.strokeStyle = "#ccc", context.stroke();
            //context.beginPath(), path(land), context.fillStyle = "#000", context.fill();
            context.beginPath(), path(countries), context.fillStyle = "#000", context.fill();
            context.beginPath(), path(countrymesh), context.strokeStyle = "#fff", context.stroke();
            context.restore();

        }


        function makeChoropleth(context, path, baseMap, data) {
            var domain = d3.extent(data.values(), function (d) { return d.value });
            var range = d3.interpolateBlues
            var color = d3.scaleSequential()
                .domain(domain)
                .interpolator(d3.interpolateBlues);

            baseMap.features.forEach(function (d) {
                // check that the country id exists in the dataset
                if (typeof (abortion.get(d.id)) != 'undefined') {
                    context.fillStyle = color(data.get(d.id).value);
                    context.beginPath();
                    path(d);
                    context.fill();
                    context.stroke();
                }
                else {
                    context.beginPath(), context.fillStyle = "#f0f0f0", path(d), context.fill();
                }
            });

        }


        function transitionSection(canvas, projection, minLat, maxLat, duration) {

            const ease = d3.easeQuadIn;
            var context = canvas.getContext('2d');
            var canvasId = canvas.id;
            console.log(canvasId);

            // var scaledSection = sizeScaleSection(canvas, unclippedProjection, minLat, maxLat);
            // var path = scaledSection[0]
            // var projection = scaledSection[1]
            // var globalScale = scaledSection[2]

            // Need a way to get the global scale at the beginning and the global scale at the end 
            var path;
            var stopTimer = 0;
            timer = d3.timer((elapsed) => {
                // compute how far through the animation we are (0 to 1)
                const t = Math.min(1, ease(elapsed / duration));

                if (t <= 1) {
                    path = sizeScaleSection(canvas, projection.alpha(t), minLat, maxLat);
                    context.beginPath(), context.strokeStyle = "#fff", path(countries), context.stroke();
                }

                // if this animation is over
                if (t === 1) {
                    console.log('entered loop')
                    // stop this timer since we are done animating.
                    // return the path so that it can be used by choropleth
                    //currentPath = sizeScaleSection(canvas, projection.alpha(1), minLat, maxLat);

                    // CHOROPLETH

                    //makeChoropleth(context, path, countries, abortion);
     
                    // DOT DENSITY
                    // makeDotDensity(context, projection, countries, data)
                    makeDotDensity(context, projection, minLat, maxLat, width, height, features, covidDeaths); 


                    //timer.stop(); 
                    timer.stop()

                }


            });

            // do something


        }

        var width = 600; 
        var height = 400;

        var topCanvasId = "top"
        var middleCanvasId = "middle"
        var bottomCanvasId = "bottom"


        var topCanvas = positionBase(topCanvasId, width, height).node()
        var middleCanvas = positionBase(middleCanvasId, width, height).node()
        var bottomCanvas = positionBase(bottomCanvasId, width, height).node()


        var topContext = topCanvas.getContext('2d')
        var middleContext = middleCanvas.getContext('2d')
        var bottomContext = bottomCanvas.getContext('2d')


        var selectedProjection0 = projectionOptions[Math.floor(Math.random() * projectionOptions.length)];
        var selectedProjection1 = projectionOptions[Math.floor(Math.random() * projectionOptions.length)];
        var selectedProjection2 = projectionOptions[Math.floor(Math.random() * projectionOptions.length)];

        var rawProjection0 = selectedProjection0.projection
        var rawProjection1 = selectedProjection1.projection
        var rawProjection2 = selectedProjection2.projection


        var projectionRotations = [
            {
                'top': interpolateProjection(rawProjection0, rawProjection1),
                'middle': interpolateProjection(rawProjection1, rawProjection2),
                'bottom': interpolateProjection(rawProjection2, rawProjection0)
            },

            {
                'top': interpolateProjection(rawProjection1, rawProjection2),
                'middle': interpolateProjection(rawProjection2, rawProjection0),
                'bottom': interpolateProjection(rawProjection0, rawProjection1)
            },

            {
                'top': interpolateProjection(rawProjection2, rawProjection0),
                'middle': interpolateProjection(rawProjection0, rawProjection1),
                'bottom': interpolateProjection(rawProjection1, rawProjection2),
            }

        ]

        // modify to take additional argument
        function roundOne() {
            transitionSection(topCanvas, projectionRotations[0].top, 30, 85, duration)
            transitionSection(middleCanvas, projectionRotations[0].middle, -30, 30, duration)
            transitionSection(bottomCanvas, projectionRotations[0].bottom, -80, -30, duration)
        };


        function roundTwo() {
            transitionSection(topCanvas, projectionRotations[1].top, 30, 85, duration)
            transitionSection(middleCanvas, projectionRotations[1].middle, -30, 30, duration)
            transitionSection(bottomCanvas, projectionRotations[1].bottom, -80, -30, duration)
        }

        function roundThree() {
            transitionSection(topCanvas, projectionRotations[2].top, 30, 85, duration)
            transitionSection(middleCanvas, projectionRotations[2].middle, -30, 30, duration)
            transitionSection(bottomCanvas, projectionRotations[2].bottom, -80, -30, duration)
        }


        const duration = 3000;

        function fullRotation() {
            roundOne()
            d3.timeout(roundTwo, duration * 2);
            d3.timeout(roundThree, duration * 3);
        }





        roundOne()

    }

