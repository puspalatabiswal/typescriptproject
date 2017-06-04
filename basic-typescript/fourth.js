var addNumbers = function (num1, num2) {
    return num1 + num2;
};
var total = addNumbers(4, 5);
console.log(total);
var addMoreNumbers = function (num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 + num2;
};
var sum = addMoreNumbers(4, 9);
console.log(sum);
var addThreeNumbers = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    console.log("num1", num1);
    console.log("num2", num2);
    console.log("num3", num3);
    if (num3 !== null) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
};
var sum = addThreeNumbers(4, 9, 1);
console.log(sum);
function myRestParams(first, second) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    console.log("first", first);
    console.log("second", second);
    console.log("others", others);
    return others;
}
console.log("myRestParams : ", myRestParams("pooja", "biswal", "ridhi", "mansi"));
function sumNumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var value = nums_1[_a];
        console.log(value);
    }
}
sumNumber(1, 2, 3);
