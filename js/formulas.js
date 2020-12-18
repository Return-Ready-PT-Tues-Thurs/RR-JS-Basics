// Basic math formulaas
function addition(num1, num2){
  let answer = num1 +num2
  return answer;
}

function subtraction(num1, num2){
  let answer = num1 - num2
  return answer;
}

function multiplication(num1, num2){
  let answer =num1 * num2
  return answer;
}

function division(num1, num2){
  let answer = num1/num2

  return answer;
}

// Area formulaas
function areaSquare(side){
  let answer = Math.pow(side,2)
  return answer;
}

function areaRectangle(length, width){
  let answer =length *width
  return answer;
}

function areaParallelogram(base, height){
  let answer = base *height
  return answer;
}

function areaTriangle(base, height){
  let answer = 1/2 (base * height)
  return -answer;
}

function Circle(radius){
  let answer = Math.PI * Math.pow(radius ,2)
  return answer;
}

function Sphere(radius){
  let answer = 4 * Math.PI* Math.pow(radius,2)
  return -answer;
}

// Surface Area formulas
function surfaceAreaCube(side){
  let answer = 6 * Math.pow(side,2)
  return answer;
}

function surfaceAreaCylinder(radius, height){
  let answer = (2*Math.PI*radius*height) + (2*Math.PI * Math.pow(radius,2))
  return answer;
}

// Perimeter formulas
function perimeterSquare(side){
  let answer = 4*side
  return answer;
}

function perimeterRectangle(length, height){
  let answer = 2(lenght+height)
  return  answer;
}

function perimeterTriangle(side1, side2, side3){
  let answer = side1 + side2 + side3

  return answer;
}

function perimeterCircle(diameter){
  let answer = (Math.PI)*diameter
  return answer;
}

// Volume formulas
function volumeCube(side){
  let answer = Math.pow(side,3)

  return answer;
}

function volumeRectangular(length, width, height){
  let answer = lenght * width * height

  return answer;
}

function volumeCylinder(radius, height){
  let answer = Math.PI * Math.pow(radius,2) * height

  return answer;
}
