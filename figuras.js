//Código del Cuadrado
// console.group("Cuadrados")
//Lado del cuadrado
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

//Perimetro del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado()

// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");
//Area del cuadrado
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
  return lado * lado; 
}
// console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");
// console.groupEnd();


//Código del Triangulo
// console.group("Triangulo");
//Lados de triangulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo =5;

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}


// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
// console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
//Perimetro del triangul

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");
//Area del triangulo

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");
// console.groupEnd();

function areaTriangulo(base, altura){
  return (base * altura)/2;
}

//Código del Circulos
// console.group("Circulos");
// //Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + " cms.");
// //Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// // PI
// const PI = Math.PI;
// console.log("PI es " + PI + ".");
// // Perimetro
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
// //Area
// const areaCirculo = PI * (radioCirculo**2);
// console.log("El area del circulo es " + areaCirculo + " cms.");
// console.groupEnd();

function diametroCirculo(radio){
  return radio * 2;
}

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
}

function areaCirculo(radio){
  return (radio * radio) * Math.PI
}

function calcularPerimetroCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}