const venom = require('venom-bot');

venom
  .create(
    'main-session',
    undefined,
    undefined,
    {
      headless: true, // لازم تبقى true
      useChrome: false, // خليه يستخدم Chromium من Puppeteer
      browserArgs: ['--no-sandbox'],
    }
  )
  .then((client) => start(client))
  .catch((err) => console.log('❌ حصلت مشكلة:', err));

function start(client) {
  client.onMessage((message) => {
    const msg = message.body.trim();
    const customerNumber = message.from.split('@')[0];

    console.log('📩 رسالة من:', customerNumber, '-', msg);

    switch (msg) {
      case '1':
        client.sendText(
          message.from,
          'للحجز مع دكتور مرقص برجاء استخدام الرابط التالي:\nhttps://drmarcosacademy.com/'
        );
        break;

      case '2':
      case '3':
      case '4':
        client.sendText(
          message.from,
          '✅ تم تحويلك للدعم، وهيتم التواصل معاك قريبًا.'
        );
        client.sendText(
          '201066255835@c.us',
          `📥 عميل اختار القسم ${msg}\nرقمه: ${customerNumber}\nلينك مباشر: https://wa.me/${customerNumber}`
        );
        break;

      case '5':
      case '6':
        client.sendText(
          message.from,
          '✅ تم تحويلك للدعم، وهيتم التواصل معاك قريبًا.'
        );
        client.sendText(
          '201200628942@c.us',
          `📥 عميل اختار القسم ${msg}\nرقمه: ${customerNumber}\nلينك مباشر: https://wa.me/${customerNumber}`
        );
        break;

      default:
        client.sendText(
          message.from,
          'مكتب دكتور مرقص يرحب بكم.\nمواعيد العمل من 10 صباحًا إلى 6 مساءً.\n\nاختر رقم:\n1 - للاشتراك\n2 - للدعم الفني\n3 - للاستفسارات\n4 - الأكواد والملازم\n5 - الشكاوى\n6 - ولي أمر'
        );
        break;
    }
  });
}