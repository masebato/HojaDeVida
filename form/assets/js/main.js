window.addEventListener("load", function() {
    numero.addEventListener("keypress", ValidarNumero, false);

});

/**
 * 
 * @param {Number} flag this variable is used for hidden or show the button "next"
 * @param {Number} idBloque this variable is used for generate inputs at block 'Trabajo'
 * @param {Number} id2 this variable is used for generate inputs at block 'Referencias'
 */

var flag = true;
$('#btnBack').click(function() {
    $('#btnBack').css('display', 'none'); // this method is for hiden the btn
   // $('#btnBack').css('display', 'block');
    $('#btnSubmit').css('display', 'none');
    $('#btnNext').css('display', 'block');
    flag = true; // this flag is used for show the button "btnBack"
});

//generate blocks of inputs, for seccion "Referencias"
var idBloque = 1;
$('#AgregarReferencia').click(() => {
    parseInt(idBloque);
    $('#bodyReferencias').append(
        $("<div>", {
            'class': 'contorno'
        }).append(
            $('<div>', {
                'class': 'row'
            }).append(
                $('<div>', {
                    'class': 'col-md-5'
                }).append(
                    $('<div>', {
                        'class': 'form-group'
                    }).append(
                        $('<label>', {
                            'text': 'Nombre Y Apellido'
                        }),
                        $('<input>', {
                            'type': 'text',
                            'class': 'form-control',
                            'id': 'NombreReferencia' + idBloque,
                            'name': 'NombreReferencia' + idBloque
                        })
                    )
                ),
                $('<div>', {
                    'class': 'col-md-4'
                }).append(
                    $('<div>', {
                        'class': 'form-group'
                    }).append(
                        $('<label>', {
                            'text': 'Empresa'
                        }),
                        $('<input>', {
                            'type': 'text',
                            'class': 'form-control',
                            'id': 'EmpresaReferencia' + idBloque,
                            'name': 'EmpresaReferencia' + idBloque
                        })
                    )
                ),
                $('<div>', {
                    'class': 'col-md-3'
                }).append(
                    $('<div>', {
                        'class': 'form-group'
                    }).append(
                        $('<label>', {
                            'text': 'Cargo'
                        }),
                        $('<input>', {
                            'type': 'text',
                            'class': 'form-control',
                            'id': 'CargoReferencia' + idBloque,
                            'name': 'CargoReferencia' + idBloque
                        })
                    )
                )
            ),
            $('<div>', {
                'class': 'row'
            }).append(
                $('<div>', {
                    'class': 'col-md-4'
                }).append(
                    $('<div>', {
                        'class': 'form-group'
                    }).append(
                        $('<label>', {
                            'text': 'Direccion'
                        }),
                        $('<input>', {
                            'type': 'text',
                            'class': 'form-control',
                            'id': 'DireccionReferencia' + idBloque,
                            'name': 'DireccionReferencia' + idBloque
                        })
                    )
                ),
                $('<div>', {
                    'class': 'col-md-3'
                }).append(
                    $('<div>', {
                        'class': 'form-group'
                    }).append(
                        $('<label>', {
                            'text': 'Telefono'
                        }),
                        $('<input>', {
                            'type': 'text',
                            'class': 'form-control',
                            'id': 'TelefonoReferencia' + idBloque,
                            'name': 'TelefonoReferencia' + idBloque
                        })
                    )
                ),
                $('<div>', {
                    'class': 'col-md-4'
                }).append(
                    $('<div>', {
                        'class': 'form-group'
                    }).append(
                        $('<label>', {
                            'text': 'Email'
                        }),
                        $('<input>', {
                            'type': 'email',
                            'class': 'form-control',
                            'id': 'EmailReferencia' + idBloque,
                            'name': 'EmailReferencia' + idBloque
                        })
                    )
                )
            )
        )

    )
    idBloque++;

    if (idBloque >= 4) {
        $('#AgregarReferencia').css('display', 'none');
    }
});

