// Basic math formulaas
function addition (num1, num2) {
  let result = num1 + num2;
  return result 
}

function subtraction(num1, num2){
  let result = num1 - num2;
  return result 
}

function multiplication(num1, num2){
  let result = num1 * num2;
  return result 
}

function division(num1, num2){
  let result = num1 / num2;
  return result 
}

// Area formulaas
function areaSquare(side){
  let result = side * side;
  return result }

function areaRectangle(length, width){
  let result = width * length;
  return result}

function areaParallelogram(base, height){
  let result = base * height;
  return result}

function areaTriangle(base, height){
  let result = base * height /2;
  return result}

function Circle(radius){
  let result = 3.14159 * radius*radius;
  return result }

function Sphere(radius){
  let result = 4 * 3.14159 * (radius*radius);
  return result }

// Surface Area formulas
function surfaceAreaCube(side){
  let result = side * side * side;
  return result }

function surfaceAreaCylinder(radius, height){
  let result = (2*3.14*radius*height) + (2*3.14*radius*radius);
  return result }

// Perimeter formulas
function perimeterSquare(side){
  let perSquare = 4 * side;
  return (perSquare);
}

function perimeterRectangle(length, height){
  let perRect = lenght * height;
  return (perRect);
}

function perimeterTriangle(side1, side2, side3){
  let perTri = side1 + side2 + side3;
  return (perTri);
}

function perimeterCircle(diameter){
  let perCirc = diameter * Math.PI;
  return (perCirc);
}

// Volume formulas
function volumeCube(side){
  let volCube = side * side * side;
  return (volCube);
}

function volumeRectangular(length, width, height){
  let volRect = length * width * height;
  return (volRect);
}

function volumeCylinder(radius, height){
  let volCyl = Math.PI * radius * radius * height;
  return (volCyl);
}
