function splice(){
var kota = ['Jakarta','Medan','Surabaya','Makassar'];
console.log(kota)
console.log("++++++++++++++++++++++++++++++++++++")
console.log("Hasil Setelah Menggunakan SPLICE")

kota.splice(2,0,'Pematangsiantar')
// kota.splice(2,2,'Pematangsiantar')
return kota
}
console.log(splice())
