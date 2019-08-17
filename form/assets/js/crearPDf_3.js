var doc;
async function crearHoja3() {
    doc = new jsPDF();
    await Hoja1();

}

async function Hoja1() {
    var url1 = 'assets/img/hoja3.jpg';
    var img = new Image();

    $(img).on('load', function() {
        console.log(1);
        doc.addImage(this, 'JPG', -2, 0, 212, 300);
        //...........datos personales .............
        doc.setFontSize(20);
        doc.setFont("Arial");
        doc.text(80, 38, "Socrates Martinez Berrio"); //nombre y apellidos
        doc.setFontSize(12);
        doc.text(10, 85, "1117546877"); // numero de documento de identidad
        doc.text(10, 95, "11/08/1995"); // numero de documento de identidad
        doc.text(10, 105, "321 2586973"); // telefono
        doc.text(10, 115, "Calle 23 # 15-44") // direccion
        doc.text(10, 125, "Florencia Caqueta") // ciudad de residencia
        doc.text(10, 135, "Colombia") // ciudad de residencia
        doc.text(10, 145, "socrates@mastercode.com.co") // email

        // ............perfil..........

        doc.text(84, 60, "Descripcion del perfil. "); // descripcion del perfil
        //..............estudios.............
        var a = 110;
        var b = 115;
        var c = 120;
        var d = 125;
        doc.setFont("Arial");
        for (var i = 0; i <= 2; i++) {
            doc.setFontSize(11);
            doc.text(95, a, "2013"); //año de estudio
            doc.text(115, b, "Graduado"); //ciudad de estudio 
            doc.text(97, c, "Bachiller academico"); // titulo obtenido
            doc.text(115, d, "Educacion basica y media"); //institucion
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
            doc.text(105, av, "Master Code"); //nombre emrpesa
            doc.text(100, b, "De 14/08/2013 a 15/08/2014 "); //año de estudio
            doc.text(171, b, "Florencia caquetá  "); // ciudad empresa
            doc.text(100, c, "Privada  "); // sector
            doc.text(100, d, "empleada de servico y la perra de la empresa"); //cargo
            doc.text(115, e, "gerenciamastercode@gmail.com"); //e-mail
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
            doc.text(10, ax, "Marx Danilo Zuñiga Torres  "); //nombre de la persona d ela refeencia laboral 
            doc.text(10, az, "Master code "); //nombre de la empresa
            doc.text(10, bx, "Jefe de personal "); // cargo
            doc.text(10, cx, "calle 10 # 12-33 "); // direccion
            doc.text(10, dx, "3125458775"); //telefono
            doc.text(10, ex, "marx@mastercode.com.co"); //e-amil entidad
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
            doc.text(18, x, "Español"); // idioma que domina
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