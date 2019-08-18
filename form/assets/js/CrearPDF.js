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
    var hoja1 = await Hoja1(data);
    var hoja2 = await Hoja2();
    var hoja3 = await Hoja3();

}

function Hoja1(obj) {
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
        if (obj[5].value == "Femenino") {

            doc.text(106.2, 82, "x"); //F
        }
        if (obj[5].value == "Femenino") {

            doc.text(115, 82, "x"); //M
        }

        if (obj[6].value == "Colombiano") {

            doc.text(130.5, 82, "x"); //COL
        }

        if (obj[7].value == "Extranjero") {

            doc.text(156.5, 82, "x"); //EXTRA
        }
        doc.setFontSize(12);
        doc.text(163, 82.8, obj[8].value); //PAIS
        doc.setFontSize(10);
        if (obj[19].value == "Primera") {

            doc.text(44.6, 94, "x"); // libreta militar primera clase
        }
        if (obj[20].value == "Segunda") {

            doc.text(86.3, 94, "x"); // libreta militar primera clase
        }
        doc.setFontSize(12);
        doc.text(114, 94, obj[21].value); //numeor de libreta
        doc.text(171, 94, obj[22].value); //dsitrito militar
        doc.text(41.2, 108, "0 7"); //Dia
        doc.text(59, 108, "0 8"); //Mes
        doc.text(77.4, 108, "2 0 1 9"); //Año
        doc.setFontSize(12);
        doc.text(98, 107.8, obj[10].value);
        doc.setFontSize(12);
        //fecha de nacimiento ylugar
        doc.text(34, 114.6, obj[16].value);
        doc.text(34, 121, obj[17].value);
        doc.text(34, 127.5, obj[18].value);
        //direccion de correspondencia
        doc.text(107, 114.6, obj[11].value);
        doc.text(162, 114.6, obj[12].value);
        doc.text(117, 121, obj[13].value);
        doc.text(117, 128, "Telefono");
        doc.text(162, 128, obj[14].value);

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

        doc.text(118, 179, "0 9"); //fecha de grado mes
        doc.text(140, 179, "2 0 1 9"); //fecha de grado año

        // educacion superior - pregrado y postgrado
        var cc = 224;
        for (var i = 0; i <= 4; i++) {
            doc.setFontSize(10);
            doc.text(14, cc, "Modalidad"); //modalidad academica
            doc.setFontSize(11);
            doc.text(39, cc, "VX"); //no semestres aprovados 
            doc.text(57, cc, "X"); //graduado si 
            doc.text(66, cc, "X"); //graduado no 
            doc.text(75, cc, "nombre del titulo"); // nombre del titulo obtenido  
            doc.text(145, cc, "08"); // terminacion mes 
            doc.text(154, cc, "2  0  1  9"); // terminacion año 
            doc.text(173, cc, "tarjeta"); // no de tarjeta profesional  
            cc = cc + 6.5;
        }
        //idioma 1
        doc.setFontSize(12);
        doc.text(50, 273, "Idioma"); // Idioma 
        doc.text(101, 273, "X"); // lo habla R 
        doc.text(107, 273, "X"); // lo habla B 
        doc.text(113, 273, "X"); // lo habla MB
        doc.text(119, 273, "X"); // lo lee R 
        doc.text(125, 273, "X"); // lo lee B 
        doc.text(132, 273, "X"); // lo lee MB
        doc.text(137.5, 273, "X"); // lo escribe R 
        doc.text(144.5, 273, "X"); // lo escribe B 
        doc.text(150, 273, "X"); // lo escribe MB
        // Idioma 2
        doc.text(50, 279, "Idioma"); // Idioma 
        doc.text(101, 279, "X"); // lo habla R 
        doc.text(107, 279, "X"); // lo habla B 
        doc.text(113, 279, "X"); // lo habla MB
        doc.text(119, 279, "X"); // lo lee R 
        doc.text(125, 279, "X"); // lo lee B 
        doc.text(132, 279, "X"); // lo lee MB
        doc.text(137.5, 279, "X"); // lo escribe R 
        doc.text(144.5, 279, "X"); // lo escribe B 
        doc.text(150, 279, "X"); // lo escribe MB

        //feducacion basica y media 
        //doc.text(130, 167.5, "Titulo obtenido");
        //doc.setFontSize(12);
        //doc.text(29, 179, "X"); //primaria 1
        //doc.text(34, 179, "X"); //primaria 2
        //doc.text(39, 179, "X"); //primaria 3
        //doc.text(44, 179, "X"); //primaria 4
        //doc.text(49, 179, "X"); //primaria 4

        doc.addPage();
        //doc.save("prueba.pdf");
        //doc.addPage();
    });
    img.crossOrigin = "";
    img.src = url1;
}


async function Hoja2() {

    var url2 = 'assets/img/0002.jpg';
    var img = new Image();
    $(img).on('load', function() {
        console.log(2);
        doc.addImage(this, 'JPG', -8, 0, 220, 300);
        // ..........Experiencia laboral..........

        var a = 90;
        var b = 101;
        var c = 114;
        var d = 125;
        for (var i = 0; i <= 3; i++) {
            doc.setFontSize(12);
            doc.text(15, a, "Empresa o Entidad");
            doc.text(115, a, "X"); // publica
            doc.text(133, a, "X"); //privada
            doc.text(147, a, "Pais"); //pais
            doc.text(15, b, "Departamento"); //departamento
            doc.text(80, b, "Municipio"); //municipio
            doc.text(143, b, "Correo electreonico"); //correo electreonico
            doc.text(15, c, "Telefono"); //telefono
            doc.text(85.5, c, "1 3"); //fecha ingreso dia
            doc.text(103.5, c, "0 8"); //fecha ingreso mes 
            doc.text(121, c, "2 0 1 9"); //fecha ingreso año
            doc.text(145.5, c, "1 3"); //fecha reito dia
            doc.text(163.5, c, "0 8"); //fecha retiro mes 
            doc.text(181, c, "2 0 1 9"); //fecha retiro año
            doc.text(15, d, "Cargo"); //cargo o contrato actual 
            doc.text(80, d, "Dependencia"); //dependencia
            doc.text(139, d, "Direccion"); //direccion 
            if (i == 2) {
                c = c + 49.5;
            } else { c = c + 49; }
            a = a + 50;
            b = b + 50;

            d = d + 49;
        }

        doc.addPage();
        //doc.save("prueba.pdf");
        //doc.addPage();
    });
    img.crossOrigin = "";
    img.src = url2;
}
async function Hoja3() {
    var url3 = 'assets/img/0003.jpg';
    var img = new Image();
    setTimeout(() => {

        $(img).on('load', function() {

            console.log(3);
            doc.addImage(this, 'JPG', -8, 0, 220, 300);
            // .......... Tiempo total de Experiencia ..........
            doc.text(130, 75, "10"); // servicios publicos años
            doc.text(153, 75, "120"); // servicios publicos mes
            doc.text(130, 85, "10"); //empleado del sector privado años 
            doc.text(153, 85, "120"); //empleado del sector privado meses
            doc.text(130, 95, "10"); //trabajador independiente años
            doc.text(153, 95, "120"); //trabajador independiente meses
            doc.text(130, 105, "10"); //total timepo experiencia años
            doc.text(153, 105, "120"); //total timepo experiencia meses
            // ..........Firma del servicio publico o contratista..........
            doc.addPage();
            //doc.output('datauri');
            doc.save("prueba.pdf");

        });
        img.crossOrigin = "";
        img.src = url3;


    }, 2000);
}