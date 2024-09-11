// add the type annotation to explicitly specify the type of the variable:
var isDone: boolean = false;
var lines: number = 42;
var username:string = "Anders";

// annotate the type as when it's not known
let unknownTypeVariable: unknown;

//annotate this array
var list:number[] = [1, 2, 3];

// annotate the return type of this function
function littleHorribleAlert():void {
  alert("I am a little annoying box!!");
}

var f1 = function (i):number {
  return i * i;
};

//change f4 to accept a string or a number as a parameter
function f2(i: (number|string)) {
  console.log("The value was " + i);
}

// Annotate the person objects with an interface. Some properties are optional
interface person{
  name: string;
  age?: number;
  move: ()=>void;
}
var person1: person = { name: "Bobby", move: function () {} };
var person2: person = { name: "Bobby", age: 42, move: function () {} };

// Annotate mySearch to describe a function that accepts two string parameters
interface search{
  (arg1: string, arg2: string): boolean;
}
var mySearch: search = function (src, sub) {
  return src.search(sub) != -1;
};

//annotate the constructor arguments and properties
class Point {
  x:number = 0;
  y:number = 0;
  constructor(x=0, y = 0) {
    this.x = x;
    this.y = y;
  }
  dist() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// annotate `PointPerson` to use all properties of `Person` and then add the missing required property
class PointPerson{
  name: string;
  constructor(name) {
    this.name = name;
  }
}

// annotate this array
var arrayOfAnyType:any[] = [1, "string", false];

// fix the foo object so bar and baz can be added
let foo:any = {};
foo.bar = 123;
foo.baz = "hello world";
