
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function AgregarDatosTable() {
    var _modalidad = document.getElementById("Modalidad");
    var _semestres = document.getElementById("semestresAprobados").value;
    var _graduado = document.getElementById("SelectGraduado");
    var _titulo = document.getElementById("nombretitulo").value;
    var _fechaGrado = document.getElementById("FechaTerminacion").value;
    var _tarjeta = document.getElementById("tarjetaProf").value;

    var fila = "<tr><td>" + _modalidad.value + "</td><td>" + _semestres + "</td><td>" + _graduado.value + "</td><td>" + _titulo + "</td><td>" + _fechaGrado + "</td><td>" + _tarjeta + "</td></tr>"

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tbodyAcademico").appendChild(btn);

}

function AgregarDatosIdioma() {
    var _idioma = document.getElementById("Idioma").value;
    var _lee = document.getElementById("lee");
    var _escribe = document.getElementById("escribe");
    var _habla = document.getElementById("habla");

    var fila = "<tr><td>" + _idioma + "</td><td>" + _habla.value + "</td><td>" + _lee.value + "</td><td>" + _escribe.value + "</td></tr>"

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tbodyIdioma").appendChild(btn);
}


window.addEventListener("load", function () {
    //documento.addEventListener("keypress", ValidarNumero, false);
    //telefono.addEventListener("keypress", ValidarNumero, false);
});

function ObtenerFecha() {
    var n, y, m, d;
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    return d + "/" + m + "/" + y;
}

function ValidarFecha(dato) {
    var fecha_hoy = new Date();
    var fecha_selec = new Date(dato.value);
    
    if (fecha_selec.getFullYear() > (fecha_hoy.getFullYear() - 18)) {
        document.getElementById("" + dato.id).style.borderColor = "#dd4b39";
        
    } else {
        document.getElementById("" + dato.id).style.borderColor = "#d2d6de";
    }
}

function validarEmail(dato) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(dato.value)) {
        document.getElementById('correo').style.borderColor = "#d2d6de";
    } else {
        document.getElementById('correo').style.borderColor = "#dd4b39";
    }
}

function ValidarTexto(dato) {
    if (dato.value == "") {
        document.getElementById("" + dato.id).style.borderColor = "#dd4b39";
    } else {
        document.getElementById("" + dato.id).style.borderColor = "#d2d6de";
    }
}
function ValidarNumero(dato) {

    var key = window.event ? dato.which : dato.keyCode;
    if (key < 48 || key > 57) {
        dato.preventDefault();
    }
}
function ValidarSelector(dato) {
    if (dato.value == "Seleccionar" || dato.value == "") {
        document.getElementById("" + dato.id).style.borderColor = "#dd4b39";
    } else {
        document.getElementById("" + dato.id).style.borderColor = "#d2d6de";
    }
}

