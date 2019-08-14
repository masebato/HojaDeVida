window.addEventListener("load", function () {
    numero.addEventListener("keypress", ValidarNumero, false);

});

/**
    * 
    * @param {Number} flag this variable is used for hidden or show the button "next"
    */

var flag = true;
$('#btnBack').click(function () {
    $('#btnBack').css('display', 'none'); // this method is for hiden the btn
    flag = true;// this flag is used for show the button "btnBack"
});


$('#btnNext').click(() => {
    if (flag) {
        $('#DatosPersonalesForm').submit(false);
       
        $('#myModal').modal("show");// with this i can show the modal       
        $('#btnBack').css('display', 'block');
        flag = false; // this flag is used for show the button "btnBack"
    }
});

//#region make Collapse 
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



//#endregion

//#region functions for operations with tables
function AgregarDatosTable() {
    var _modalidad = document.getElementById("Modalidad");
    var _semestres = document.getElementById("semestresAprobados").value;
    var _graduado = document.getElementById("SelectGraduado");
    var _titulo = document.getElementById("nombretitulo").value;
    var _fechaGrado = document.getElementById("FechaTerminacion").value;
    var _tarjeta = document.getElementById("tarjetaProf").value;
    var tabla = document.getElementById('tableAcademico');
    var mod;
    var verificar = false;
    var nColumnas = $("#tableAcademico >tbody >tr").length;
    if (nColumnas > 0) {
        for (var i = 1; i < nColumnas; i++) {
            mod = tabla.rows[i].cells[1].innerText;
            console.log("YD " + mod);
            if (mod == _modalidad.value) {
                verificar = true;
            }
        }
        if (!verificar) {
            var fila = "<tr><td>" + _modalidad.value + "</td><td>" + _semestres + "</td><td>" + _graduado.value + "</td><td>" + _titulo + "</td><td>" + _fechaGrado + "</td><td>" + _tarjeta + "</td><td> <a style='margin-bottom: 3 px; margin-left: 2px;' type='button' class='btn btn-outline-danger' data-toggle='tooltip' data-placement='top' title='Eliminar' onclick='EliminarFila();'><i class='fa fa-eraser'></i></a></tr>"

            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tbodyAcademico").appendChild(btn);
        }
    } else {
        var fila = "<tr><td>" + _modalidad.value + "</td><td>" + _semestres + "</td><td>" + _graduado.value + "</td><td>" + _titulo + "</td><td>" + _fechaGrado + "</td><td>" + _tarjeta + "</td><td> <a style='margin-bottom: 3 px; margin-left: 2px;' type='button' class='btn btn-outline-danger' data-toggle='tooltip' data-placement='top' title='Eliminar' onclick='EliminarFila();'><i class='fa fa-eraser'></i></a></tr>"

        var btn = document.createElement("TR");
        btn.innerHTML = fila;
        document.getElementById("tbodyAcademico").appendChild(btn);
    }

    var fila = "<tr><td>" + _modalidad.value + "</td><td>" + _semestres + "</td><td>" + _graduado.value + "</td><td>" + _titulo + "</td><td>" + _fechaGrado + "</td><td>" + _tarjeta + "</td><a style='margin-left: 2px;' type='button' class='btn btn-danger' data-toggle='tooltip' data-placement='top' title='eliminar' onclick='EliminarFila();'><i class='fa fa-eraser'></i></a></tr>"

}

function EliminarFila() {
    $(document).on('click', '.btn-danger', function (event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });
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
    $('#Idioma').val("");
}

//#endregion

//window.addEventListener("load", function () {
//  documento.addEventListener("keypress", ValidarNumero, false);
//telefono.addEventListener("keypress", ValidarNumero, false);
//});

//#region validations
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
        //document.getElementById("" + dato.id).style.borderColor = "#d2d6de";
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
function validarRadio(dato) {
    if (dato.value != 'checked') {
        document.getElementById("" + dato.id).style.borderColor = "#d2d6de";
    }
    else {

    }
}
function checkCampos(components) {
    var camposRellenados = true;
    $.each(components, function (i, val) {
        var $this = val;
        if ($($this).val().length <= 0 || $($this).val() == "") { // this validate the inputs, that not be empty
            camposRellenados = false;
            return false;
        }
    });
    if (camposRellenados == false) {
        return false;
    }
    else {
        return true;
    }
}


