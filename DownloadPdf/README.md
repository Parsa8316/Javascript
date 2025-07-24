# دانلود پی دی اف فارسی
شاید دفعه اول ساخت پی دی اف که از زبان فارسی پشتیبانی کنه و ترتیب نوشته ها اوش به هم نخوره، براتون دردسر باشه. <br>
تو مرحله اول ساخت پی دی افه که خیلی ساده ست <br>
    `const docDefinition = {
        content: [
            { text: pData , fontSize: 16, alignment: 'right', font: 'Vazir'}, <br>
        ],
    };
    await new Promise((resolve) => {
        pdfMake.createPdf(docDefinition).download('text.pdf', () => { <br>
            resolve();
        });
    });` <br> <br>
    pData همون ورودی تکست ماست که از textarea گرفتیم. تا اینجاش راحته. مشکلش اینجاست که از زبان فارسی پشتیبانی نمیکنه و برای حل این مشکل از pdfMake استفاده میکنیم و فونت وزیر رو دانلود میکنیم. اسکریپت های استفاده شده برای pdfMake گزینه های زیر هستن : <br>
    1. `<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/pdfmake.min.js"></script>` <br>
    2. `<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/vfs_fonts.js"></script>` <br> <br>
  بعد این فونت فارسی برای جاوا اسکریپت شناخته میشه ولی هنوز یه مشکل مونده. اونم این که کلمات رو از آخر به اول چاپ میکنه. یعنی اگه بنویسیم : "سلام خوبی ؟" چاپ میکنه : "؟ خوبی سلام". برای حل این مشکلم باید از حلقه استفاده کنیم : <br> 
  `    var data = document.getElementById("TxtText").value.split(" ");
    var pData = "";
    for (var i = data.length - 1; i >= 0; i--) {
        pData += data[i] + " ";
    }` <br> <br> 
    حالا تکست ما آماده چاپه.
