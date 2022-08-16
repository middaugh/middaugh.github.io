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

function positionHidden(hiddenCanvasId, width, height){
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
    document.getElementById(canvas.id + `Container`).style.height = sectionHeight + `px`;

    // Apply this scale to the clipped projection
    var path = d3.geoPath(projection.scale(globalScale), context);


    return path;
}


