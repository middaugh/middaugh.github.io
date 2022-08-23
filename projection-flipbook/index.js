
// declare all my global variables
const duration = 3500; // timing

// all data to be visualized
var abortion = {};
var covidDeaths = {};
var covidCases = {};
var covidCasesDensity = {};
var covidDeathsDensity = {};

// set and pulled from the scrollytelling
var currentData;
var vizType;

var rawProjection0;
var rawProjection1;
var rawProjection2;
var projectionRotations;

d3.queue()
  .defer(d3.json, "data/countries-110m.json")
  .defer(d3.csv, "data/abortion-access_clean.csv", function (d) { abortion[d.id] = +d.value; })
  .defer(d3.csv, "data/covid-deaths.csv", function (d) { covidDeaths[d.id] = +d.value; })
  .defer(d3.csv, "data/covid-cases.csv", function (d) { covidCases[d.id] = +d.value; })
  .defer(d3.csv, "data/covid-deaths-per-100000.csv", function (d) { covidDeathsDensity[d.id] = +d.value; })
  .defer(d3.csv, "data/covid-cases-per-100000.csv", function (d) { covidCasesDensity[d.id] = +d.value; })
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


  var width = 800;
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

  function transitionSection(canvas, projection, minLat, maxLat, duration) {

    const ease = d3.easeQuadIn;
    var context = canvas.getContext('2d');
    var canvasId = canvas.id;

    var path = sizeScaleSection(canvas, projection, minLat, maxLat);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath(), context.strokeStyle = "#fff", path(countries), context.stroke();

    var firstTime = true;

    timer = d3.timer((elapsed) => {
      // compute how far through the animation we are (0 to 1)
      const t = Math.min(1, ease(elapsed / (duration - 500))); // make a little less than duration so time to create viz at end

      
      if (t < 1) {
        path = sizeScaleSection(canvas, projection.alpha(t), minLat, maxLat);
        context.beginPath(), context.strokeStyle = "#fff", path(countries), context.stroke();
      }

      // when time to stop animating
      if (t == 1) {

        if (firstTime) {
          
          // CHOROPLETH
          if (vizType == 'choropleth') {
            makeChoropleth(context, path, countries, currentData);
          }

          // DOT DENSITY
          if (vizType == 'dotDensity') {
            makeDotDensity(context, projection, minLat, maxLat, countries, currentData)
            
          }

          makeTissot(context, path);
          firstTime = false;
        }

      }
    });

  }

  // d3.geoRobinsonRaw-d3.geoEquirectangularRaw-d3.geoSinusoidalRaw; 
  // d3.geoMercatorRaw-d3.geoEquirectangularRaw-d3.geoWinkel3Raw; 
  // d3.geoMillerRaw-d3.geoEckert4Raw-d3.geoMollweideRaw; 
  // d3.geoSinusoidalRaw-d3.geoMollweideRaw-d3.geoEquirectangularRaw; 
  // d3.geoMollweideRaw-d3.geoMillerRaw-d3.geoRobinsonRaw; 
  // d3.geoWinkel3Raw-d3.geoEckert4Raw-d3.geoMercatorRaw; 


  function roundOne() {
    console.log('round one')
    transitionSection(topCanvas, projectionRotations[0].top, 30, 85, duration)
    transitionSection(middleCanvas, projectionRotations[0].middle, -30, 30, duration)
    transitionSection(bottomCanvas, projectionRotations[0].bottom, -80, -30, duration)
  };

  function roundTwo() {
    console.log('round two')
    transitionSection(topCanvas, projectionRotations[1].top, 30, 85, duration)
    transitionSection(middleCanvas, projectionRotations[1].middle, -30, 30, duration)
    transitionSection(bottomCanvas, projectionRotations[1].bottom, -80, -30, duration)
  }

  function roundThree() {
    console.log('round three')
    transitionSection(topCanvas, projectionRotations[2].top, 30, 85, duration)
    transitionSection(middleCanvas, projectionRotations[2].middle, -30, 30, duration)
    transitionSection(bottomCanvas, projectionRotations[2].bottom, -80, -30, duration)
  }

  function fullRotation(projectionsListString, currentDataString, vizTypeString) {
    // get projections from passed parameters, set globally
    var projectionsList = projectionsListString.split("-")
    rawProjection0 = eval(projectionsList[0])
    rawProjection1 = eval(projectionsList[1])
    rawProjection2 = eval(projectionsList[2])

    // get visualization type and data from the passed parameters and set globally
    currentData = eval(currentDataString);
    vizType = vizTypeString.replace(/(\r\n|\n|\r)/gm, ""); // clean the string

    projectionRotations = [
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

    d3.timeout(roundOne, duration,)
    d3.timeout(roundTwo, duration, duration + duration * .7 );
    d3.timeout(roundThree, duration + 50, duration + duration + (duration * .5) * 2);
  }


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

    // update global projection flipbook variables based on the step 
    if (el.dataset.display == 'show') {
      var currentDataString = el.dataset.data
      var vizTypeString = el.dataset.viztype
      var projectionsListString = el.dataset.projections

      d3.timeout(fullRotation(projectionsListString, currentDataString, vizTypeString), duration * 7);

    }
    else {

    }



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
        debug: false // change to true to see the scrollying lines
      })
      .onStepEnter(handleStepEnterSide);


    // setup resize event
    window.addEventListener("resize", scroller.resize);
  }

  // kick things off
  init();








}



