// Basic math formulaas
function addition(num,num2){
  
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
  return 1/2 * base * height;
}

function Circle(radius){
  const radiusSquared = radius * radius;
  const pi = Math.PI;
  areaofcircle = radiusSquared * pi;
  return areaofcircle;

}

function Sphere(radius){
  let sphereRadius = radius * radius;
  let radiusPi = sphereRadius * Math.PI;
  return 4 * radiusPi;
}

// Surface Area formulas
function surfaceAreaCube(side){
  let sASum = 6*(side) *2;
  return sASum;
  
 // return Math.pow(side,3);
}
// SA = 2 π r h
function surfaceAreaCylinder(radius, height){
 let twoXPI = (2* Math.PI);
 let radiusXH = (radius * h);
 return twoXPI;

}
// Square | P = 4s
// Perimeter formulas
function perimeterSquare(side){
  let fourSide = (4 * side);
  return fourSide;
}
//Rectangle | P = 2l + 2w 
function perimeterRectangle(length, width){
  let twoLength = (2 * length) + (2 * width);
  return twoLength;
}
//Triangle | P = s1 + s2 + s3
function perimeterTriangle(side1, side2, side3){
  let pT = side1 + side2 + side3;
  return pT;
}
// Circle | C = π d 
function perimeterCircle(diameter){
let pD = Math.PI * diameter;
  return pD;
}
//Cube | V = S<sup>3</sup> | where S = any side 
// Volume formulas
function volumeCube(side){
let volC = side * Math.pow(side,3);
  return volC;
}
// V = lwh 
function volumeRectangular(length, width, height){
  let vR = length * width * height;
 return vR;
}
//  V = π r<sup>2</sup>h
function volumeCylinder(radius, height){
  let vC = Math.PI * (Math.pow(radius,2) * height);
  return vC;
}
