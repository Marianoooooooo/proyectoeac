// Esta funcion obtiene los valores de entrada en el documento: celular, direccion, escuela, año y titulo, año, y titulo.
// Se realizan tres validaciones, la de celular verifica si el numero es valido utilizando la funcion validarCelular.
// La segunda funcion verifica si el campo escuela es valido usando la funcion validarTexto
//La ultima funcion verifica si el año es valido usando la funcion validarFecha

function agregarDatos() {
    const celular = document.getElementById('celularInput').value;
    const direccion = document.getElementById('direccionInput').value;
    const escuela = document.getElementById('escuelaInput').value;
    const año = document.getElementById('añoInput').value;
    const titulo = document.getElementById('tituloInput').value;

    if (!validarCelular(celular) || !validarTexto(escuela) || !validarfecha(año)) {
        return;
    }

    if (celular === '' || direccion === '' || escuela === '' || año === '' || titulo === '') {
        alert('Ingrese todos los datos');
        return;
    }

    const tablaBody = document.getElementById('dataTableBody');
    const newRow = tablaBody.insertRow();

    newRow.insertCell().appendChild(document.createTextNode(celular));
    newRow.insertCell().appendChild(document.createTextNode(direccion));
    newRow.insertCell().appendChild(document.createTextNode(escuela));
    newRow.insertCell().appendChild(document.createTextNode(año));
    newRow.insertCell().appendChild(document.createTextNode(titulo));
}

function validarCelular(celular) {
    const celularRegex = /^\d+$/;
    if (!celularRegex.test(celular)) {
        alert('Ingrese un número de celular válido');
        return false;
    }
    return true;
}

function validarTexto(texto) {
    const textoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!textoRegex.test(texto)) {
        alert('Ingrese un texto válido');
        return false;
    }
    return true;
}


//En términos más generales, esta porción de código asegura que fechaIngresada tenga un valor que no sea falso. 
//Si no tiene un valor válido (es decir, es falso), la función mostrará una alerta indicando al usuario que debe
// seleccionar una fecha y luego retornará false.
function validarfecha() {
    const fechaInput = document.getElementById('añoInput');
    const fechaIngresada = fechaInput.value;

    if (!fechaIngresada) {
        alert('Seleccione una fecha');
        return false;
    }

    return true;
}