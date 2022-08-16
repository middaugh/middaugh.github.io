
function makeChoropleth(context, path, baseMap, data) {
    var domain = d3.extent(data.values(), function (d) { return d });
    var range = d3.interpolateBlues
    var color = d3.scaleSequential()
        .domain(domain)
        .interpolator(range);

    baseMap.features.forEach(function (d) {
        // check that the country id exists in the dataset
        if (data.has(d.id) ) {
            context.fillStyle = color(data.get(d.id));
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