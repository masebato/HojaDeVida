//#region Generar PDF2
var doc = new jsPDF();
async function crearHoja2() {
    doc = new jsPDF();
    await Hoja1();
    await Hoja2();

}

async function Hoja1() {
    var url1 = 'assets/img/hoja2_1.jpg';
    var img = new Image();
   
        $(img).on('load', function() {
            console.log(1);
            doc.addImage(this, 'JPG', -8, 0, 220, 300);              
            doc.addPage();
            //doc.save("prueba.pdf");
            //doc.addPage();
        });
        img.crossOrigin = "";
        img.src = url1;         
}


async function Hoja2() {

    var url2 = 'assets/img/hoja2_2.jpg';
    var img = new Image();
     
        $(img).on('load', function() {
            console.log(2);
            doc.addImage(this, 'JPG', -8, 0, 220, 300);                     
            doc.save("prueba.pdf");
            //doc.addPage();
        });        
        img.crossOrigin = "";
        img.src = url2;
           
  
}