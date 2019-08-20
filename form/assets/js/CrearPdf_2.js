//#region Generar PDF2
var doc;
async function crearHoja2() {
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
    var data2 = datos();
    await Hoja1(data2);
    await Hoja2(data2);

}

async function Hoja1(obj) {
    var url1 = 'assets/img/formato2.jpg';
    var img = new Image();

    $(img).on('load', function() {
        console.log(1);
        doc.addImage(this, 'JPG', -2, 0, 212, 300);
        //...........datos personales .............
        doc.setFontSize(12);
        doc.setFont("Arial");
        doc.text(47, 39.5, obj[2].value + " " + obj[0].value + " " + obj[1].value); //nombre y apellidos
        doc.text(40, 45, obj[4].value); // numero de documento de identidad
        doc.text(74, 49.5, obj[15].value); // fecha de nacimiento
        doc.text(49, 54.5, "321 2586973"); // telefono
        doc.text(50, 59, obj[10].value); // direccion
        doc.text(74, 64, obj[13].value + "-" + obj[12].value); // ciudad de residencia
        if (obj[7].checked == true) {
            doc.text(57, 69, "Colombiano"); // nacionalidad
        } else {
            doc.text(57, 69, obj[9].value); // nacionalidad}
        }
        doc.text(45, 74, obj[14].value); // email
        doc.text(59, 79, obj[21].value); // numero libreta militar
        doc.text(59, 84, obj[22].value); //dsitrito militar
        // ............perfil..........

        doc.text(28, 104, obj[25].value); // descripcion del perfil
        //..............estudios.............
        var a = 190;
        var b = 195;
        doc.setFont("Arial");
        var fechaestuio = obj[15].value;
        var fecha1 = fechaestuio.split("-"); // 
        for (var i = 0; i <= 3; i++) {
            doc.setFontSize(11);
            doc.text(39, a, fecha1[0]); //año de estudio
            if (obj[32].value == "SI") {
                doc.text(58, b, "Graduado"); //total del ciclos
            } else {
                doc.text(58, b, obj[31].value); //total del ciclos   
            }

            doc.text(104, a, obj[33].value); // titulo obtenido
            if (obj[30].value == "TC") {
                doc.text(121, b, "Tecnica"); //Modalidad
            }
            if (obj[30].value == "TL") {
                doc.text(121, b, "Tecnológia "); //Modalidad
            }
            if (obj[30].value == "TE") {
                doc.text(121, b, "Tecnológia especializada"); //Modalidad
            }
            if (obj[30].value == "UN") {
                doc.text(121, b, "Universitaria"); //Modalidad
            }
            if (obj[30].value == "ES") {
                doc.text(121, b, "Especializacióna"); //Modalidad
            }
            if (obj[30].value == "MG") {
                doc.text(121, b, "Maestria o magiste"); //Modalidad
            }
            if (obj[30].value == "DOC") {
                doc.text(121, b, "Doctorado o PHD"); //Modalidad
            }

            a = a + 18;
            b = b + 18;
        }

        //..........Idioma....................
        var x = 155;
        for (var i = 0; i <= 2; i++) {
            doc.text(28, x, obj[38].value); // idioma que domina
            if (obj[39].value == "R") {
                doc.text(52, x, "Regular"); // nivel de idioma
            }
            if (obj[39].value == "B") {
                doc.text(52, x, "Bien"); // nivel de idioma
            }
            if (obj[39].value == "MB") {
                doc.text(52, x, "Bien"); // nivel de idioma
            }

            if (obj[40].value == "R") {
                doc.text(76, x, "Regular"); // nivel de idioma
            }
            if (obj[40].value == "B") {
                doc.text(76, x, "Bien"); // nivel de idioma
            }
            if (obj[40].value == "MB") {
                doc.text(76, x, "Muy bien"); // nivel de idioma
            }


            if (obj[41].value == "R") {
                doc.text(98, x, "Regular"); // nivel de idioma
            }
            if (obj[41].value == "B") {
                doc.text(98, x, "Bien"); // nivel de idioma
            }
            if (obj[41].value == "MB") {
                doc.text(98, x, "Muy bien"); // nivel de idioma
            }


            x = x + 7;
        }

        //........ label datos personales............
        doc.setFont("Arial", "bold");
        doc.setFontSize(12);
        doc.text(28, 45, obj[3].value + ":"); // tipo documento
        if (obj[21].value != "") {
            doc.text(28, 79, "Libreta militar:"); // edad
            doc.text(28, 84, "Distrito militar:"); // edad

        }



        //........ label de estudios............
        var aa = 190;
        var bb = 195;
        for (var i = 0; i <= 3; i++) {
            doc.setFontSize(11);
            doc.text(28, aa, "Año:"); //año de estudio
            doc.text(28, bb, "No° semestres:"); //año de estudio
            doc.text(90, aa, "Titulo:"); //año de estudio
            doc.text(90, bb, "Tipo formacion:"); //año de estudio
            aa = aa + 18;
            bb = bb + 18;
        }

        //.....label de Idioma..........
        doc.setFont("Arial", "bold");
        doc.text(28, 149, "Idioma"); //idioma label
        doc.text(52, 149, "Lo habla"); //idioma lo habla label
        doc.text(76, 149, "Lo lee"); //idioma lo lee label
        doc.text(98, 149, "Lo escribe"); //idioma lo escribe label
        doc.addPage();


    });
    img.crossOrigin = "";
    img.src = url1;
}


