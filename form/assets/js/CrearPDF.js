//#region Generar PDF
var doc = new jsPDF();
var getImageFromUrl = async function() {

    var url = ['assets/js/0001.jpg', 'assets/js/0002.jpg', 'assets/js/0003.jpg'];

    /*
        url.forEach(async function (elements) {
            var img = new Image();
    
            img.onError = function () {
                alert('Cannot load image: "' + elements + '"');
            };
            $(img).on('load', function () {
                console.log("dii ")
                doc.addImage({
                    imageData: img,
                    angle: 360,
                    x: -8,
                    y: 0,
                    w: 220,
                    h: 300
                });
    
                doc.addPage();
                doc.output('datauri');
    
            });
            img.src = elements;
        });*/
    var img;
    for (var i = 0; i < url.length; i++) {
        img = new Image();

        img.onError = function() {
            alert('Cannot load image: "' + img + '"');
        };
        img.onload = function() {

            doc.addImage({
                imageData: img,
                angle: 360,
                x: -8,
                y: 0,
                w: 220,
                h: 300
            });
            doc.save('prueba.pdf');
            // doc.addPage();
            // doc.output('datauri');


        };
        img.crossOrigin = "";
        img.src = url[i];
        console.log(url[i]);
    }

    //Datos Personales 
    /*
    doc.setFontSize(14);
    doc.setFont("Arial")
    doc.text(15, 72.8, "primer apellido");
    doc.text(74, 72.8, "segundo apellido");
    doc.text(135, 72.8, "nombres");
    doc.setFontSize(10);
    doc.text(22, 82, "x");//C.C
    doc.text(33, 82, "x");//C.E
    doc.text(45, 82, "x");//Pass
    doc.setFontSize(14);
    doc.text(58, 82.8, "Identificacion");
    doc.setFontSize(10);
    doc.text(106.2, 82, "x");//F
    doc.text(115, 82, "x");//M
    doc.text(130.5, 82, "x");//COL
    doc.text(156.5, 82, "x");//EXTRA
    doc.setFontSize(14);
    doc.text(163, 82.8, "Pais");
    doc.setFontSize(10);
    doc.text(44.6, 94, "x");
    doc.text(86.3, 94, "x");
    doc.setFontSize(14);
    doc.text(114, 94, "Numero");
    doc.text(171, 94, "D.M");
    doc.text(41.2, 108, "07");//Dia
    doc.text(59, 108, "08");//Mes
    doc.text(77.4, 108, "2019");//Año
    doc.setFontSize(12);
    doc.text(98, 107.8, "Dir Correspondencia");
    doc.setFontSize(14);
    //fecha de nacimiento ylugar
    doc.text(34, 114.6, "Pais nacimiento");
    doc.text(34, 121, "Depto Naci");
    doc.text(34, 127.5, "Municipio Nac");
    //direccion de correspondencia
    doc.text(107, 114.6, "Pais Corres");
    doc.text(162, 114.6, "Depto corres");
    doc.text(118, 121, "Municipio corres");
*/
    // Output as Data URI
    //doc.output('datauri');



};

async function crear() {
    var url = ['assets/js/0001.jpg', 'assets/js/0002.jpg', 'assets/js/0003.jpg'];
    var doc = new jsPDF();

    for (var i = 0; i < url.length; i++) {
        var img = new Image();
        await $(img).on('load', function() {

            doc.addImage(this, 'JPG', -8, 0, 220, 300);
            doc.addPage();
            //doc.save("prueba.pdf");
            //doc.addPage();
        });


        img.crossOrigin = "";
        img.src = url[i];
        console.log(i);
    }
    doc.save("prueba.pdf");
    //doc.save("prueba.pdf");
}
var doc;
async function crear1() {
    doc = new jsPDF();
    //var url1 = 'assets/js/0001.jpg';
    // var url2 = 'assets/js/0002.jpg'
    //var url3 = 'assets/js/0003.jpg'
    //var img = new Image();
    /*await $(img).on('load', function () {

        doc.addImage(this, 'JPG', -8, 0, 220, 300);
        doc.addPage();
        //doc.save("prueba.pdf");
        //doc.addPage();
    });
    img.crossOrigin = "";
    img.src = url1;
    var img2 = new Image();
    await $(img2).on('load', function () {
     console.log("jairo perra")
        doc.addImage(this, 'JPG', -8, 0, 220, 300);
        doc.addPage();
        //doc.save("prueba.pdf");
        //doc.addPage();
    });
    img2.crossOrigin = "";
    img2.src = url2;
    var img3 = new Image();
    await $(img3).on('load', function () {

        doc.addImage(this, 'JPG', -8, 0, 220, 300);
        
        doc.save("prueba.pdf");
        //doc.addPage();
    });
    img3.crossOrigin = "";
    img3.src = url3;
    */

    var hoja1 = await Hoja1();
    var hoja2 = await Hoja2();
    var hoja3 = await Hoja3();

}

