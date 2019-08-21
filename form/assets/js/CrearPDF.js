//#region Generar PDF


async function crear1() {
    doc = new jsPDF();

    $(function() {
        $('#DatosPersonalesForm').on("submit", function(e) {
            e.preventDefault(); // cancel the actual submit

            var form = document.getElementById('DatosPersonalesForm');
            //var porElementos = document.forms["form1"].elements[0].value;
            for (var i = 0; i < form.elements.length; i++) {
                console.log(form.elements[i].name);
                console.log(form.elements[i].value);
                console.log(i);
            }
        });
    });

    var data = datos();
    var tableidioma = valueTablasIdiomas();
    var tablestudi = valueTablasFormacion();
    console.log(tablestudi[0]);
    console.log(tablestudi[1]);
    console.log(tablestudi[2]);
    console.log(tablestudi[3]);
    console.log(tablestudi[4]);
    console.log(tablestudi[5]);
    console.log(tablestudi[6]);
    console.log(tablestudi[7]);
    var hoja1 = await Hoja1(data, tableidioma, tablestudi);
    var hoja2 = await Hoja2(data);
    var hoja3 = await Hoja3(data);

}

function Hoja1(obj, tabidio2, tabestudio2) {
    var url1 = 'assets/img/0001.jpg';
    var img = new Image();
    $(img).on('load', function() {
        console.log(1);
        doc.addImage(this, 'JPG', -8, 0, 220, 300);
        doc.setFontSize(12);
        doc.setFont("Arial")
        doc.text(15, 72.8, obj[0].value);
        doc.text(74, 72.8, obj[1].value);
        doc.text(135, 72.8, obj[2].value);
        doc.setFontSize(10);
        if (obj[3].value == "C.C") {

            doc.text(22, 82, "X"); //C.C
        }
        if (obj[3].value == "C.E") {

            doc.text(33, 82, "X"); //C.C
        }
        if (obj[3].value == "PAS") {

            doc.text(45, 82, "X"); //C.C
        }

        doc.setFontSize(12);
        doc.text(58, 82.8, obj[4].value);
        doc.setFontSize(10);
        if (obj[5].checked == true) {

            doc.text(106.2, 82, "x"); //F
        }
        if (obj[6].checked == true) {

            doc.text(115, 82, "x"); //M
        }

        if (obj[7].checked == true) {

            doc.text(130.5, 82, "x"); //COL
        }

        if (obj[8].checked == true) {

            doc.text(156.5, 82, "x"); //EXTRA
        }
        doc.setFontSize(12);
        doc.text(163, 82.8, obj[9].value); //PAIS
        doc.setFontSize(10);
        if (obj[19].checked == true) {

            doc.text(44.6, 94, "x"); // libreta militar primera clase
        }
        if (obj[20].checked == true) {

            doc.text(86.3, 94, "x"); // libreta militar primera clase
        }
        doc.setFontSize(12);
        doc.text(114, 94, obj[21].value); //numeor de libreta
        doc.text(171, 94, obj[22].value); //dsitrito militar
        // split para la fehca 
        var fechanaci = obj[15].value;
        var fecha = fechanaci.split("-"); // 

        doc.text(41.2, 108, fecha[2]); //Dia
        doc.text(59, 108, fecha[1]); //Mes
        doc.text(77.4, 108, fecha[0]); //Año
        doc.setFontSize(12);
        doc.text(98, 107.8, obj[10].value); //direccion residencia
        doc.setFontSize(12);
        //fecha de nacimiento ylugar
        doc.text(34, 114.6, obj[16].value); //pais nacimiento
        doc.text(34, 121, obj[17].value); //departamento nacimiento
        doc.text(34, 127.5, obj[18].value); //municipio naciminento
        //direccion de correspondencia
        doc.text(107, 114.6, obj[11].value); //pais residencia
        doc.text(162, 114.6, obj[12].value); //departamento residencia
        doc.text(117, 121, obj[13].value); //municipio residencia
        doc.text(117, 128, "Telefono");
        doc.text(162, 128, obj[14].value); // e-mail

        //educacion basica y media 
        doc.text(130, 167.5, obj[28].value);
        doc.setFontSize(12);
        if (obj[27].value == "1o") {

            doc.text(29, 179, "X"); //primaria 1
        }
        if (obj[27].value == "2o") {

            doc.text(35, 179, "X"); //primaria 2
        }

        if (obj[27].value == "3o") {

            doc.text(41, 179, "X"); //primaria 3
        }

        if (obj[27].value == "4o") {

            doc.text(47, 179, "X"); //primaria 4
        }

        if (obj[27].value == "5o") {

            doc.text(53, 179, "X"); //primaria 5
        }
        if (obj[27].value == "6o") {

            doc.text(59, 179, "X"); //secundaria  6
        }
        if (obj[27].value == "7o") {
            doc.text(65, 179, "X"); //secundaria  7
        }

        if (obj[27].value == "8o") {
            doc.text(71, 179, "X"); //secundaria  8
        }

        if (obj[27].value == "9o") {
            doc.text(77, 179, "X"); //secundaria  9
        }

        if (obj[27].value == "10") {
            doc.text(83, 179, "X"); //secundaria  10
        }

        if (obj[27].value == "11") {
            doc.text(89, 179, "X"); //secundaria  11

        }
        var fechaestu = obj[29].value;
        var fecha2 = fechaestu.split("-"); // 
        doc.text(118, 179, fecha2[1]); //fecha de grado mes
        doc.text(140, 179, fecha2[0]); //fecha de grado año

        // educacion superior - pregrado y postgrado
        var cc = 224;
        var ab0 = 0;
        var ab1 = 1;
        var ab2 = 2;
        var ab3 = 3;
        var ab4 = 4;
        var ab5 = 5;
        var nfilas = $("#tableAcademico >tbody >tr").length;
        for (var i = 0; i < nfilas - 1; i++) {
            doc.setFontSize(10);
            doc.text(14, cc, tabestudio2[ab0]); //modalidad academica
            doc.setFontSize(11);
            doc.text(39, cc, tabestudio2[ab1]); //no semestres aprovados 
            if (tabestudio2[ab2] == "Si") {
                doc.text(57, cc, "X"); //graduado si 

            }
            if (tabestudio2[ab2] == "No") {
                doc.text(66, cc, "X"); //graduado no 

            }


            doc.text(75, cc, tabestudio2[ab3]); // nombre del titulo obtenido  
            var fechaterminacion = tabestudio2[ab4];
            var fecha3 = fechaterminacion.split("-"); // 
            doc.text(145, cc, fecha3[1]); // terminacion mes 
            doc.text(157, cc, fecha3[0]); // terminacion año 
            doc.text(173, cc, tabestudio2[ab5]); // no de tarjeta profesional  

            ab0 += 6;
            ab1 += 6;
            ab2 += 6;
            ab3 += 6;
            ab4 += 6;
            ab5 += 6;
            cc = cc + 6.5;
        }
        //idioma 1
        doc.setFontSize(12);



        var x = 273;
        var x0 = 0;
        var x1 = 1;
        var x2 = 2;
        var x3 = 3;
        var nfilas2 = $("#tableIdioma >tbody >tr").length;
        for (var i = 0; i <= nfilas2 - 1; i++) {
            doc.text(65, x, tabidio2[x0]); // idioma que domina
            if (tabidio2[x1] == "R") {
                doc.text(101, x, "X"); // nivel de idioma
            }
            if (tabidio2[x1] == "B") {
                doc.text(107, x, "X"); // nivel de idioma
            }
            if (tabidio2[x1] == "MB") {
                doc.text(113, x, "X"); // nivel de idioma
            }

            if (tabidio2[x2] == "R") {
                doc.text(119, x, "X"); // nivel de idioma
            }
            if (tabidio2[x2] == "B") {
                doc.text(125, x, "X"); // nivel de idioma
            }
            if (tabidio2[x2] == "MB") {
                doc.text(132, x, "X"); // nivel de idioma
            }

            if (tabidio2[x3] == "R") {
                doc.text(137.5, x, "X"); // nivel de idioma
            }
            if (tabidio2[x3] == "B") {
                doc.text(144.5, x, "X"); // nivel de idioma
            }
            if (tabidio2[x3] == "MB") {
                doc.text(150, x, "X"); // nivel de idioma
            }


            x0 += 4;
            x1 += 4;
            x2 += 4;
            x3 += 4;
            x = x + 7;
        }


        doc.addPage();

    });
    img.crossOrigin = "";
    img.src = url1;
}