async function Hoja2(obj2) {

    var url2 = 'assets/img/formato21.jpg';
    var img = new Image();
    setTimeout(() => {
        $(img).on('load', function() {
            console.log(2);
            doc.addImage(this, 'JPG', -2, 0, 212, 300);

            //..............experiencia laboral.............
            var av = 40;
            var b = 45;
            var c = 50;
            var d = 55;
            var e = 60;

            for (var i = 0; i <= 2; i++) {
                doc.setFont("Arial");
                doc.setFontSize(11);
                doc.text(48, av, obj2[44].value); //nombre emrpesa
                doc.text(44, b, "De " + obj2[50].value + " a " + obj2[51].value); //año de estudio
                doc.text(123, b, obj2[48].value + "-" + obj2[47].value); // ciudad empresa
                doc.text(44.5, c, obj2[45].value); // sector
                doc.text(43, d, obj2[52].value); //cargo
                doc.text(55, e, obj2[49].value); //e-mail
                av = av + 35;
                b = b + 35;
                c = c + 35;
                d = d + 35;
                e = e + 35;
            }
            //..............referencias laboral .........
            var ax = 153;
            var az = 158;
            var bx = 163;
            var cx = 168;
            var dx = 173;
            var ex = 178;
            for (var i = 0; i <= 2; i++) {
                doc.text(48, ax, obj2[75].value); //nombre de la persona d ela refeencia laboral 
                doc.text(48, az, obj2[76].value); //nombre de la empresa
                doc.text(43, bx, obj2[77].value); // cargo
                doc.text(50, cx, obj2[78].value); // direccion
                doc.text(48, dx, obj2[79].value); //telefono
                doc.text(58, ex, obj2[80].value); //e-amil entidad
                ax = ax + 35;
                az = az + 35;
                bx = bx + 35;
                cx = cx + 35;
                dx = dx + 35;
                ex = ex + 35;
            }
            //........firma........

            doc.text(28, 274, obj2[2].value + " " + obj2[0].value + " " + obj2[1].value); //nombre y apellidos
            doc.text(36, 278, obj2[4].value); // numero de documento de identidad
            doc.text(28, 278, obj2[3].value + ":"); // tipo documento


            //..........label de experiencia laboral......
            var ax = 40;
            var bx = 45;
            var cx = 50;
            var dx = 55;
            var ex = 60;
            for (var i = 0; i <= 2; i++) {
                doc.setFont("Arial", 'bold');
                doc.text(28, ax, "Empresa : "); //nombre empresa
                doc.text(28, bx, "Fecha :"); //fecha de labor
                doc.text(106, bx, "Ciudad :"); // ciudad de la empresa
                doc.text(28, cx, "Sector  :"); // sector
                doc.text(28, dx, "Cargo :"); //cargo
                doc.text(28, ex, "E-mail entidad :"); //e-amil entidad
                ax = ax + 35;
                bx = bx + 35;
                cx = cx + 35;
                dx = dx + 35;
                ex = ex + 35;
            }
            //..........label referencia laboral......
            var ax = 153;
            var az = 158;
            var bx = 163;
            var cx = 168;
            var dx = 173;
            var ex = 178;
            for (var i = 0; i <= 2; i++) {
                doc.text(28, ax, "Nombre : "); //nombre empresa
                doc.text(28, az, "Empresa :"); //fecha de labor
                doc.text(28, bx, "Cargo :"); // ciudad de la empresa
                doc.text(28, cx, "Direccion :"); // sector
                doc.text(28, dx, "Telefono :"); //cargo
                doc.text(28, ex, "E-mail entidad :"); //e-amil entidad
                ax = ax + 35;
                az = az + 35;
                bx = bx + 35;
                cx = cx + 35;
                dx = dx + 35;
                ex = ex + 35;
            }

            doc.save("prueba.pdf");

        });
        img.crossOrigin = "";
        img.src = url2;


    }, 2000);
}