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

    var tableidioma = valueTablasIdiomas();
    var tablestudi = valueTablasFormacion();
    var referen = valueTablasReferencia();
    var data3 = datos();

    await Hoja1(data3, tableidioma, tablestudi, referen);

}

async function Hoja1(obj, tabidio, tabestudio, referen) {
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
        doc.text(84, 60, 'jadaaaaaaaaaa\ddddddddfsfsdfsfsfs.'); // descripcion del perfil
        //..............estudios.............
        var a = 110;
        var b = 115;
        var c = 120;
        var d = 125;

        var a0 = 0;
        var a1 = 1;
        var a2 = 2;
        var a3 = 3;
        var a4 = 4;
        doc.setFont("Arial");
        var fechaestuio = tabestudio[a4];
        var fecha1 = fechaestuio.split("-"); // 
        var nfilas = $("#tableAcademico >tbody >tr").length;
        for (var i = 0; i <= nfilas - 1; i++) {
            doc.setFontSize(11);
            doc.text(95, a, fecha1[0]); //año de estudio
            doc.text(97, c, tabestudio[a3]); // titulo obtenido
            if (tabestudio[a2] == "Si") {
                doc.text(115, b, "Graduado"); //ciudad de estudio 
            } else {
                doc.text(115, b, tabestudio[a1]); //total del ciclos   
            }
            if (tabestudio[a0] == "TC") {
                doc.text(115, d, "Tecnica"); //Modalidad
            }
            if (tabestudio[a0] == "TL") {
                doc.text(115, d, "Tecnológia "); //Modalidad
            }
            if (tabestudio[a0] == "TE") {
                doc.text(115, d, "Tecnológia especializada"); //Modalidad
            }
            if (tabestudio[a0] == "UN") {
                doc.text(115, d, "Universitaria"); //Modalidad
            }
            if (tabestudio[a0] == "ES") {
                doc.text(115, d, "Especializacióna"); //Modalidad
            }
            if (tabestudio[a0] == "MG") {
                doc.text(115, d, "Maestria o magiste"); //Modalidad
            }
            if (tabestudio[a0] == "DOC") {
                doc.text(115, d, "Doctorado o PHD"); //Modalidad
            }

            a0 += 6;
            a1 += 6;
            a2 += 6;
            a3 += 6;
            a4 += 6;
            a = a + 23;
            b = b + 23;
            c = c + 23;
            d = d + 23;
        }


        //..............experiencia laboral empresa1 .............

        doc.text(105, 190, obj[44].value); //nombre emrpesa
        doc.text(100, 195, "De " + obj[50].value + " a " + obj[51].value); //año de estudio
        doc.text(171, 195, obj[48].value + " -" + obj[47].value); // ciudad empresa
        doc.text(100, 200, obj[45].value); // sector
        doc.text(100, 205, obj[52].value); //cargo
        doc.text(115, 210, obj[49].value); //e-mail
        //..............experiencia laboral empresa2 .............
        doc.text(105, 225, obj[55].value); //nombre emrpesa
        doc.text(100, 230, "De " + obj[61].value + " a " + obj[62].value); //año de estudio
        doc.text(171, 230, obj[59].value + " -" + obj[58].value); // ciudad empresa
        doc.text(100, 235, obj[56].value); // sector
        doc.text(100, 240, obj[63].value); //cargo
        doc.text(115, 245, obj[60].value); //e-mail
        //..............experiencia laboral empresa3 .............
        doc.text(105, 260, obj[66].value); //nombre emrpesa
        doc.text(100, 265, "De " + obj[72].value + " a " + obj[73].value); //año de estudio
        doc.text(171, 265, obj[70].value + " -" + obj[69].value); // ciudad empresa
        doc.text(100, 270, obj[67].value); // sector
        doc.text(100, 275, obj[74].value); //cargo
        doc.text(115, 280, obj[71].value); //e-mail

        //..............referencias laboral .........
        var ax = 208;
        var az = 212;
        var bx = 216;
        var cx = 220;
        var dx = 224;
        var ex = 228;
        var h0 = 0;
        var h1 = 1;
        var h2 = 2;
        var h3 = 3;
        var h4 = 4;
        var h5 = 5;
        var nfilas3 = $("#tablereferencia >tbody >tr").length;
        for (var i = 0; i <= nfilas3 - 1; i++) {
            doc.text(10, ax, referen[h0]); //nombre de la persona d ela refeencia laboral 
            doc.text(10, az, referen[h1]); //nombre de la empresa
            doc.text(10, bx, referen[h2]); // cargo
            doc.text(10, cx, referen[h3]); // direccion
            doc.text(10, dx, referen[h4]); //telefono
            doc.text(10, ex, referen[h5]); //e-amil entidad
            h0 += 6;
            h1 += 6;
            h2 += 6;
            h3 += 6;
            h4 += 6;
            h5 += 6;
            ax = ax + 30;
            az = az + 30;
            bx = bx + 30;
            cx = cx + 30;
            dx = dx + 30;
            ex = ex + 30;
        }
        //..........Idioma....................
        var x = 177;
        var za = 0;
        for (var i = 0; i <= 1; i++) {
            // doc.text(18, x, obj[38].value); // idioma que domina
            doc.text(18, x, tabidio[za]); // idioma que domina
            doc.text(38, x, "Basico"); // nivel de idioma

            za += 4;
            x = x + 7;
        }
        //..............Label experiencia laboral.............

        var ax = 190;
        var bx = 195;
        var cx = 200;
        var dx = 205;
        var ex = 210;
        var veces = 0; // las veces qe se va hacer el for
        if (obj[63].value != "") {
            veces = 1;
        }
        if (obj[74].value != "") {
            veces = 2;
        }
        for (var i = 0; i <= veces; i++) {
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