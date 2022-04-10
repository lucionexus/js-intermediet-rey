// SOAL 1
// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama

// 1. Synchronous adalah pembelajaran yang berpedoman pada jadwal atau kerangka waktu pelajaran.
// 2. Peserta dapat mengakses materi maupun tugas dalam kurun waktu tertentu.
//    Sedangkan asynchronous memiliki waktu yang lebih fleksibel.

for (var i = 1; i <= 5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
