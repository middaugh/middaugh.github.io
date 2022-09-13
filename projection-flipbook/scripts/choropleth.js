//////////////////////
// CHOROPLETH
////////////////////////

function makeChoropleth(context, path, baseMap, data) {
    
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    var domain = d3.extent(Object.values(data), function (d) { return d });
    var range = d3.interpolateGreys
    var color = d3.scaleSequential()
        .domain(domain)
        .interpolator(range);

    baseMap.features.forEach(function (d) {
        // check that the country id exists in the dataset
        if (d.id in data ) {
            context.fillStyle = color(data[d.id]);
            context.strokeStyle = "#fff"
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