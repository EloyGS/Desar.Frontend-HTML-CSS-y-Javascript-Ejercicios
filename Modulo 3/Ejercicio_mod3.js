//** funciones generales **/
let primer_digito = 0;
let op_binaria = "";
const lista1 = ",.-0123456789";
const lista2 = ".-0123456789"; // lista para validar operaciones


/*const validar = (evt) => {
//devuelve codigo ascii de la tecla pulsada
var code = evt.which ? evt.which : evt.keyCode;
if (code == 8 || code == 44 || code == 45 || code == 46) {
    // backspace, - .,
    return true;
} else if (code >= 48 && code <= 57) {
    // is a number.
    return true;
} else {
    // other keys.
    return false;
}
};*/

const vaciar = () => {
    document.getElementById("pantalla").value = "";
    document.getElementById("info").innerHTML = "Info sobre el número";
};

const validar = (cadena) => { 
    for (i = 0; i < cadena.length; i++) 
        if (op_binaria == "multiplicacion" || op_binaria == "resta" || op_binaria == "suma" ||
            op_binaria == "division " ||  op_binaria == "factorial" || op_binaria == "modulo" ||
            op_binaria == "cuadrado" || op_binaria == "pontecia") {
            if (lista2.indexOf(cadena[i]) == -1) {            
                document.getElementById("pantalla").value = "Error";
                return false;
            }
        } else {
            if (lista1.indexOf(cadena[i]) == -1) {      
            document.getElementById("pantalla").value = "Error";
            return false;
            }
        }
    return true;       
};

const borra = () => {
    let cadena = document.getElementById("pantalla").value;
    cadena = cadena.substring(0, cadena.length - 1);
    document.getElementById("pantalla").value = cadena;
};

const rellenar_info = (numero, operacion, inicial) => {
if (operacion == "cuadrado") {
    if (numero < 100)
    document.getElementById("info").innerHTML =
        "Info: El resultado es menor que 100";
    if (numero > 100 && numero < 200)
    document.getElementById("info").innerHTML =
        "Info: El resultado está entre 100 y 200";
    if (numero > 200)
    document.getElementById("info").innerHTML =
        "Info: El resultado es superior a 200";
}

if (operacion == "modulo") {          
    document.getElementById("info").innerHTML =
        "Info: El resultado de la operación modulo es " +
        numero;
}

if (operacion == "factorial")
    document.getElementById("info").innerHTML =
    "Info: El resultado del factorial de " + inicial + " es " + numero;

if (operacion == "multiplicacion")
    document.getElementById("info").innerHTML =
    "Info: El resultado de multiplicar " +
    inicial +
    " por  " +
    numero +
    " es " +
    document.getElementById("pantalla").value;

if (operacion == "suma")
    document.getElementById("info").innerHTML =
    "Info: El resultado de sumar " +
    inicial +
    " mas  " +
    numero +
    " es " +
    document.getElementById("pantalla").value;

if (operacion == "resta")
    document.getElementById("info").innerHTML =
    "Info: El resultado de restar " +
    inicial +
    " menos  " +
    numero +
    " es " +
    document.getElementById("pantalla").value;

if (operacion == "dividir")
    document.getElementById("info").innerHTML =
    "Info: El resultado de dividir " +
    inicial +
    " entre  " +
    numero +
    " es " +
    document.getElementById("pantalla").value;
    
if (operacion == "potencia")
    document.getElementById("info").innerHTML =
    "Info: el resulto de " +
     inicial  +
    " elevado " +
    " a la " + numero + "ª potencia es " +
    document.getElementById("pantalla").value;

if (operacion == "sumatorio") {
    document.getElementById("info").innerHTML =
    "Info: El resultado sumatorio de la cadena introducida es: " +
    document.getElementById("pantalla").value;
}

if (operacion == "ordenar") {
    document.getElementById("info").innerHTML =
    "Info: El resultado ordenado de la cadena introducida es: " +
    document.getElementById("pantalla").value;
}

if (operacion == "revertir") {
    document.getElementById("info").innerHTML =
    "Info: El resultado de revertir la cadena introducida es: " +
    document.getElementById("pantalla").value;
}
};

const cuadrado = () => {
op_binaria ="cuadrado";
if (validar(document.getElementById("pantalla").value)) {          
    let num = document.getElementById("pantalla");
    num.value = num.value * num.value;
    rellenar_info(num.value, "cuadrado", "");
}
};

