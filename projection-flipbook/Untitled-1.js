<!DOCTYPE html>
<html>
</html>

// all data to be visualized
var abortion = {}; 
var covidDeaths = d3.map();
var covidCases = d3.map();
var covidCasesDensity = d3.map();
var covidDeathsDensity = d3.map();

// set and pulled from the scrollytelling
var currentData;
var vizType;

var rawProjection0;
var rawProjection1;
var rawProjection2;
var projectionRotations;

d3.queue()
  .defer(d3.json, "data/countries-110m.json")
  .defer(d3.csv, "data/abortion-access_clean.csv", function (d) { abortion[d.id] =  +d.value; })
  .defer(d3.csv, "data/covid-deaths.csv", function (d) { covidDeaths.set(d.id, +d.value); })
  .defer(d3.csv, "data/covid-cases.csv", function (d) { covidCases.set(d.id, +d.value); })
  .defer(d3.csv, "data/covid-deaths-per-100000.csv", function (d) { covidDeathsDensity.set(d.id, +d.value); })
  .defer(d3.csv, "data/covid-cases-per-100000.csv", function (d) { covidCasesDensity.set(d.id, +d.value); })
  .await(ready);
function ready(error, countries110m) {

    console.log(abortion)

}
