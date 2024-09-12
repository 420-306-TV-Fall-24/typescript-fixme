// Explicit type annotation for boolean, number, and string variables
var isDone: boolean = false;
var lines: number = 42;
var username: string = "Anders";

// Annotate the type when it's not known
let unknownTypeVariable: any;

// Annotate this array as an array of numbers
var list: number[] = [1, 2, 3];

// Annotate the return type of this function (void since it doesn't return anything)
function littleHorribleAlert(): void {
  alert("I am a little annoying box!!");
}

// Annotate the parameter and return type for f1
var f1 = function (i: number): number {
  return i * i;
};

// Change f2 to accept a string or a number as a parameter
function f2(i: number | string): void {
  console.log("The value was " + i);
}

// Annotate the person objects with the Person interface
interface Person {
  name: string;
  age?: number; // Optional property
  move(): void;
}

// Explicitly typing person1 and person2 with the Person interface
var person1: Person = { name: "Bobby", move: function () {} };
var person2: Person = { name: "Bobby", age: 42, move: function () {} };

// Annotate mySearch to describe a function that accepts two string parameters
var mySearch: (src: string, sub: string) => boolean = function (src: string, sub: string): boolean {
  return src.search(sub) !== -1;
};

// Annotate the constructor arguments and properties in Point
class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  dist(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Annotate PointPerson to use all properties of Person and include the required property 'name'
class PointPerson implements Person {
  name: string;
  age?: number;
  move(): void {}

  constructor(name: string) {
    this.name = name;
  }
}

// Annotate this array as an array of any type
var arrayOfAnyType: any[] = [1, "string", false];

// Define Foo interface with optional properties bar and baz
interface Foo {
  bar?: number;
  baz?: string;
}

let foo: Foo = {};
foo.bar = 123;
foo.baz = "hello world";
