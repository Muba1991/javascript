function arrayjoin(){
  var kota = ["Jakarta","Medan","Surabaya","Tangerang"];
  console.log("Join Digunakan Untuk Merubah Data Array Menjadi String");
  console.log("Data array Sebelum Dilakukan JOIN");
  console.log(kota);
  console.log("Data Array Setelah Dilakukan JOIN");
  var result = kota.join(" ")
  return result
}
console.log(arrayjoin());
