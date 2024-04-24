// File: script.js

// Event listener untuk mengecek ketika halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Ambil semua elemen dengan kelas 'btn'
    const buttons = document.querySelectorAll('.btn');

    // Loop melalui setiap tombol dan tambahkan event listener untuk setiap tombol
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Anda mengklik tombol ' + this.textContent); // Menampilkan pesan saat tombol diklik
        });
    });
});
