// Basic math formulaas
function addition(num1, num2){
  let sum = num1 + num2;
  return sum;
}

function subtraction(num1, num2){
  let difference = num1 - num2;
  return difference;
}

function multiplication(num1, num2){
  let multiplicationSum = num1 * num2;
  return multiplicationSum;
}

function division(num1, num2){
  let divisionSum = num1 / num2;
  return divisionSum;
}

// Area formulaas
function areaSquare(side){
  let areaSquareSum = side * side;
  return areaSquareSum;
}

function areaRectangle(length, width){
  let areaRectanglesum = length * width
  return areaRectanglesum;
}

function areaParallelogram(base, height){
  let areaParallelogramSum = base * height;
  return areaParallelogramSum;
}

function areaTriangle(base, height){
  let areaTriangleSum = (base * height)/ 2; 
  return areaTriangleSum;
}

function Circle(radius){
  let A = Math.pow(3.14, radius, 2);
  return A;
}

function Sphere(radius){
  let sphereRad = 4*Math.PI*(radius*radius);
  return sphereRad;
}

// Surface Area formulas
function surfaceAreaCube(side){
  let SA = 6 * side * side;
  return SA;
}

function surfaceAreaCylinder(radius, height){
  let SA = 2 * Math.PI * radius * height;
  return SA;
}

// Perimeter formulas
function perimeterSquare(side){
  let P = 4 * side;
  return P;
}

function perimeterRectangle(length, height){
  let P = 2 * length + 2 * height;
  return P;
}

function perimeterTriangle(side1, side2, side3){
  let P = side1 + side2 + side3;
  return P;
}

function perimeterCircle(diameter){
  let C = Math.PI * diameter;
  return C;
}

// Volume formulas
function volumeCube(side){
  let V = side * side * side;
  return V;
}

function volumeRectangular(length, width, height){
  let Vr = length * width * height;
  return Vr;
}

function volumeCylinder(radius, height){
  let V = Math.PI * radius * radius * height;
  return V;
}