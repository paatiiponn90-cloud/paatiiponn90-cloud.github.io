//เพิ่ม JavaScript สำหรับการโต้ตอบกับผู้ใช้ (Optional)
document.addEventListener(’DOMContentLoaded‘,function () {
    document.getElementById('year').innerHTML = new Date().getFullYear();
    console.log(’Portfolio ของ Patiphon พร้อมแล้ว!‘);
});
