
        
const checkTypeNumber = (givenNumber) => {
  
  if(!givenNumber) {
    return "Bro where is parameter ?"

  } else if (givenNumber % 2 === 0 && typeof givenNumber === "number"){
    return "GENAP"

  } else if (givenNumber % 2 === 1 && typeof givenNumber === "number") {
    return "GANJIL"
    
  } else if (typeof givenNumber !=  "number" || givenNumber === 0){
    return "Error Invalid Data type"
    }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))    
console.log(checkTypeNumber({}))    
console.log(checkTypeNumber([]))    
console.log(checkTypeNumber())    

        
    