// with this method we can filtrer the blocks of collapses
function FiltrerCollapse(obj) {
    openCity(event, 'FormacionAcademica'); // Method for view the new page of blocks
    var Formato1 = ["#PerfilDIV", "#ReferenciasDIV"];
    var Formato2 = ["#TiempoDIV"]
    var Formato3 = ["#TiempoDIV"];
    var $id = obj.id;
    if ($id == "Formato1") {
        $.each(Formato1, function (i, val) {
            $(val).css("display", "none");
        });
        $('#myModal').modal('hide');
    }

    if ($id == "Formato2") {
        $.each(Formato2, function (i, val) {
            $(val).css("display", "none");
        });
        $('#myModal').modal('hide');
    }
    if ($id == "Formato3") {
        $.each(Formato3, function (i, val) {
            $(val).css("display", "none");
        });
        $('#myModal').modal('hide');
    }
}


//#region validations for each one of the collapses
$(document).ready(function () {

    $("#DatosPersonalesForm input").keyup(function () {
        var components = ["#PrimerApellido", "#Nombres", "#TipoDocumento", "#numero", "#DireccionResidencia", "#PaisResidencia", "#Departamento",
            "#Municipios", "#CorreoElectronico", "#fechaNacimiento", "#DepartamentoNacimiento", "#MunicipioNacimiento"]; // this is inputs id 
        var check = checkCampos(components);
        if (check) {
            $("#btnNext").prop("disabled", false);
        }
        else {
            //   $("#btnNext").prop("disabled", true); 
        }
    });

    $("#formacionDiv input").keyup(function () {
        var components = ["#SelectEducacion", "#tituloObtenido", "#Modalidad", "#semestresAprobados", "#SelectGraduado", "#nombretitulo"]; // this is inputs id 
        var check = checkCampos(components);
        if (check) {
            $("#btnAdd").prop("disabled", false);
        }
        else {
            $("#btnAdd").prop("disabled", true);
        }
    });

    $("#collapseIdioma input").keyup(function () {
        var components = ["#Idioma", "#habla", "#lee", "#escribe"]; // this is inputs id 
        var check = checkCampos(components);
        var nfilas = $("#tbodyIdioma tr").length;       
        if (nfilas <= 1) {
            if (check) {
                $("#AddIdioma").prop("disabled", false);               
            } else {
                $("#AddIdioma").prop("disabled", true);
            }
        } else {
            $("#AddIdioma").prop("disabled", true);
        }
     
    });

    // this methos is a sum for the block of "Experience " 
    $("#TiempoDIV input").keyup(() => {
        var $AñosSP = $('#AñosSP').val();
        var $MesesSP = $('#MesesSP').val();
        var $AñosESP = $('#AñoESP').val();
        var $MesesESP = $('#MesESP').val();
        var $AñoTI = $('#AñoTI').val();
        var $MesTI = $('#MesTI').val();
        var TotalAños;
        var TotalMeses;
        TotalAños = parseInt($AñosSP) + parseInt($AñosESP) + parseInt($AñoTI);
        TotalMeses = parseInt($MesTI) + parseInt($MesesESP) + parseInt($MesesSP);
        while (TotalMeses >= 12) {
            TotalMeses = parseInt(TotalMeses) - 12;
            TotalAños++;
        }       
        if (!isNaN(TotalAños) && !isNaN(TotalMeses)) {
            $('#totalAÑOS').text(TotalAños);
            $('#totalMESES').text(TotalMeses);
        } else {
            $('#totalAÑOS').text("");
            $('#totalMESES').text("");
        }
    });
});

//#endregion

//#region  notificaciones 

function showNotification(from, align) {
    color = 'danger';

    $.notify({
        icon: "nc-icon nc-bell-55",
        message: "Por favor llene los campos requeridos para poder avanzar."

    }, {
            type: color,
            timer: 8000,
            placement: {
                from: from,
                align: align
            }
        });
}
//#endregion


//#endregion

//#region load Departamentos  and municipios 
var JSONFinal;
$(document).ready(function init() {
    loadJSON(function (response) {
        // Parse JSON string into object
        JSONFinal = JSON.parse(response);
        var $select = $('#Departamento');
        //alert(options);
        $.each(JSONFinal, function (id, name) {
            $select.append('<option value=' + name.id + '>' + name.departamento + '</option>');
        });
    });

    $('#Departamento').change(
        function CargarMunicipios() {
            $('#Municipios').empty();
            var $select = $('#Municipios');
            var valor = $('#Departamento').val();
            $.each(JSONFinal, function (id, name) {
                if (name.id == valor) {
                    $.each(name.ciudades, function (id, city) {
                        $select.append('<option >' + city + '</option>');
                    })
                }
            });
        }
    );
});

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'assets/js/colombia.json', true); // Reemplaza colombia-json.json con el nombre que le hayas puesto
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

//#endregion















