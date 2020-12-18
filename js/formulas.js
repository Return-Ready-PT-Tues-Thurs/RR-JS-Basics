// Basic math formulas
function addition(num1, num2){
  let addCalc = num1 + num2;
  return (addCalc);
}

function subtraction(num1, num2){
  let subCalc = num1 - num2;
  return (subCalc);
}

function multiplication(num1, num2){
  let multCalc = num1 * num2;
  return (multCalc);
};

function division(num1, num2){
  let divCalc = num1 / num2;
  return (divCalc);
}

// Area formulaas
function areaSquare(side){
  let areaSquareCalc = side * side;
  return (areaSquareCalc);
}

function areaRectangle(length, width){
  let areaRectCalc = length * width;
  return (areaRectCalc);
}

function areaParallelogram(base, height){
  let areaPar = base * height;
  return (areaPar);
}

function areaTriangle(base, height){
  let areaTri = (base * height)/2;
  return (areaTri);
}

function Circle(radius){
  let radiusCirc = Math.PI * (radius * radius);
  return (radiusCirc);
}

function Sphere(radius){
  let radiusSph = 4 * Math.PI * (radius * radius);
  return (radiusSph);
}

// Surface Area formulas
function surfaceAreaCube(side){
  let surfAreaCube = 6 * side * side;
  return (surfAreaCube);
}

function surfaceAreaCylinder(radius, height){
  let surfAreaCyl = 2 * Math.PI * radius * height;
  return (surfAreaCyl);
}

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