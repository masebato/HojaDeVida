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
        //datos personales  
        doc.setFontSize(12);
        doc.setFont("Arial");
        //doc.setFont("Arial", "bold");
        doc.text(25, 11, "Socrates Martinez Berrio"); //nombre y apellidos
        doc.text(20, 15.5, "22 años"); // edad
        doc.text(28, 20.5, "calle 23 # 15-44"); // direccion
        doc.text(18, 25.5, "321 2586973"); // telefono
        doc.text(23, 30.5, "socrates@mastercode.com.co") // email
        doc.text(100, 20, "Secretaria general de master code \n y  la perra de la empresa"); //cargo postulado
        //..............estudios.............


        var a = 65;
        var b = 70;

        for (var i = 0; i <= 2; i++) {
            doc.setFontSize(11);
            doc.setFont("Arial", 'bold');
            doc.text(18, a, "Año:"); //año de estudio
            doc.setFont("Arial");
            doc.text(28, a, "2013"); //año de estudio
            //doc.setFont("Arial", "bold");
            doc.text(18, b, "Ciudad:"); //año de estudio
            //doc.setFont("Arial");
            doc.text(33, b, "FLorencia caquetá"); //ciudad de estudio 
            //doc.setFont("Arial", "bold");
            doc.text(80, a, "Titulo:"); //año de estudio
            //doc.setFont("Arial");
            doc.text(97, a, "Bachiller academico"); // titulo obtenido
            //doc.setFont("Arial", "bold");
            doc.text(80, b, "Universidad/Instituto:"); //año de estudio
            //doc.setFont("Arial");
            doc.text(123, b, "Institucion educativa jorge eliecer gaitan"); //institucion
            a = a + 16;
            b = b + 16;
        }

        doc.text(40, 119.5, "Nativo"); //nivel de español
        doc.text(40, 124.5, "Basico"); //nivel de ingles
        doc.text(40, 124.5, "Basico"); //nivel de ingles

        doc.text(20, 138, " Excel, Word, mysql, blender, xvideos, y muchos otros"); //programas manejados
        //..............estudios.............

        var a = 170;
        var b = 175;
        var c = 180;
        var d = 185;
        var e = 190;

        for (var i = 0; i <= 2; i++) {
            doc.text(20, a, "De 14/08/2013 a 15/08/2014 "); //año de estudio
            doc.text(78, a, "FLorencia caquetá"); //ciudad de emrpesa
            doc.text(20, b, "Master Code "); // nombre emrpesa
            doc.text(20, c, "tecnologico  "); // sector
            doc.text(20, d, "empleada de servico y la perra de la empresa"); //cargo
            doc.text(20, e, "era la encargada de los tintos de hacer aseo, la mensajera \n y la perra mala del grupo que hacia lo que ellos dijeran"); //tareas realizadas
            a = a + 40;
            b = b + 40;
            c = c + 40;
            d = d + 40;
            e = e + 40;
        }

        doc.addPage();
        doc.save("prueba.pdf");
        //doc.addPage();
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


    }, 2000);
}