// add the type annotation to explicitly specify the type of the variable:
var isDone:boolean= false;
var lines:number = 42;
var username:string = "Anders";

// annotate the type as when it's not known
let unknownTypeVariable:any;

//annotate this array
var list:number[] = [1, 2, 3];

// annotate the return type of this function
function littleHorribleAlert() {
  alert("I am a little annoying box!!");
}

var f1 = function (i:number): number {
  return i * i;
};

//change f4 to accept a string or a number as a parameter
function f2(i:string|number):void {
  console.log("The value was " + i);
}

// Annotate the person objects with an interface. Some properties are optional
interface Person {
  name:string;
  age:number;
  move:() => void;
}
var person1:Person = { name: "Bobby",age:35, move: function () {} };
var person2:Person = { name: "Bobby", age: 42, move: function () {} };

// Annotate mySearch to describe a function that accepts two string parameters
var mySearch = (src:string, sub:string):boolean => {
  return src.search(sub) != -1;
};

//annotate the constructor arguments and properties
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  dist(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// annotate PointPerson to use all properties of Person and then add the missing required property
class PointPerson implements Person {
  name: string;
  age: number;
  move: () => void;
  constructor(name: string,age:number) {
    this.name = name;
    this.age = age;
   
  }
}

// annotate this array
var arrayOfAnyType: (number | string | boolean)[] = [1, "string", false];

// fix the foo object so bar and baz can be added
interface Foo {
  bar?: number; 
  baz?: string; 
}
let foo: Foo = {};
foo.bar = 123;
foo.baz = "hello world";

console.log(foo.bar); 
console.log(foo.baz);