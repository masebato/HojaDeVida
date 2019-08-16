//#region Generar PDF2
var doc;
async function crearHoja2() {
    doc = new jsPDF();
    await Hoja1();
    await Hoja2();

}

async function Hoja1() {
    var url1 = 'assets/img/formato2.jpg';
    var img = new Image();

    $(img).on('load', function() {
        console.log(1);
        doc.addImage(this, 'JPG', -2, 0, 212, 300);
        //...........datos personales .............
        doc.setFontSize(12);
        doc.setFont("Arial");
        doc.text(47, 39.5, "Socrates Martinez Berrio"); //nombre y apellidos
        doc.text(82, 45, "1117546877"); // numero de documento de identidad
        doc.text(74, 49.5, "07/05/1998"); // fecha de nacimiento
        doc.text(49, 54.5, "321 2586973"); // telefono
        doc.text(50, 59, "Calle 23 # 15-44") // direccion
        doc.text(74, 64, "Florencia Caqueta") // ciudad de residencia
        doc.text(57, 69, "Colombiano") // nacionalidad
        doc.text(45, 74, "socrates@mastercode.com.co") // email
        doc.text(59, 79, "1231231231"); // numero libreta militar
        doc.text(59, 84, "Distrito n° 13"); //dsitrito militar
        // ............perfil..........

        doc.text(28, 104, "Igurrículum sirvnal busc candidatos. "); // descripcion del perfil
        //..............estudios.............
        var a = 190;
        var b = 195;
        doc.setFont("Arial");
        for (var i = 0; i <= 3; i++) {
            doc.setFontSize(11);
            doc.text(39, a, "2013"); //año de estudio
            doc.text(58, b, "Graduado"); //ciudad de estudio 
            doc.text(104, a, "Bachiller academico"); // titulo obtenido
            doc.text(121, b, "Educacion basica y media"); //institucion
            a = a + 18;
            b = b + 18;
        }

        //..........Idioma....................
        var x = 155;
        for (var i = 0; i <= 2; i++) {
            doc.text(28, x, "Español"); // idioma que domina
            doc.text(52, x, "bien"); // nivel de idioma
            doc.text(76, x, "Regular"); // nivel de idioma
            doc.text(98, x, "muy bien"); // nivel de idioma
            x = x + 7;
        }

        //........ label datos personales............
        doc.setFont("Arial", "bold");
        doc.setFontSize(12);
        doc.text(28, 45, "Documento de Identidad :"); // edad
        doc.text(28, 79, "Libreta militar:"); // edad
        doc.text(28, 84, "Distrito militar:"); // edad


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


async function Hoja2() {

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
                doc.text(48, av, "Master Code"); //nombre emrpesa
                doc.text(44, b, "De 14/08/2013 a 15/08/2014 "); //año de estudio
                doc.text(123, b, "Florencia caquetá  "); // ciudad empresa
                doc.text(44.5, c, "Privada  "); // sector
                doc.text(43, d, "empleada de servico y la perra de la empresa"); //cargo
                doc.text(55, e, "gerenciamastercode@gmail.com"); //e-mail
                av = av + 35;
                b = b + 35;
                c = c + 35;
                d = d + 35;
                e = e + 35;
            }
            //..............experiencia laboral .........
            var ax = 153;
            var az = 158;
            var bx = 163;
            var cx = 168;
            var dx = 173;
            var ex = 178;
            for (var i = 0; i <= 2; i++) {
                doc.text(48, ax, "Marx Danilo Zuñiga Torres : "); //nombre de la persona d ela refeencia laboral 
                doc.text(48, az, "Master code :"); //nombre de la empresa
                doc.text(43, bx, "Secretaria :"); // cargo
                doc.text(50, cx, "calle 10 # 12-33 :"); // direccion
                doc.text(48, dx, "3125458775"); //telefono
                doc.text(58, ex, "marx@mastercode.com.co:"); //e-amil entidad
                ax = ax + 35;
                az = az + 35;
                bx = bx + 35;
                cx = cx + 35;
                dx = dx + 35;
                ex = ex + 35;
            }
            //........firma........
            doc.text(28, 274, "Socrates Martinez Berrio"); //nombre y apellidos
            doc.text(28, 278, "C.C"); // tipo de coumento de identidad
            doc.text(36, 278, "1117546877"); // numero de documento de identidad

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