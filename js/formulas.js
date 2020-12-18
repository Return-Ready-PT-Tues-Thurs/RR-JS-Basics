// Basic math formulaas
function addition(num1, num2){
  var pLUS = num1 + num2;
  return pLUS;
}

console.log(addition(2, 2));

function subtraction(num1, num2){
  let minus = num1 - num2;
  return minus;
}

console.log(subtraction(2, 2));

function multiplication(num1, num2){
  let minus = num1 * num2;
  return minus;
}

console.log(multiplication(2, 2));

function division(num1, num2){
  let divis = num1 / num2;
  return divis;
}

console.log(division(2, 2));

// Area formulaas
function areaSquare(side){
  let square = side * side;
  return square;
}

console.log(areaSquare(2));

function areaRectangle(length, width){
  let rect = length * width;
  return rect;
}

console.log(areaRectangle(2, 3));

function areaParallelogram(base, height){
  let paral = base * height;
  return paral;
}

console.log(areaParallelogram(2, 4));

function areaTriangle(base, height){
  let tri = .5 * (base * height);
  return tri;
}

console.log(areaTriangle(2, 4));

function Circle(radius){
  let circ = 3.14 * (radius * radius);
  return circ;
}

console.log(Circle(7));

function Sphere(radius){
  let spher = 4 * 3.14 * (radius * radius);
  return spher;
}

console.log(Sphere(7));

// Surface Area formulas
function surfaceAreaCube(side){
  let sACube = 6 * (side * side);
  return sACube;
}

console.log(surfaceAreaCube(8));

function surfaceAreaCylinder(radius, height){
  let sACylinder = 2 * 3.14 * radius * height;
  return sACylinder;
}

console.log(surfaceAreaCylinder(4, 6));

// Perimeter formulas
function perimeterSquare(side){
  let perim = 4 * side;
  return perim;
}

console.log(perimeterSquare(7));

function perimeterRectangle(length, height){
  let perimR = (2 * length) + (2 * height);
  return perimR;
}

console.log(perimeterRectangle(7,9));

function perimeterTriangle(side1, side2, side3){
  let perimT = side1 + side2 + side3;
  return perimT;
}

console.log(perimeterTriangle(2, 6, 9));

function perimeterCircle(diameter){
  return 3.14 * diameter;
}

console.log(perimeterCircle(7));

// Volume formulas
function volumeCube(side){
  return side * side * side;
}

volumeCube(2);

function volumeRectangular(length, width, height){
  return length * width * height;
}

volumeRectangular(2, 6, 7);

function volumeCylinder(radius, height){
  return 3.14 * (radius * radius) * height;
}

volumeCylinder(6, 7);