//generate blocks of inputs, for seccion "Laboral"
var id2 = 2;
$('#AgregarTrabajo').click(() => {

    $('#bodyLaboral').append(
        $('<div>', { 'class': 'contorno' }).append(
            $('<div>', { 'class': 'row' }).append(
                $('<div>', { 'class': 'col-md-4' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Empresa o entidad' }),
                        $('<input>', { 'type': 'text', 'class': 'form-control', 'id': 'empresa' + id2, 'name': 'empresa' + id2 })
                    )
                ),

                $('<div>', { 'class': 'col-md-2' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Sector' }),
                        $('<select>', { 'class': 'form-control', 'id': 'sector' + id2, 'name': 'sector' + id2 }).append($('<option>', { 'text': 'Publica' }), $('<option>', { 'text': 'Privada' }))
                    )
                ),

                $('<div>', { 'class': 'col-md-2' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Pais' }),
                        $('<input>', { 'type': 'text', 'class': 'form-control', 'id': 'PaisEmpresa' + id2, 'name': 'PaisEmpresa' + id2 })
                    )
                ),

                $('<div>', { 'class': 'col-md-2' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Departamento' }),
                        $('<input>', { 'type': 'text', 'class': 'form-control', 'id': 'DepartamentoEmpresa' + id2, 'name': 'DepartamentoEmpresa' + id2 })
                    )
                ),


                $('<div>', { 'class': 'col-md-2' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Municipio' }),
                        $('<input>', { 'type': 'text', 'class': 'form-control', 'id': 'MunicipioEmpresa' + id2, 'name': 'MunicipioEmpresa' + id2 })
                    )
                )

            ),

            $('<div>', { 'class': 'row' }).append(
                $('<div>', { 'class': 'col-md-4' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Correo electronico entidad' }),
                        $('<input>', { 'type': 'email', 'class': 'form-control', 'id': 'CorreoElectronicoEntidad' + id2, 'name': 'CorreoElectronicoEntidad' + id2 })
                    )
                ),

                $('<div>', { 'class': 'col-md-4' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Fecha Ingreso' }),
                        $('<input>', { 'type': 'date', 'class': 'form-control', 'id': 'FechaIngreso' + id2, 'name': 'FechaIngreso' + id2 })
                    )
                ),

                $('<div>', { 'class': 'col-md-4' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'fecha Retiro' }),
                        $('<input>', { 'type': 'date', 'class': 'form-control', 'id': 'FechaRetiro' + id2, 'name': 'FechaRetiro' + id2 })
                    )
                )



            ),

            $('<div>', { 'class': 'row' }).append(
                $('<div>', { 'class': 'col-md-4' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Cargo o contrato acual' }),
                        $('<input>', { 'type': 'text', 'class': 'form-control', 'id': 'CargoActualEmpresa' + id2, 'name': 'CargoActualEmpresa' + id2 })
                    )
                ),


                $('<div>', { 'class': 'col-md-4' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Dependencia' }),
                        $('<input>', { 'type': 'text', 'class': 'form-control', 'id': 'DependenciaEmpresa' + id2, 'name': 'DependenciaEmpresa' + id2 })
                    )
                ),

                $('<div>', { 'class': 'col-md-4' }).append(
                    $('<div>', { 'class': 'form-group' }).append(
                        $('<label>', { 'text': 'Direccion' }),
                        $('<input>', { 'type': 'text', 'class': 'form-control', 'id': 'DireccionEmpresa' + id2, 'name': 'DireccionEmpresa' + id2 })
                    )
                )

            )

        )
    )
    id2++;

    if (id2 >= 4) {
        $('#AgregarTrabajo').css('display', 'none');
    }
});



$('#btnNext').click(() => {
    if (flag) {
        $('#myModal').modal("show"); // with this i can show the modal       
        $('#btnBack').css('display', 'block');
        $('#btnNext').css('display', 'none');
        $('#btnSubmit').css('display', 'block');
        flag = false; // this flag is used for show the button "btnBack"
    } else {

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
            var fila = "<td>" + _modalidad.value + "</td><td>" + _semestres + "</td><td>" + _graduado.value + "</td><td>" + _titulo + "</td><td>" + _fechaGrado + "</td><td>" + _tarjeta + "</td><td> <a style='margin-bottom: 3 px; margin-left: 2px;' type='button' class='btn btn-outline-danger' data-toggle='tooltip' data-placement='top' title='Eliminar' onclick='EliminarFila();'><i class='fa fa-eraser'></i></a>"

            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tbodyAcademico").appendChild(btn);
        }
    } else {
        var fila = "<td>" + _modalidad.value + "</td><td>" + _semestres + "</td><td>" + _graduado.value + "</td><td>" + _titulo + "</td><td>" + _fechaGrado + "</td><td>" + _tarjeta + "</td><td> <a style='margin-bottom: 3 px; margin-left: 2px;' type='button' class='btn btn-outline-danger' data-toggle='tooltip' data-placement='top' title='Eliminar' onclick='EliminarFila();'><i class='fa fa-eraser'></i></a>"

        var btn = document.createElement("TR");
        btn.innerHTML = fila;
        document.getElementById("tbodyAcademico").appendChild(btn);
    }

    var fila = "<td>" + _modalidad.value + "</td><td>" + _semestres + "</td><td>" + _graduado.value + "</td><td>" + _titulo + "</td><td>" + _fechaGrado + "</td><td>" + _tarjeta + "</td><a style='margin-left: 2px;' type='button' class='btn btn-danger' data-toggle='tooltip' data-placement='top' title='eliminar' onclick='EliminarFila();'><i class='fa fa-eraser'></i></a>"

}

