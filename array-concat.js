function arrayconcat(){
var kota = ["Jakarta","Medan","Bandung","Surabaya"];
var kabupaten = ["Samosir","Simalungun","Langkat"];

console.log("Concat Digunakan Untuk Menggabungkan Dua Buah Variabel");
console.log("Sebelum Menggunakan Concat");
console.log(kota);
console.log(kabupaten);
console.log("Hasil Sesudah Menggunakan Concat");
var hasil = kota.concat(kabupaten)
return hasil
}
console.log(arrayconcat());
