// Basic math formulaas
function addition(num1, num2){
  return  num1 + num2;
}

function subtraction(num1, num2){
  return  num1 - num2;
}

function multiplication(num1, num2){
  return  num1 * num2;
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
  return base * height /2;
}

function Circle(radius){
  const radiusSquared = radius * radius;
  const pi = Math.PI;
  const areaOfCircle = radiusSquared * pi;
  return areaOfCircle;
}

function Sphere(radius){
 let fourXP = (4 * Math.PI); 
 let rXR = (radius * radius);
 return fourXP * rXR;
}


// Surface Area formulas
// Cube | SA = 6s<sup>2</sup> | where s = any side |
function surfaceAreaCube(side){
 // let sixCube = (side * 6) * 2;
 // return sixCube;

 return Math.pow(side,3);
}

//Cylinder (lateral) | SA = 2 π r h | where π = 3.14, r = radius, and h = height  |
function surfaceAreaCylinder(radius, height){
  let twoXPI = (2 * Math.PI); (radius * height);
  return twoXPI; 
}

// Perimeter formulas
function perimeterSquare(side){
  let fourS = (side * 4);
  return fourS;
}

//Rectangle | P = 2l + 2w | where l = length and w = width |
function perimeterRectangle(length, width){
  let twolength = (2 * length) + (2 * width);
  return twolength;
  }

  //Triangle | P = s1 + s2 + s3 | where s = a side |
function perimeterTriangle(side1, side2, side3){
  let pT = (side1 + side2 + side3);
  return pT;
}

//Circle | C = π d | where π = 3.14 and d = diameter |
function perimeterCircle(diameter){
  let pC = (Math.PI * diameter);
  return pC;
}

// Volume formulas
//Cube | V = S<sup>3</sup> | where S = any side |
function volumeCube(side){
  let vC = (side * side * side);
  return vC;
}

//Rectangular Container | V = lwh | where l = length, w = width, and h = height 
function volumeRectangular(length, width, height){
let vR =  (length * width * height);
  return vR;
}

//Cylinder | V = π r<sup>2</sup>h | where π= 3.14, r = radius, and h = height |
function volumeCylinder(radius, height){
  let vCy = Math.PI * ((radius * radius) * height);
  return vCy;
}
