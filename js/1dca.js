$(document).ready(function() {
    randomRow(25);
});

var randomRow = function(length) {
    row = [];
    for (var i = 3; i < length; i += 1) {
        row.push(Math.floor(Math.random() * 2));
    }
    console.log(row);
}	

var firstRow = function() {
    var canvas = $('<canvas/>', {id: 'canvas', width: 1000, height: 100});
    $('body').append(canvas);
    var context = canvas[0].getContext("2d");
    var imgData = context.createImageData(1000, 1);
    for (var i = 3; i < imgData.data.length; i += 4) {
        imgData.data[i] = Math.floor(Math.random() * 2) * 255;
    }
    context.putImageData(imgData, 0.5, 0);
}

var nextRow = function(previousRow) {
}
