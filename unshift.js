function arrayunshift(){
  var data = ["Bandung","Jakarta","Medan","Malang"];
  console.log("Data Awal Sebelum Unshift")
  console.log(data)
  console.log("Data Setelah Dilakukan Unshift")
  data.unshift("Surabaya","Bali");

  return data
}
console.log(arrayunshift())
