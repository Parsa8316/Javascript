function convertToNumber(value) {
    return isNaN(value) ? value : parseFloat(value);
}
async function downloadExcel() {
    var wb = XLSX.utils.book_new();
    var ws_data = [
        [
            'ID',
            'Name',
            'LastName',
            'Age'
        ]
    ];
    var e = await document.getElementById("tbodyMain").children;
    for (var i = 0; i < e.length; i++) {
        var p = []
        for (var j = 0; j < e.item(i).children.length; j++) {
            p.push(convertToNumber(e.item(i).children.item(j).innerHTML))
        }
        ws_data.push(p)
    }
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'excel.xlsx');
}
