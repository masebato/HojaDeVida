
//#region Generar PDF



function CrearPDF(){
    var doc = new jsPDF();
    var imgData1 = '../img/0001.jpg';
    var imgData2 = '../img/0002.jpg';
    var imgData3 = '../img/0003.jpg';
    
    doc.setFontSize(40);
    doc.text(40,20,"prueba");
    doc.addImage(imgData1, 'JPG', 10,40,180,180);
    
    
}


//#endregion