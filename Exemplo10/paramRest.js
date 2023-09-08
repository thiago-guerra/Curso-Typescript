function somador(num1) {
    var num2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num2[_i - 1] = arguments[_i];
    }
    var total = num1;
    for (var key in num2) {
        total += num2[key];
    }
    console.log(total);
}
somador(5, 10, 5);
//# sourceMappingURL=paramRest.js.map