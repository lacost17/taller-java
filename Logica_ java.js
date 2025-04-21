// Funciones

function esBisiesto(ano) 
{
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) 
    {
    return true;
    } else 
    {
    return false;
  }
}

function celsiusAFahrenheit(celsius) 
{
  return (celsius * 9 / 5) + 32;
}

function mayorDeDos(n1, n2) 
{
  if (n1 > n2) 
    {
    return n1;
    } else 
    {
    return n2;
  }
}

function convertirMinutos(minutos) 
{
  let horas = Math.floor(minutos / 60);
  let mins = minutos % 60;
  return horas + " horas y " + mins + " minutos";
}

function estaEnRango(numero, inicio, fin) 
{
  if (numero >= inicio && numero <= fin) 
    {
    return true;
    } else
    {
    return false;
  }
}

function calcularPrecioFinal(precioInicial, descuento) 
{
  let rebaja = precioInicial * (descuento / 100);
  let total = precioInicial - rebaja;
  return total;
}

function puedeVotar(edad) 
{
  if (edad >= 18) 
    {
    return true;
    } else 
    {
    return false;
  }
}

function calcularAreaTriangulo(base, altura) 
{
  return (base * altura) / 2;
}

// Funciones de prueba con validaciones
function probarBisiesto() 
{
  let ano = parseInt(document.getElementById('ano').value);
  let resultado = esBisiesto(ano);
  document.getElementById('res1').textContent = resultado ? "Sí es bisiesto" : "No es bisiesto";
  console.log("Año:", ano, "-", resultado);
}

function probarCelsius() 
{
  let c = parseFloat(document.getElementById('celsius').value);
  let f = celsiusAFahrenheit(c);
  document.getElementById('res2').textContent = f + " °F";
  console.log(c + " °C = " + f + " °F");
}

function probarMayor() 
{
  let n1 = parseFloat(document.getElementById('n1').value);
  let n2 = parseFloat(document.getElementById('n2').value);
  if (n1 === n2) 
    {
    document.getElementById('res3').textContent = "Ingrese nuevamente los números (son iguales)";
    console.log("Error: los números son iguales");
    } else 
    {
    let mayor = mayorDeDos(n1, n2);
    document.getElementById('res3').textContent = "Mayor: " + mayor;
    console.log("Mayor entre", n1, "y", n2, "es", mayor);
  }
}

function probarMinutos() 
{
  let min = parseInt(document.getElementById('minutos').value);
  let resultado = convertirMinutos(min);
  document.getElementById('res4').textContent = resultado;
  console.log(min + " minutos =", resultado);
}

function probarRango() 
{
  let num = parseFloat(document.getElementById('numero').value);
  let ini = parseFloat(document.getElementById('inicio').value);
  let fin = parseFloat(document.getElementById('fin').value);
  let resultado = estaEnRango(num, ini, fin);
  document.getElementById('res5').textContent = resultado ? "Está en el rango" : "Fuera del rango";
  console.log("¿", num, "en [", ini, "-", fin, "]? ", resultado);
}

function probarDescuento() 
{
  let precio = parseFloat(document.getElementById('precioInicial').value);
  let desc = parseFloat(document.getElementById('descuento').value);
  let final = calcularPrecioFinal(precio, desc);
  document.getElementById('res6').textContent = "Precio final: $" + final.toFixed(2);
  console.log("Precio final con descuento:", final);
}

function probarVotar() 
{
  let edad = parseInt(document.getElementById('edad').value);
  if (edad >= 100) 
    {
    document.getElementById('res7').textContent = "No puede votar";
    console.log("Edad inválida:", edad);
    } else 
    {
    let resultado = puedeVotar(edad);
    document.getElementById('res7').textContent = resultado ? "Puede votar" : "No puede votar";
    console.log("Edad:", edad, "-", resultado);
  }
}

function probarArea() 
{
  let base = parseFloat(document.getElementById('base').value);
  let altura = parseFloat(document.getElementById('altura').value);
  let area = calcularAreaTriangulo(base, altura);
  document.getElementById('res8').textContent = "Área: " + area;
  console.log("Área:", area);
}

// Funciones para borrar resultados y limpiar campos
function borrar1() 
{
  // Borrar resultado y limpiar campo 
  document.getElementById('res1').textContent = "";
  document.getElementById('ano').value = "";
}
function borrar2() 
{
  // Borrar resultado y limpiar campo 
  document.getElementById('res2').textContent = "";
  document.getElementById('celsius').value = "";
}
function borrar3() 
{
  // Borrar resultado y limpiar campos 
  document.getElementById('res3').textContent = "";
  document.getElementById('n1').value = "";
  document.getElementById('n2').value = "";
}
function borrar4()
{
  // Borrar resultado y limpiar campo 
  document.getElementById('res4').textContent = "";
  document.getElementById('minutos').value = "";
}
function borrar5()
{
  // Borrar resultado y limpiar campos 
  document.getElementById('res5').textContent = "";
  document.getElementById('numero').value = "";
  document.getElementById('inicio').value = "";
  document.getElementById('fin').value = "";
}
function borrar6()
{
  // Borrar resultado y limpiar campos 
  document.getElementById('res6').textContent = "";
  document.getElementById('precioInicial').value = "";
  document.getElementById('descuento').value = "";
}
function borrar7()
{
  // Borrar resultado y limpiar campo
  document.getElementById('res7').textContent = "";
  document.getElementById('edad').value = "";
}
function borrar8()
{
  // Borrar resultado y limpiar campos 
  document.getElementById('res8').textContent = "";
  document.getElementById('base').value = "";
  document.getElementById('altura').value = "";
}
