var a = function () {
    var pos = 1;
    var getPosition = function (value) {
        pos = 2;
        console.log(pos);
    }

    return getPosition;
}();

