
//#region Generar PDF


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

