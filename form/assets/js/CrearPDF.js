
//#region Generar PDF



// Because of security restrictions, getImageFromUrl will
// not load images from other domains.  Chrome has added
// security restrictions that prevent it from loading images
// when running local files.  Run with: chromium --allow-file-access-from-files --allow-file-access
// to temporarily get around this issue.
var getImageFromUrl = function (url, callback) {
    var img = new Image();

    img.onError = function () {
        alert('Cannot load image: "' + url + '"');
    };
    img.onload = function () {
        createPDF(img);
    };
    img.src = url;
}

// Since images are loaded asyncronously, we must wait to create
// the pdf until we actually have the image.
// If we already had the jpeg image binary data loaded into
// a string, we create the pdf without delay.
var createPDF = function (imgData) {
    var doc = new jsPDF();
    doc.setFontSize(40);
    // doc.text(40, 20, "Prueba");
    // This is a modified addImage example which requires jsPDF 1.0+
    // You can check the former one at examples/js/basic.js

    // doc.addImage(imgData, 'JPEG', 10, 10, 50, 50, 'img'); // Cache the image using the alias 'monkey'
    //doc.addImage('img', 70, 10, 100, 120); // use the cached 'monkey' image, JPEG is optional regardless
    // As you can guess, using the cached image reduces the generated PDF size by 50%!

    // Rotate Image - new feature as of 2014-09-20
    doc.addImage({
        imageData: imgData,
        angle: 360,
        x: -8,
        y: 0,
        w: 220,
        h: 300
    });

    //Datos Personales 
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
    
//--------------------------------------------------------------------------------------------------
    // Output as Data URI
    doc.output('datauri');
    doc.save('prueba.pdf');
}
var getImageFromUrl = async function () {
   
    var url = ['assets/js/0001.jpg', 'assets/js/0002.jpg', 'assets/js/0003.jpg'];
     var doc = new jsPDF();

    url.forEach(async function (elements) {
        var img = new Image();
        
        img.onError = function () {
            alert('Cannot load image: "' + elements + '"');
        };              
        $(img).on('load', function() {
          
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
    });

    

};

