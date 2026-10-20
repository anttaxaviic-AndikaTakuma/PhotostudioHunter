// 1. Pilih tombol pada HTML berdasarkan atribut ID-nya ('sapahunter')
const tombolsapa = document.getElementById('sapahunter');

// 2. Tambahkan 'event listener' untuk mendeteksi saat tombol diklik oleh pengguna
tombolsapa.addEventListener('click', function() {
    // 3. Jalankan perintah ini ketika tombol di-klik (memunculkan kotak pesan pop-up)
    alert('Halo! Terima kasih sudah berkunjung!');
});
