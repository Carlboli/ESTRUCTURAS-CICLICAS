//for - while - doWhile¿?
//paso 1 -> inicio
// let x = 1;
//paso 2 -> fin ciclo
// while (x <= 10) {
//instruccion que se repita
//   document.write(x + "<br>");

//   x = x + 1;
// }

// let y = 10;

// while (y >= 1) {
//   document.write(y + "<br>");

//   y = y - 1;
// }

// for (let x = 10; x >= 1; x = x-1) {
//   document.write(x + "<br>");
// }

/*
//SECUENCIA DE FIBONACCI
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
let n = 20;
document.write(fibonacci(n))
*/

// let inicio = Number(prompt("digite el inicio del ciclo"));
// let fin = Number(prompt("digite el fin del ciclo"));
// let intervalos = Number(prompt("digite intervalos del ciclo"));
// if (inicio < fin) {
//   for (inicio; inicio <= fin; inicio += intervalos) {
//     document.write(inicio + "<br>");
//   }
// } else {
//   for (inicio; inicio >= fin; inicio += intervalos) {
//     document.write(inicio + "<br>");
//   }
// }

// let totalNumeros = Number(prompt("¿Cuantos numeros desea registrar?"));
// let suma = 0;
// let contar = 0;

// for (let x = 1; x <= totalNumeros; x++) {
//   let numeros = Number(prompt("Digite el numero a registrar"));
//   document.write(numeros + " - ");
//   contar++;
//   suma += numeros;
// }
// document.write("total numeros digitados : " + contar + "<br>");
// document.write("suma de los numros digitados: "+suma)

// let temporadas = Number(prompt("digite el numero de temporadas de la serie"));

// for (let x = 1; x <= temporadas; x++) {
//   document.write("Temporada : " + x + "<br>");
//   let capitulos = Number(prompt("digite el numero de capitulos de la temporada " + x));
//   for (let y = 1; y <= capitulos; y++) {
//     document.write("Capitulos : " + y + "<br>");
//   }
//   document.write("--------------fin de temporada " + x + "---------------<br>");
// }

//puntos 8 y 9 del taller
// let altura = Number(prompt("Digite la altura de la escalera"));

// for (let x = 1; x <= altura; x++) {
//   for (let y = 1; y <= x; y++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
// for (let w = 1; w <= altura; w++) {
//   for (v = altura; v >= w; v--) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

//punto 10 del taller

// let clientes = prompt("¿Deseas realizar alguna compra? si/no");
// let x = 1;
// let totalClientes = 0;
// let totalVentaDia = 0;
// while (clientes == "si") {
//   document.write("Cliente #" + x + "<br>");
//   let productos = Number(prompt("Digite productos a comprar"));
//   let totalCompra = 0;
//   for (let y = 1; y <= productos; y++) {
//     let precio = Number(prompt("Digite el precio del producto #" + y));
//     document.write("producto #" + y + " : " + precio + "<br>");
//     totalCompra += precio;
//   }
//   document.write("--------------<br>");
//   totalVentaDia += totalCompra;
//   totalClientes++;
//   document.write("total compra : " + totalCompra + "<br>");
//   x++;
//   clientes = prompt("¿Deseas realizar una compra? si/no");
// }
// document.write("----------------------<br>");
// document.write("valor de ventas dia : " + totalVentaDia + "<br>");
// document.write("numero de clientes " + totalClientes + "<br>");