async function Hoja2(obj2) {

    var url2 = 'assets/img/0002.jpg';
    var img = new Image();
    $(img).on('load', function() {
        console.log(2);
        doc.addImage(this, 'JPG', -8, 0, 220, 300);
        // ..........Experiencia laboral..........
        doc.setFontSize(12);
        doc.text(15, 90, obj2[44].value); // nombre empresa
        if (obj2[45].value == "Publica") {
            doc.text(115, 90, "X"); // publica
        }
        if (obj2[45].value == "Privada") {
            doc.text(133, 90, "X"); //privada
        }
        doc.text(147, 90, obj2[46].value); //pais
        doc.text(15, 101, obj2[47].value); //departamento
        doc.text(80, 101, obj2[48].value); //municipio
        doc.text(143, 101, obj2[49].value); //correo electreonico
        doc.text(15, 114, "Telefono"); //telefono

        var fechaingreso = obj2[50].value;
        var fecha4 = fechaingreso.split("-"); // 
        doc.text(85.5, 114, fecha4[2]); //fecha ingreso dia
        doc.text(103.5, 114, fecha4[1]); //fecha ingreso mes 
        doc.text(121, 114, fecha4[0]); //fecha ingreso año

        var fecharetiro = obj2[51].value;
        console.log(obj2[51].value);
        var fecha5 = fecharetiro.split("-"); // 
        doc.text(145.5, 114, fecha5[2]); //fecha reito dia
        doc.text(163.5, 114, fecha5[1]); //fecha retiro mes 
        doc.text(181, 114, fecha5[0]); //fecha retiro año
        doc.text(15, 125, obj2[52].value); //cargo o contrato actual 
        doc.text(80, 125, obj2[53].value); //dependencia
        doc.text(139, 125, obj2[54].value); //direccion 
        //.....................................................................
        doc.text(15, 140, obj2[55].value); // nombre empresa
        if (obj2[56].value == "Publica") {
            doc.text(115, 140, "X"); // publica
        }
        if (obj2[56].value == "Privada") {
            doc.text(133, 140, "X"); //privada
        }
        doc.text(147, 140, obj2[57].value); //pais
        doc.text(15, 151, obj2[58].value); //departamento
        doc.text(80, 151, obj2[59].value); //municipio
        doc.text(143, 151, obj2[60].value); //correo electreonico
        doc.text(15, 163.5, "Telefono"); //telefono

        var fechaingreso = obj2[61].value;
        var fecha4 = fechaingreso.split("-"); // 
        doc.text(85.5, 163.5, fecha4[2]); //fecha ingreso dia
        doc.text(103.5, 163.5, fecha4[1]); //fecha ingreso mes 
        doc.text(121, 163.5, fecha4[0]); //fecha ingreso año

        var fecharetiro = obj2[62].value;
        var fecha5 = fecharetiro.split("-"); // 
        doc.text(145.5, 163.5, fecha5[2]); //fecha reito dia
        doc.text(163.5, 163.5, fecha5[1]); //fecha retiro mes 
        doc.text(181, 163.5, fecha5[0]); //fecha retiro año
        doc.text(15, 174, obj2[63].value); //cargo o contrato actual 
        doc.text(80, 174, obj2[64].value); //dependencia
        doc.text(139, 174, obj2[65].value); //direccion 
        //.....................................................................
        doc.text(15, 190, obj2[66].value); // nombre empresa
        if (obj2[67].value == "Publica") {
            doc.text(115, 190, "X"); // publica
        }
        if (obj2[67].value == "Privada") {
            doc.text(133, 190, "X"); //privada
        }
        doc.text(147, 190, obj2[68].value); //pais
        doc.text(15, 201, obj2[69].value); //departamento
        doc.text(80, 201, obj2[70].value); //municipio
        doc.text(143, 201, obj2[71].value); //correo electreonico
        doc.text(15, 213, "Telefono"); //telefono

        var fechaingreso = obj2[72].value;
        var fecha4 = fechaingreso.split("-"); // 
        doc.text(85.5, 213, fecha4[2]); //fecha ingreso dia
        doc.text(103.5, 213, fecha4[1]); //fecha ingreso mes 
        doc.text(121, 213, fecha4[0]); //fecha ingreso año

        var fecharetiro = obj2[73].value;
        var fecha5 = fecharetiro.split("-"); // 
        doc.text(145.5, 213, fecha5[2]); //fecha reito dia
        doc.text(163.5, 213, fecha5[1]); //fecha retiro mes 
        doc.text(181, 213, fecha5[0]); //fecha retiro año
        doc.text(15, 223, obj2[74].value); //cargo o contrato actual 
        doc.text(80, 223, obj2[75].value); //dependencia
        doc.text(139, 223, obj2[76].value); //direccion 

        doc.addPage();

    });
    img.crossOrigin = "";
    img.src = url2;
}
async function Hoja3(obj3) {
    var url3 = 'assets/img/0003.jpg';
    var img = new Image();
    setTimeout(() => {

        $(img).on('load', function() {

            console.log(3);
            doc.addImage(this, 'JPG', -8, 0, 220, 300);
            var totalaños = parseInt(obj3[78].value) + parseInt(obj3[80].value) + parseInt(obj3[82].value);
            var totalmeses = parseInt(obj3[79].value) + parseInt(obj3[81].value) + parseInt(obj3[83].value);
            var añostotal = totalaños.toString();
            var mesestotal = totalmeses.toString();
            // .......... Tiempo total de Experiencia ..........
            doc.text(130, 75, obj3[78].value); // servicios publicos años
            doc.text(153, 75, obj3[79].value); // servicios publicos mes
            doc.text(130, 85, obj3[80].value); //empleado del sector privado años 
            doc.text(153, 85, obj3[81].value); //empleado del sector privado meses
            doc.text(130, 95, obj3[82].value); //trabajador independiente años
            doc.text(153, 95, obj3[83].value); //trabajador independiente meses
            doc.text(130, 105, añostotal); //total timepo experiencia años
            doc.text(153, 105, mesestotal); //total timepo experiencia meses
            // ..........Firma del servicio publico o contratista..........
            doc.addPage();
            //doc.output('datauri');
            doc.save("prueba.pdf");

        });
        img.crossOrigin = "";
        img.src = url3;


    }, 2000);
}