var doc;
async function crearHoja3() {
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
    var data3 = datos();
    await Hoja1(data3);

}

async function Hoja1(obj) {
    var url1 = 'assets/img/hoja3.jpg';
    var img = new Image();

    $(img).on('load', function() {
        console.log(1);
        doc.addImage(this, 'JPG', -2, 0, 212, 300);
        //...........datos personales .............
        doc.setFontSize(20);
        doc.setFont("Arial");
        doc.text(80, 38, obj[2].value + " " + obj[0].value + " " + obj[1].value); //nombre y apellidos
        doc.setFontSize(12);
        doc.text(10, 85, obj[4].value); // numero de documento de identidad
        doc.text(10, 95, obj[15].value); // numero de documento de identidad
        doc.text(10, 105, "321 2586973"); // telefono
        doc.text(10, 115, obj[10].value) // direccion
        doc.text(10, 125, obj[13].value + "-" + obj[12].value) // ciudad de residencia
        if (obj[7].checked == true) {
            doc.text(10, 135, "Colombiano"); // nacionalidad
        } else {
            doc.text(10, 135, obj[9].value); // nacionalidad}
        }
        doc.text(10, 145, obj[14].value); // email

        // ............perfil..........

        doc.text(84, 60, obj[25].value); // descripcion del perfil
        //..............estudios.............
        var a = 110;
        var b = 115;
        var c = 120;
        var d = 125;
        doc.setFont("Arial");
        var fechaestuio = obj[15].value;
        var fecha1 = fechaestuio.split("-"); // 
        for (var i = 0; i <= 2; i++) {
            doc.setFontSize(11);
            doc.text(95, a, fecha1[0]); //año de estudio
            doc.text(97, c, obj[33].value); // titulo obtenido
            if (obj[32].value == "SI") {
                doc.text(115, b, "Graduado"); //ciudad de estudio 
            } else {
                doc.text(115, b, obj[31].value); //total del ciclos   
            }
            if (obj[30].value == "TC") {
                doc.text(115, d, "Tecnica"); //Modalidad
            }
            if (obj[30].value == "TL") {
                doc.text(115, d, "Tecnológia "); //Modalidad
            }
            if (obj[30].value == "TE") {
                doc.text(115, d, "Tecnológia especializada"); //Modalidad
            }
            if (obj[30].value == "UN") {
                doc.text(115, d, "Universitaria"); //Modalidad
            }
            if (obj[30].value == "ES") {
                doc.text(115, d, "Especializacióna"); //Modalidad
            }
            if (obj[30].value == "MG") {
                doc.text(115, d, "Maestria o magiste"); //Modalidad
            }
            if (obj[30].value == "DOC") {
                doc.text(115, d, "Doctorado o PHD"); //Modalidad
            }

            a = a + 23;
            b = b + 23;
            c = c + 23;
            d = d + 23;
        }




        //..............experiencia laboral.............
        var av = 190;
        var b = 195;
        var c = 200;
        var d = 205;
        var e = 210;

        for (var i = 0; i <= 2; i++) {
            doc.text(105, av, obj[44].value); //nombre emrpesa
            doc.text(100, b, "De " + obj[50].value + " a " + obj[51].value); //año de estudio
            doc.text(171, b, obj[48].value + " -" + obj[47].value); // ciudad empresa
            doc.text(100, c, obj[45].value); // sector
            doc.text(100, d, obj[52].value); //cargo
            doc.text(115, e, obj[49].value); //e-mail
            av = av + 35;
            b = b + 35;
            c = c + 35;
            d = d + 35;
            e = e + 35;
        }
        //..............referencias laboral .........
        var ax = 208;
        var az = 212;
        var bx = 216;
        var cx = 220;
        var dx = 224;
        var ex = 228;
        for (var i = 0; i <= 2; i++) {
            doc.text(10, ax, obj[75].value); //nombre de la persona d ela refeencia laboral 
            doc.text(10, az, obj[76].value); //nombre de la empresa
            doc.text(10, bx, obj[77].value); // cargo
            doc.text(10, cx, obj[78].value); // direccion
            doc.text(10, dx, obj[79].value); //telefono
            doc.text(10, ex, obj[80].value); //e-amil entidad
            ax = ax + 30;
            az = az + 30;
            bx = bx + 30;
            cx = cx + 30;
            dx = dx + 30;
            ex = ex + 30;
        }
        //..........Idioma....................
        var x = 177;
        for (var i = 0; i <= 2; i++) {
            doc.text(18, x, obj[38].value); // idioma que domina
            doc.text(38, x, "Basico"); // nivel de idioma

            x = x + 7;
        }
        //..............Label experiencia laboral.............

        var ax = 190;
        var bx = 195;
        var cx = 200;
        var dx = 205;
        var ex = 210;
        for (var i = 0; i <= 2; i++) {
            doc.setFont("Arial", 'bold');
            doc.text(84, ax, "Empresa : "); //nombre empresa
            doc.text(84, bx, "Fecha :"); //fecha de labor
            doc.text(155, bx, "Ciudad :"); // ciudad de la empresa
            doc.text(84, cx, "Sector  :"); // sector
            doc.text(84, dx, "Cargo :"); //cargo
            doc.text(84, ex, "E-mail entidad :"); //e-amil entidad
            ax = ax + 35;
            bx = bx + 35;
            cx = cx + 35;
            dx = dx + 35;
            ex = ex + 35;
        }





        //........ label datos personales............
        doc.setFont("Arial", "bold");
        doc.setFontSize(12);
        doc.text(10, 80, "N° Documento:"); // edad
        doc.text(10, 90, "Fecha nacimiento:"); // edad
        doc.text(10, 100, "Telefono:"); // fecha de nacimiento
        doc.text(10, 110, "Direccion:"); // fecha de nacimiento
        doc.text(10, 120, "Ciudad:"); // fecha de nacimiento
        doc.text(10, 130, "Nacionalidad:"); // fecha de nacimiento
        doc.text(10, 140, "E-mail:"); // fecha de nacimiento




        //..........label Estudios......
        var aa = 110;
        var bb = 115;
        var cc = 120;
        var dd = 125;
        for (var i = 0; i <= 2; i++) {
            doc.setFontSize(11);
            doc.text(84, aa, "Año:"); //año de estudio
            doc.text(84, bb, "No° semestres:"); //año de estudio
            doc.text(84, cc, "Titulo:"); //año de estudio
            doc.text(84, dd, "Tipo formacion:"); //año de estudio
            aa = aa + 23;
            bb = bb + 23;
            cc = cc + 23;
            dd = dd + 23;
        }

        //.....label de Idioma..........
        doc.setFont("Arial", "bold");
        doc.setFontSize(12);
        doc.text(18, 170, "Idioma"); //idioma label
        doc.text(38, 170, "Nivel"); //idioma lo habla label

        doc.addPage();

        doc.save("prueba.pdf");

    });
    img.crossOrigin = "";
    img.src = url1;
}