const mob = () => {
op_binaria = "modulo";
if (validar(document.getElementById("pantalla").value)) {
    let numero = parseInt(document.getElementById("pantalla").value);
    if (numero < 0) 
        numero = -numero;
    else 
        numero = numero;
    /*
    let numero = parseInt(document.getElementById("pantalla").value);
    if (numero < 0 || numero == -0) { 
    let numero_final = Math.abs(numero);
    document.getElementById("pantalla").value = numero_final;
    rellenar_info(numero_final,"modulo","");            
    } else */
    rellenar_info(numero,"modulo","");
}
};

const fact = () => {
op_binaria = "factorial";
if (validar(document.getElementById("pantalla").value)) {
    let num = document.getElementById("pantalla");          
    let original = num.value;
    for (let i = num.value; i > 1; i--) num.value = num.value * (i - 1);
        rellenar_info(num.value, "factorial", original);
}
};

const mul = () => {
op_binaria = "multiplicacion";
if (validar(document.getElementById("pantalla").value)) 
    if (primer_digito == 0) 
        primer_digito = document.getElementById("pantalla").value;
};

const add = () => {  
op_binaria = "suma";
if (validar(document.getElementById("pantalla").value))
    if (primer_digito == 0) 
        primer_digito = document.getElementById("pantalla").value;
};

const substract = () => {
op_binaria = "resta";
if (validar(document.getElementById("pantalla").value))
    if (primer_digito == 0) 
        primer_digito = document.getElementById("pantalla").value;
};

const division = () => {
op_binaria = "dividir";
if (validar(document.getElementById("pantalla").value)) 
    if (primer_digito == 0)
        primer_digito = document.getElementById("pantalla").value;
};

const potencia = () => { // función potencia
op_binaria = "potencia";
if (validar(document.getElementById("pantalla").value)) 
    if (primer_digito == 0)
        primer_digito = document.getElementById("pantalla").value;
};

const eq = () => {
if (validar(document.getElementById("pantalla").value)){
    let num = document.getElementById("pantalla");
    let segundo_digito = num.value;
    if (op_binaria == "multiplicacion")
    num.value = num.value * primer_digito;
    if (op_binaria == "suma")
    num.value = parseInt(num.value) + parseInt(primer_digito);
    if (op_binaria == "resta") num.value = primer_digito - num.value;
    if (op_binaria == "dividir") num.value = primer_digito / num.value;
    if (op_binaria == "potencia") num.value = Math.pow(primer_digito, num.value);

    rellenar_info(segundo_digito, op_binaria, primer_digito);
    primer_digito = 0;
    op_binaria = "";
}
};

const sumatorio = () => {
op_binaria = "sumatorio";
if (validar(document.getElementById("pantalla").value)) {
    let cadena = document.getElementById("pantalla").value;
    let rango = cadena.split(",");
    let sumado = 0;
    for (i = 0; i < rango.length; i++) sumado = sumado + parseInt(rango[i]);
    document.getElementById("pantalla").value = sumado;
    rellenar_info(0, op_binaria, 0);
}
};

const formatoCSV = (operacionCSV) => {
let cadena = document.getElementById("pantalla").value;
let rango = cadena.split(",");
cadena = "";
if (operacionCSV == "ordenar")
    rango.sort(function (a, b) {
    return a - b;
    });
if (operacionCSV == "revertir") rango.reverse();
if (operacionCSV == "ordenar" || operacionCSV == "revertir") {
    for (i = 0; i < rango.length; i++) cadena = cadena + rango[i] + ",";
} else {
    for (i = 0; i < rango.length - 1; i++)
    cadena = cadena + rango[i] + ",";
}
document.getElementById("pantalla").value = cadena.substring(
    0,
    cadena.length - 1
);
if (operacionCSV == "ordenar") rellenar_info(0, "ordenar", 0);
if (operacionCSV == "revertir") rellenar_info(0, "revertir", 0);
if (operacionCSV == "quitar") rellenar_info(0, "quitar", 0);
};

const ordenar = () => {
op_binaria = "ordenar";
if (validar(document.getElementById("pantalla").value))
    formatoCSV(op_binaria);
};

const revertir = () => {
op_binaria = "revertir";
if (validar(document.getElementById("pantalla").value))
    formatoCSV(op_binaria);
};

const quitar = () => {
op_binaria = "quitar"
if (validar(document.getElementById("pantalla").value))
    formatoCSV(op_binaria);
};