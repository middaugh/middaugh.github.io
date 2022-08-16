
var abortion = d3.map();
var width = 600;
var height = 600


d3.queue()
  .defer(d3.json, "/data/countries-110m.json")
  .defer(d3.csv, "/data/abortion-access_clean.csv", function (d) { abortion.set(d.id, { id: d.id, value: +d.value }); })
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

    var topCanvas = d3.select(containerId).append('canvas').attr('class', 'top');
    var middleCanvas = d3.select(containerId).append('canvas').attr('class', 'middle');
    var bottomCanvas = d3.select(containerId).append('canvas').attr('class', 'bottom');

    var canvases = [topCanvas, middleCanvas, bottomCanvas]

    canvases.forEach(function (element) {
      element.attr('width', width);
      element.attr('style', 'margin: 3px')
    });

    return [topCanvas.node(), middleCanvas.node(), bottomCanvas.node()]

  }

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
    timer = d3.timer((elapsed) => {
      // compute how far through the animation we are (0 to 1)
      const t = Math.min(1, ease(elapsed / duration));
      path = sizeScaleSection(canvas, projection.alpha(t), minLat, maxLat);


      context.clearRect(0, 0, width, canvas.height);
      context.beginPath(), context.strokeStyle = "#fff", path(countries), context.stroke();

      // if this animation is over
      if (t === 1) {
        // stop this timer since we are done animating.
        // return the path so that it can be used by choropleth
        //currentPath = sizeScaleSection(canvas, projection.alpha(1), minLat, maxLat);

        // CHOROPLETH
        makeChoropleth(context, path, countries, abortion)


        // DOT DENSITY
        // makeDotDensity(context, projection, countries, data)

        timer.stop();
      }
    });


    // do something


  }






  // Selecting Ramomly
  // var selectedProjection0 = projectionOptions[Math.floor(Math.random() * projectionOptions.length)];
  // var selectedProjection1 = projectionOptions[Math.floor(Math.random() * projectionOptions.length)];
  // var selectedProjection2 = projectionOptions[Math.floor(Math.random() * projectionOptions.length)];

  // var rawProjection0 = selectedProjection0.projection
  // var rawProjection1 = selectedProjection1.projection
  // var rawProjection2 = selectedProjection2.projection





  //////////////////////
  // Scrollama Section
  ////////////////////////

  var main = document.querySelector("main");

  // initialize the scrollama
  var scroller = scrollama();
  var scrollerSide = scrollama();

  // scrollama event handlers
  function handleStepEnter(response) {
    // response = { element, direction, index }

    var scrolly = main.querySelector("#scrolly");
    var sticky = scrolly.querySelector(".sticky-thing");
    var article = scrolly.querySelector("article");
    var steps = article.querySelectorAll(".step");

    var el = response.element;
    console.log(el);

    // remove is-active from all steps
    // then add is-active to this step
    steps.forEach(step => step.classList.remove('is-active'));
    el.classList.add('is-active');

    // update graphic based on step
    sticky.querySelector("p").innerText = `Step number is ${el.dataset.step}`;
    sticky.style.backgroundColor = el.dataset.color;
    sticky.querySelector("p").style.fontSize = `${el.dataset.step}rem`;

  }


  function createFlipbook(instructionString){
    
    var duration = 2000; 
    splitParameters = instructionString.split("-");
    

    let rawProjection0 = eval(splitParameters[0]); 
    let rawProjection1 = eval(splitParameters[1]); 
    let rawProjection2 = eval(splitParameters[2]); 
    let mapType = splitParameters[3]; 
    let mapData = splitParameters[4]; 

    var canvases = constructCanvases("#projectionFlipbook"); // ALTER TO WORK WITH DOT DENSITY
    var topCanvas = canvases[0];
    var middleCanvas = canvases[1];
    var bottomCanvas = canvases[2];
  
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

    function fullRotation() {
      roundOne()
      d3.timeout(roundTwo, duration * 2);
      d3.timeout(roundThree, duration * 4);
    }
  

    roundOne() 
  

    

  }


  function handleStepEnterSide(response) {
    // response = { element, direction, index }

    var scrolly = main.querySelector("#scrolly-side");
    var sticky = scrolly.querySelector(".sticky-thing");
    var article = scrolly.querySelector("article");
    var steps = article.querySelectorAll(".step");

    var el = response.element;
    var elStepNumber = el.dataset.step;
    console.log(el);
    flipBookEl = el;

    // remove is-active from all steps
    // then add is-active to this step
    steps.forEach(step => step.classList.remove('is-active'));
    el.classList.add('is-active');

    // update graphic based on step
    //el.innerText = `Step number is ${el.dataset.step}`;
    testTitle = 'mercator-robinson'
    //el.innerText = `See How the ` + testTitle + `FINALLY reveals the actual Data name`;
    //sticky.style.backgroundColor = el.dataset.color;
    sticky.querySelector("p").innerText = `${el.dataset.step}rem`; 
    createFlipbook(el.dataset.step) // EVENTUALLY SWAP TO flipbookparameters

    // MAKE THE transition
    //fullRotation()
    //fullRotation(el.dataset.step)
    //sticky.querySelector("p").innerText = 
    // Getting back the name from the projection
  }

  function init() {
    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
      .setup({
        step: "#scrolly article .step",
        offset: 0.45,
        debug: false
      })
      .onStepEnter(handleStepEnter);

    scrollerSide
      .setup({
        step: "#scrolly-side article .step",
        offset: .5,
        debug: true // change to true to see the scrollying lines
      })
      .onStepEnter(handleStepEnterSide);


    // setup resize event
    window.addEventListener("resize", scroller.resize);
  }

  // kick things off
  init();

}