// add the type annotation to explicitly specify the type of the variable:
var isDone: boolean = false;
var lines = 42;
var username: string = "Anders";

// annotate the type as when it's not known
let unknownTypeVariable: void ;

//annotate this array
var list: number[] = [1, 2, 3];

// annotate the return type of this function
function littleHorribleAlert(): void {
  alert("I am a little annoying box!!");
}

var f1 = function (i) {
  return i * i;
};

//change f4 to accept a string or a number as a parameter
function f2(i: (string : number) => void ) {
  console.log("The value was " + i);
}

// Annotate the person objects with an interface. Some properties are optional
var person1 = { name: "Bobby", move: function (name : string) {} };
var person2 = { name: "Bobby", age: 42, move: function (name : string, age: number): void {} };

// Annotate mySearch to describe a function that accepts two string parameters
var mySearch = function (src: string, sub: string) {
  return src.search(sub) != -1;
};

//annotate the constructor arguments and properties
class Point {
    x : number;
    y : number;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  dist() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// annotate `PointPerson` to use all properties of `Person` and then add the missing required property
class PointPerson {
    name : string;
    age : number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// annotate this array
var arrayOfAnyType: [number, string, boolean] = [1, "string", false];

// fix the foo object so bar and baz can be added
interface footype{bar: number, baz: string};
let foo : footype = {bar: 123, baz: "hello"};
foo.bar = 123;
foo.baz = "hello world";