function EliminarFila() {
    $(document).on('click', '.btn-danger', function(event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });
}

function AgregarDatosIdioma() {
    var _idioma = document.getElementById("Idioma").value;
    var _lee = document.getElementById("lee");
    var _escribe = document.getElementById("escribe");
    var _habla = document.getElementById("habla");

    var fila = "<td>" + _idioma + "</td><td>" + _habla.value + "</td><td>" + _lee.value + "</td><td>" + _escribe.value + "</td>"

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

var namePattern = "^[a-z A-Z]{4,30}$";
var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";

function checkInput(idInput, pattern) {
    return $(idInput).val().match(pattern) ? true : false;
}

function checkRadioBox(nameRadioBox) {
    return $(nameRadioBox).is(":checked") ? true : false;
}

function ValidarNumero(dato) {
    var key = window.event ? dato.which : dato.keyCode;
    if (key < 48 || key > 57) {
        dato.preventDefault();
    }
}

function checkCampos(components) {
    var camposRellenados = true;
    $.each(components, function(i, val) {
        var $this = val;
        if ($($this).val() == "") { // this validate the inputs, that not be empty           
            camposRellenados = false;
            // checkInput(idInput, pattern)
            return false;
        }
    });

    if (camposRellenados == false) {
        return false;
    } else {
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
        $.each(Formato1, function(i, val) {
            
            $(val).css("display", "none");
        });
        $('#myModal').modal('hide');
    }

    if ($id == "Formato2") {
        $.each(Formato2, function(i, val) {
            $(val).css("display", "none");
        });
        $('#myModal').modal('hide');
    }
    if ($id == "Formato3") {
        $.each(Formato3, function(i, val) {
            $(val).css("display", "none");
        });
        $('#myModal').modal('hide');
    }
}


//#region validations for each one of the collapses
$(document).ready(function() {

    $("#DatosPersonalesForm input").keyup(function() {
        var components = ["#PrimerApellido", "#Nombres", "#TipoDocumento", "#numero", "#DireccionResidencia", "#PaisResidencia", "#Departamento",
            "#Municipios", "#CorreoElectronico", "#fechaNacimiento", "#DepartamentoNacimiento", "#MunicipioNacimiento"
        ]; // this is inputs id 
        var check = checkCampos(components);
        if (check) {
            $("#btnNext").prop("disabled", false);
        } else {
            $("#btnNext").prop("disabled", true);
        }
    });

    $("#formacionDiv input").keyup(function() {
        var components = ["#SelectEducacion", "#tituloObtenido", "#Modalidad", "#semestresAprobados", "#SelectGraduado", "#nombretitulo"]; // this is inputs id 
        var check = checkCampos(components);
        if (check) {
            $("#btnAdd").prop("disabled", false);
        } else {
            $("#btnAdd").prop("disabled", true);
        }
    });

    $("#collapseIdioma input").keyup(function() {
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
    loadJSON(function(response) {
        // Parse JSON string into object
        JSONFinal = JSON.parse(response);
        var $select = $('#Departamento');
        //alert(options);
        $.each(JSONFinal, function(id, name) {
            $select.append('<option value=' + name.id + '>' + name.departamento + '</option>');
        });
    });

    $('#Departamento').change(
        function CargarMunicipios() {
            $('#Municipios').empty();
            var $select = $('#Municipios');
            var valor = $('#Departamento').val();
            $.each(JSONFinal, function(id, name) {
                if (name.id == valor) {
                    $.each(name.ciudades, function(id, city) {
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
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

//#endregion

function CatchData() {

    // try {
    //     var config = {};
    //     $('input').each(function () {
    //      config[this.name] = this.value;
    //     });
    //     console.log(config);
    // } catch (error) {
    //     showNotification(center,left);
    //     alert(error);
    // }


    if ($("#DatosPersonalesForm").submit(true)) {

        console.log(this);
        alert("Entra");

    } else {
        alert("sale");
    };

    function processData() {
        alert(data);
    }
}


// cAPTURAR DATOS DEL FORM

function datos() {

    var ar;
    $('#DatosPersonalesForm').submit(false); // cancel the actual submit
    var form = document.getElementById('DatosPersonalesForm');
    ar = form.elements;
    console.log(ar);
    return ar;


};


function valueTablas(){

    var valores = "";
    var valores2 ="";
    // Obtenemos todos los valores contenidos en los <td> de la fila
    // seleccionada
    $('#tbodyIdioma').find("td").each(function() {
      valores += $(this).html() + ",";
    });

    $('#tbodyAcademico').find("td").each(function() {
        valores2 += $(this).html() + ",";
      });
  
    var tablaLaboral = valores3.split(',');
    var tablaIdioma = valores.split(",");


    
    console.log( tablaLaboral + tablaIdioma);
    
}
   

