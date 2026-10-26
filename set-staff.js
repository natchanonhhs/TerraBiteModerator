const admin = require('firebase-admin');
const serviceAccount = require('./mobile-first-5543c-firebase-adminsdk-fbsvc-bb6963d6ae.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'FwrzyAY6dDSscQfHX5KMYZ59DoD3'; // UID ร้านค้าของคุณ

admin.auth().setCustomUserClaims(uid, { terraStaff: true })
  .then(() => {
    console.log(`✅ สำเร็จ! ให้สิทธิ์ terraStaff: true กับ UID: ${uid} เรียบร้อยแล้ว`);
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ เกิดข้อผิดพลาด:', error);
    process.exit(1);
  });
