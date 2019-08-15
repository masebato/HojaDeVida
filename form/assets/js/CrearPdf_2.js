//#region Generar PDF2
var doc;
async function crearHoja2() {
    doc = new jsPDF();
    await Hoja1();
    await Hoja2();

}

async function Hoja1() {
    var url1 = 'assets/img/hoja2_0.jpg';
    var img = new Image();

    $(img).on('load', function() {
        console.log(1);
        doc.addImage(this, 'JPG', -2, 0, 212, 300);
        //...........datos personales .............
        doc.setFontSize(12);
        doc.setFont("Arial");
        doc.text(25, 11, "Socrates Martinez Berrio"); //nombre y apellidos
        doc.text(20, 15.5, "22 años"); // edad
        doc.text(28, 20.5, "calle 23 # 15-44"); // direccion
        doc.text(18, 25.5, "321 2586973"); // telefono
        doc.text(23, 30.5, "socrates@mastercode.com.co") // email
        doc.text(100, 20, "Secretaria general de master code \n y  la perra de la empresa"); //cargo postulado
        //..............estudios.............
        var a = 65;
        var b = 70;
        doc.setFont("Arial");
        for (var i = 0; i <= 3; i++) {
            doc.setFontSize(11);
            doc.text(28, a, "2013"); //año de estudio
            doc.text(33, b, "FLorencia caquetá"); //ciudad de estudio 
            doc.text(97, a, "Bachiller academico"); // titulo obtenido
            doc.text(123, b, "Institucion educativa jorge eliecer gaitan"); //institucion
            a = a + 16;
            b = b + 16;
        }

        //..........Idioma....................
        var x = 138;
        for (var i = 0; i <= 2; i++) {
            doc.text(20, x, "Español"); // idioma que domina
            doc.text(44, x, "bien"); // nivel de idioma
            doc.text(68, x, "Regular"); // nivel de idioma
            doc.text(90, x, "muy bien"); // nivel de idioma
            x = x + 7;
        }
        //..............experiencia laboral.............
        var av = 170;
        var b = 175;
        var c = 180;
        var d = 185;
        var e = 190;
        for (var i = 0; i <= 2; i++) {
            doc.setFontSize(11);
            doc.text(35, av, "De 14/08/2013 a 15/08/2014 "); //año de estudio
            doc.text(115, av, "FLorencia caquetá"); //ciudad de emrpesa
            doc.text(40, b, "Master Code "); // nombre emrpesa
            doc.text(36.5, c, "tecnologico  "); // sector
            doc.text(35, d, "empleada de servico y la perra de la empresa"); //cargo
            doc.text(60, e, "era la encargada de los tintos de hacer aseo, la mensajera \n y la perra mala del grupo que hacia lo que ellos dijeran"); //tareas realizadas
            av = av + 40;
            b = b + 40;
            c = c + 40;
            d = d + 40;
            e = e + 40;
        }
        //........ label de estudios............
        var aa = 65;
        var bb = 70;
        for (var i = 0; i <= 3; i++) {
            doc.setFontSize(11);
            doc.setFont("Arial", "bold");
            doc.text(18, aa, "Año:"); //año de estudio
            doc.text(18, bb, "Ciudad:"); //año de estudio
            doc.text(80, aa, "Titulo:"); //año de estudio
            doc.text(80, bb, "Universidad/Instituto:"); //año de estudio
            aa = aa + 16;
            bb = bb + 16;
        }
        //..........label de experiencia laboral......
        var ax = 170;
        var bx = 175;
        var cx = 180;
        var dx = 185;
        var ex = 190;
        for (var i = 0; i <= 2; i++) {
            doc.text(20, ax, "Fecha : "); //año de estudio
            doc.text(98, ax, "Ciudad :"); //ciudad de emrpesa
            doc.text(20, bx, "Empresa :"); // nombre emrpesa
            doc.text(20, cx, "Sector  :"); // sector
            doc.text(20, dx, "Cargo :"); //cargo
            doc.text(20, ex, "Tareas Realizadas :"); //tareas realizadas
            ax = ax + 40;
            bx = bx + 40;
            cx = cx + 40;
            dx = dx + 40;
            ex = ex + 40;
        }

        //.....label de Idioma..........
        doc.setFont("Arial", "bold");
        doc.text(20, 130, "Idioma"); //idioma label
        doc.text(44, 130, "Lo habla"); //idioma lo habla label
        doc.text(68, 130, "Lo lee"); //idioma lo lee label
        doc.text(90, 130, "Lo escribe"); //idioma lo escribe label
        doc.addPage();
        doc.save("prueba.pdf");

    });
    img.crossOrigin = "";
    img.src = url1;
}


async function Hoja2() {

    var url2 = 'assets/img/hoja2_2.jpg';
    var img = new Image();
    setTimeout(() => {
        $(img).on('load', function() {
            console.log(2);
            doc.addImage(this, 'JPG', -2, 0, 212, 300);


            doc.save("prueba.pdf");

        });
        img.crossOrigin = "";
        img.src = url2;


    }, 3000);
}