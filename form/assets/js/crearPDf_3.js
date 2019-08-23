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
    var laborales = valueTablasLaboral();
    var data3 = datos();

    await Hoja1(data3, tableidioma, tablestudi, referen, laborales);

}

async function Hoja1(obj, tabidio2, tabestudio, referen, labor) {
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
        var la1 = 190;
        var la2 = 195;
        var la3 = 200;
        var la4 = 205;
        var la5 = 210;
        var l0 = 0;
        var l1 = 1;
        var l3 = 3;
        var l4 = 4;
        var l5 = 5;
        var l6 = 6;
        var l7 = 7;
        var l8 = 8;
        var nfilaslaboral = $("#tableLaboral >tbody >tr").length;
        for (var i = 0; i <= nfilaslaboral - 1; i++) {
            doc.text(105, la1, labor[l0]); //nombre emrpesa
            doc.text(100, la2, "De " + labor[l6] + " a " + labor[l7]); //año de trabajo
            doc.text(171, la2, labor[l4] + " -" + labor[l3]); // ciudad empresa
            doc.text(100, la3, labor[l1]); // sector
            doc.text(100, la4, labor[l8]); //cargo
            doc.text(115, la5, labor[l5]); //e-mail
            l0 += 11;
            l1 += 11;
            l3 += 11;
            l4 += 11;
            l5 += 11;
            l6 += 11;
            l7 += 11;
            l8 += 11;
            la1 += 35;
            la2 += 35;
            la3 += 35;
            la4 += 35;
            la5 += 35;
        }

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
        var x0 = 0;
        var x1 = 1;
        var x2 = 2;
        var x3 = 3;
        var lee = 0;
        var habla = 0;
        var escribe = 0;
        var tot = 0;
        var nfilas2 = $("#tableIdioma >tbody >tr").length;
        for (var i = 0; i <= nfilas2 - 1; i++) {
            // doc.text(18, x, obj[38].value); // idioma que domina
            doc.text(18, x, tabidio2[x0]); // idioma que domina
            if (tabidio2[x1] == "R") {
                habla = 1; // habla
            }
            if (tabidio2[x1] == "B") {
                habla = 2; // habla
            }
            if (tabidio2[x1] == "MB") {
                habla = 3; // habla
            }

            if (tabidio2[x2] == "R") {
                lee = 1; // lee
            }
            if (tabidio2[x2] == "B") {
                lee = 2; // lee
            }
            if (tabidio2[x2] == "MB") {
                lee = 3; // lee
            }

            if (tabidio2[x3] == "R") {
                escribe = 1; // escribe
            }
            if (tabidio2[x3] == "B") {
                escribe = 2; // escribe
            }
            if (tabidio2[x3] == "MB") {
                escribe = 3; // escribe
            }

            tot = ((habla + lee + escribe) / 3);
            console.log(tot);

            if (tot >= 1 && tot <= 1.5) {
                doc.text(38, x, "Regular"); // Nivel idioma 
            }
            if (tot >= 1.6 && tot <= 2.5) {
                doc.text(38, x, "Bueno"); // Nivel idioma 
            }
            if (tot >= 2.6 && tot <= 3) {
                doc.text(38, x, "Muy bueno"); // Nivel idioma 
            }
            x0 += 4;
            x1 += 4;
            x2 += 4;
            x3 += 4;
            x = x + 7;
            tot = 0;
        }
        //..............Label experiencia laboral.............

        var ax = 190;
        var bx = 195;
        var cx = 200;
        var dx = 205;
        var ex = 210;

        for (var i = 0; i <= nfilaslaboral - 1; i++) {
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