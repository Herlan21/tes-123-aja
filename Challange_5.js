function splitName(personName){
    
    let splitPersonName = {}
    
      if (personName !== "number" ){  
      let splitNamaLengkap = personName.split(" ")
      
      console.log(splitNamaLengkap)

        if (splitNamaLengkap.length === 3 ){
          splitPersonName = { firstName: splitNamaLengkap[0], 
                                 middleName: splitNamaLengkap[1],
                                 lastName: splitNamaLengkap[2] 
                            }
          
        } else if (splitNamaLengkap.length === 2){
          splitPersonName = { namaDepan: splitNamaLengkap[0], 
                                 middleName: null,
                                 lastName: splitNamaLengkap[1] 
                            }
        
        } else if (splitNamaLengkap.length < 2)
             splitPersonName = { namaDepan: splitNamaLengkap[0], 
                                 middleName: null,
                                 lastName: null
                             }
      } else {
        splitNamaLengkap.length > 3  
        let = 'Error fungsi ini hanya untuk 3 karakter nama'
      }
    console.log(splitPersonName)
    }
  
  
  console.log(splitName("Aldi Daniela pranata"))
  console.log(splitName("Aurora"))
  console.log(splitName("Dwi kuncoro"))
  console.log(splitName("Dwi kuncoro kusumatmadja diningrat"))
  console.log(splitName(0))