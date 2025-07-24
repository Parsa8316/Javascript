pdfMake.fonts = {
    Vazir: {
        normal: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/Vazir-Regular.ttf',
        bold: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/Vazir-Bold.ttf',
        italics: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/Vazir-Light.ttf',
        bolditalics: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/Vazir-Medium.ttf'
    }
};

async function downloadPDF() {
    var data = document.getElementById("TxtText").value.split(" ");
    var pData = "";
    // var pData = document.getElementById("TxtText").value;
    for (var i = data.length - 1; i >= 0; i--) {
        pData += data[i] + " ";
    }
    const docDefinition = {
        content: [
            { text: pData , fontSize: 16, alignment: 'right', font: 'Vazir'},
        ],
    };
    await new Promise((resolve) => {
        pdfMake.createPdf(docDefinition).download('text.pdf', () => {
            resolve();
        });
    });
}
