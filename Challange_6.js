function cariAngkaTerbesarKedua(dataAngka){
  
  if (dataAngka !== 0 && !dataAngka ){
  return "error karena data null"

  } else if (dataAngka === 0) {
  return 'Error data nol'
             
  } else {

    // mengurutkan angka terbesar ke kecil = 2,3,4,5,6,6 dibalikan = 6,6,5,4,3,2 
    dataAngka.sort(function(a , b){
    return a - b
  }).reverse()
    
  // Mencari Angka terbesar ke 1 
  let angkaTerbesar = Math.max(...dataAngka)

  // mengfilter angka dan mengetahui berapa banyak angka terbesarnya = 6,6 berjumlah 2 buah
  let filterAngka = dataAngka.filter(angka => angka == angkaTerbesar).length
  
  let terbesarKedua = 0

  // 2 - 0 = index ke 2
  let angkaTerbesarKedua = dataAngka[filterAngka - terbesarKedua]

  console.log(angkaTerbesarKedua)
  
  return angkaTerbesarKedua;
    
  }    
}

const dataAngka = [2,3,6,5,6,4]

console.log(cariAngkaTerbesarKedua(dataAngka))
console.log(cariAngkaTerbesarKedua(0))
console.log(cariAngkaTerbesarKedua())

