function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page, #main-container');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
}

function printBondData() {
    const bondNumber = document.getElementById('bondNumber').value;
    const bondName = document.getElementById('bondName').value;
    const chequeNumber = document.getElementById('chequeNumber').value;
    const chequeDate = document.getElementById('chequeDate').value;
    const bondAuthority = document.getElementById('bondAuthority').value;
    const bondYear = document.getElementById('bondYear').value;

    console.log(`رقم العهدة: ${bondNumber}`);
    console.log(`اسم العهدة: ${bondName}`);
    console.log(`رقم الشيك: ${chequeNumber}`);
    console.log(`تاريخ الشيك: ${chequeDate}`);
    console.log(`جهة العهدة: ${bondAuthority}`);
    console.log(`سنة العهدة: ${bondYear}`);

    // هنا يمكنك طباعة البيانات على شكل جدول إذا أردت
}

function printReleaseData() {
    const itemNumber = document.getElementById('itemNumber').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const beneficiary = document.getElementById('beneficiary').value;
    const documentNumber = document.getElementById('documentNumber').value;
    const documentDate = document.getElementById('documentDate').value;

    console.log(`م: ${itemNumber}`);
    console.log(`المبلغ: ${amount}`);
    console.log(`البيان: ${description}`);
    console.log(`المستفيد: ${beneficiary}`);
    console.log(`رقم الوثيقة: ${documentNumber}`);
    console.log(`تاريخ الوثيقة: ${documentDate}`);

    // هنا يمكنك طباعة البيانات على شكل جدول إذا أردت
}

// بدء التطبيق بالصفحة الرئيسية
document.getElementById('main-container').classList.add('active');