function Hoja1() {
    var url1 = 'assets/img/0001.jpg';
    var img = new Image();
    $(img).on('load', function() {
        console.log(1);
        doc.addImage(this, 'JPG', -8, 0, 220, 300);
        doc.setFontSize(12);
        doc.setFont("Arial")
        doc.text(15, 72.8, "primer apellido");
        doc.text(74, 72.8, "segundo apellido");
        doc.text(135, 72.8, "nombres");
        doc.setFontSize(10);
        doc.text(22, 82, "x"); //C.C
        doc.text(33, 82, "x"); //C.E
        doc.text(45, 82, "x"); //Pass
        doc.setFontSize(12);
        doc.text(58, 82.8, "Identificacion");
        doc.setFontSize(10);
        doc.text(106.2, 82, "x"); //F
        doc.text(115, 82, "x"); //M
        doc.text(130.5, 82, "x"); //COL
        doc.text(156.5, 82, "x"); //EXTRA
        doc.setFontSize(12);
        doc.text(163, 82.8, "Pais");
        doc.setFontSize(10);
        doc.text(44.6, 94, "x");
        doc.text(86.3, 94, "x");
        doc.setFontSize(12);
        doc.text(114, 94, "Numero");
        doc.text(171, 94, "D.M");
        doc.text(41.2, 108, "07"); //Dia
        doc.text(59, 108, "08"); //Mes
        doc.text(77.4, 108, "2019"); //Año
        doc.setFontSize(12);
        doc.text(98, 107.8, "Dir Correspondencia");
        doc.setFontSize(12);
        //fecha de nacimiento ylugar
        doc.text(34, 114.6, "Pais nacimiento");
        doc.text(34, 121, "Depto Naci");
        doc.text(34, 127.5, "Municipio Nac");
        //direccion de correspondencia
        doc.text(107, 114.6, "Pais Corres");
        doc.text(162, 114.6, "Depto corres");
        doc.text(117, 121, "Municipio corres");
        doc.text(117, 128, "Telefono");
        doc.text(162, 128, "Email"); <<
        << << < HEAD
        //educacion basica y media 
        doc.text(130, 167.5, "Titulo obtenido");
        doc.setFontSize(12);
        doc.text(29, 179, "X"); //primaria 1
        doc.text(35, 179, "X"); //primaria 2
        doc.text(41, 179, "X"); //primaria 3
        doc.text(47, 179, "X"); //primaria 4
        doc.text(53, 179, "X"); //primaria 5
        doc.text(59, 179, "X"); //secundaria  6
        doc.text(65, 179, "X"); //secundaria  7
        doc.text(71, 179, "X"); //secundaria  8
        doc.text(77, 179, "X"); //secundaria  9
        doc.text(83, 179, "X"); //secundaria  10
        doc.text(89, 179, "X"); //secundaria  11
        doc.text(118, 179, "09"); //fecha de grado mes
        doc.text(140, 179, "2019"); //fecha de grado año

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
            doc.text(154, cc, "2019"); // terminacion año 
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
        ===
        === =
        //feducacion basica y media 
        doc.text(130, 167.5, "Titulo obtenido");
        doc.setFontSize(12);
        doc.text(29, 179, "X"); //primaria 1
        doc.text(34, 179, "X"); //primaria 2
        doc.text(39, 179, "X"); //primaria 3
        doc.text(44, 179, "X"); //primaria 4
        doc.text(49, 179, "X"); //primaria 4
        >>>
        >>> > 4 cfc3eafc7a3276a6dedf088c406695d7f4c9cc6
        doc.addPage();
        //doc.save("prueba.pdf");
        //doc.addPage();
    });
    img.crossOrigin = "";
    img.src = url1;
} <<
<< << < HEAD

function Hoja2() { ===
    === =
    async function Hoja2() { >>>
        >>> > 4 cfc3eafc7a3276a6dedf088c406695d7f4c9cc6
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
            for (var i = 0; i <= 4; i++) {
                doc.setFontSize(12);
                doc.text(15, a, "Empresa o Entidad");
                doc.text(115, a, "X"); // publica
                doc.text(133, a, "X"); //privada
                doc.text(147, a, "Pais"); //pais
                doc.text(15, b, "Departamento"); //departamento
                doc.text(80, b, "Municipio"); //municipio
                doc.text(143, b, "Correo electreonico"); //correo electreonico
                doc.text(15, c, "Telefono"); //telefono
                doc.text(86, c, "13"); //fecha ingreso dia
                doc.text(104, c, "08"); //fecha ingreso mes 
                doc.text(122, c, "2019"); //fecha ingreso año
                doc.text(146, c, "13"); //fecha reito dia
                doc.text(164, c, "08"); //fecha retiro mes 
                doc.text(182, c, "2019"); //fecha retiro año
                doc.text(15, d, "Cargo"); //cargo o contrato actual 
                doc.text(80, d, "Dependencia"); //dependencia
                doc.text(139, d, "Direccion"); //direccion 
                a = a + 50;
                b = b + 50;
                c = c + 50;
                d = d + 50;
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
        setTimeout(() => { <<
                    << << < HEAD
                    $(img).on('load', function() { ===
                        === =
                        $(img).on('load', function() { >>>
                            >>> > 4 cfc3eafc7a3276a6dedf088c406695d7f4c9cc6
                            console.log(3);
                            doc.addImage(this, 'JPG', -8, 0, 220, 300);
                            //doc.output('datauri');
                            doc.save("prueba.pdf");
                            //doc.addPage();
                        });
                        img.crossOrigin = "";
                        img.src = url3;
                    }, 2000);

                }