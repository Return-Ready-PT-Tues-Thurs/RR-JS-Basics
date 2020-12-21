// Basic math formulaas
function addition(num1, num2){
  return num1 + num2;
}

function subtraction(num1, num2){
  return num1 - num2;
}

function multiplication(num1, num2){
  return num1 * num2;
}

function division(num1, num2){
  return num1 / num2;
}

// Area formulaas
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
  return base * height / 2;
}

function Circle(radius){
  return radius * radius;
}

function Sphere(radius){
  let val1 = (4*Math.PI) * (radius * radius);
  return val1;

}

// Surface Area formulas
function surfaceAreaCube(side){
  let sixCube= (6 * side) * 2;
  return sixCube;
}


//| Cylinder (lateral) | SA = 2 π r h | where π = 3.14, r = radius, and h = height  |
function surfaceAreaCylinder(radius, height){
  let twoxPI = (2 * Math.PI);
  let radiusxH = (radius * height);
  return twoxPI * radiusxH;
}

// Perimeter formulas
// Square | P = 4s | where s = any side |
function perimeterSquare(side){
  let fourxS = (side * 4);
  return fourxS;
}

function perimeterRectangle(length, height){
  let twoLength = (2 * length)+ (2 * width);
  return twoLength;
}

function perimeterTriangle(side1, side2, side3){
  let pT= (side1 + side2 + side3);
  return pT;
}

function perimeterCircle(diameter){
  let periCircle = (Math.PI * diameter);
  return periCircle;
}

// Volume formulas
function volumeCube(side){
  let volCube = Math.pow(side,3)
  return volCube;
}

function volumeRectangular(length, width, height){
  let volRect = (length * width * height);
  return volRect;
}

function volumeCylinder(radius, height){
  let volCyl= Math.PI * ((radius * radius) * height)
  return volCyl;
}
