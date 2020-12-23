// Basic math formulas
function addition(num1, num2){
  return num1 + num2;
}

function subtraction(num2, num1){
  return num1 - num2;
}

function multiplication(num1, num2){
  return num1 * num2;
}

function division(num1, num2){
  return num1 / num2;
}

// Area formulas
function areaSquare(side){
  return side * side;
}

function areaRectangle(length, width){
  return length * width;
}

function areaParallelogram(base, height){
  return base * height;
}

function areaTriangle(base, height){
  return base * height /2;
}

function Circle(radius){
  
  const radiusSquared = radius * radius;
  const pi = Math.PI;
  const areaOfCircle = radiusSquared * Math.PI;
  return areaOfCircle;
}

function Sphere(radius){
  let radiusSphere = radius * radius;
  const radiusPi = radiusSphere * Math.PI;
  return 4 * radiusPi;
}  

// Surface Area formulas
function surfaceAreaCube(side){
  let surfaceArea = 6 * side * side;
  return surfaceArea;
  
}

function surfaceAreaCylinder(radius, height){
   let cylinderArea = 2 * Math.PI * radius * height;
   return cylinderArea;
}

// Perimeter formulas
function perimeterSquare(side){
  return 4 * side;
}

function perimeterRectangle(length, height){
  let rectangleTop = length * 2;
  let rectangleBottom = height * 2;
  return rectangleBottom + rectangleTop;
}

function perimeterTriangle(side1, side2, side3){
  let triangleSize = side1 + side2 + side3;
  return triangleSize;
}

function perimeterCircle(diameter){
  return Math.PI * diameter;
  
}

// Volume formulas
function volumeCube(side){
  let cubeSize = side * side * side;
  return cubeSize;
}

function volumeRectangular(length, width, height){
  let rectangleSize = length * width * height;
  return rectangleSize;
}

function volumeCylinder(radius, height){
  let cylinderSize = Math.PI;
  let cylinderRace = radius * radius * height;
  return cylinderSize * cylinderRace;
}

