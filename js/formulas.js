// Basic math formulaas
function addition(num1, num2){
  let add = num1 + num2;
  return add;
}

function subtraction(num1, num2){
  let sub = num1 - num2;
  return sub;
}

function multiplication(num1, num2){
  let mult = num1 * num2;
  return mult;
}

function division(num1, num2){
  let div = num1  / num2;
  return div;
}

// Area formulaas
function areaSquare(side){
  let aS = Math.pow(side, 2);
  return aS;
}

function areaRectangle(length, width){
  let aR = length * width;
  return aR;
}

function areaParallelogram(base, height){
  let aP = base * height;
  return aP;
}

function areaTriangle(base, height){
  let aT =  (base * height) / 2;
  return aT;
}

function Circle(radius){
  let circum = Math.pow((3.14 * radius), 2);
  return circum;
}

// Surface Area formulas
function surfaceAreaCube(side){
  let surfAC = Math.pow((6 * side), 2)
  return surfAC;
}

function surfaceAreaCylinder(radius, height){
  let surfAreaCyl = Math.pow((3.14 * radius * height), 2);
  return surfAreaCyl;
}

// Perimeter formulas
function perimeterSquare(side){
  let perSquare = Math.pow(side, 4);
  return perSquare;
}

function perimeterRectangle(length, height){
  let perRect = Math.pow((length * height), 2)
  return perRect;
}

function perimeterTriangle(side1, side2, side3){
  let perTri = (side1 + side2 + side3);
  return perTri;
}

function perimeterCircle(diameter){
  let perCir = 3.14 * diameter;
  return perCir;
}

// Volume formulas
function volumeCube(side){
  let volCube = Math.pow(side, 3);
  return volCube;
}

function volumeRectangular(length, width, height){
  let volRect = length * width * height;
  return volRect;
}

function volumeCylinder(radius, height){
  let volCyl = Math.pow((3.14 * radius), 2);
  return volCyl;
}
