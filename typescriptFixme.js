// Explicit type annotation for boolean, number, and string variables
var isDone = false;
var lines = 42;
var username = "Anders";
// Annotate the type when it's not known
var unknownTypeVariable;
// Annotate this array as an array of numbers
var list = [1, 2, 3];
// Annotate the return type of this function (void since it doesn't return anything)
function littleHorribleAlert() {
    alert("I am a little annoying box!!");
}
// Annotate the parameter and return type for f1
var f1 = function (i) {
    return i * i;
};
// Change f2 to accept a string or a number as a parameter
function f2(i) {
    console.log("The value was " + i);
}
// Explicitly typing person1 and person2 with the Person interface
var person1 = { name: "Bobby", move: function () { } };
var person2 = { name: "Bobby", age: 42, move: function () { } };
// Annotate mySearch to describe a function that accepts two string parameters
var mySearch = function (src, sub) {
    return src.search(sub) !== -1;
};
// Annotate the constructor arguments and properties in Point
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.dist = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return Point;
}());
// Annotate PointPerson to use all properties of Person and include the required property 'name'
var PointPerson = /** @class */ (function () {
    function PointPerson(name) {
        this.name = name;
    }
    PointPerson.prototype.move = function () { };
    return PointPerson;
}());
// Annotate this array as an array of any type
var arrayOfAnyType = [1, "string", false];
var foo = {};
foo.bar = 123;
foo.baz = "hello world";
