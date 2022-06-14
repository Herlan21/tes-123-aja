

function checkEmail(email){ 

  let regex = new RegExp (/^[a-zA-Z0-9]+@[a-zA-Z.]+.[a-zA-Z]{2,3}$/)
  let tanpaTitik = email.indexOf(".")
  let tanpaAt = email.indexOf("@")
  
 	  if (!regex.test(email) && tanpaTitik < 1 ){
    return "Error ! Karakter tidak lengkap"
      
    } else if (!regex.test(email) && tanpaAt < 1){
     	return "Invalid"
    
    }else if (regex.test(email)){
     if (tanpaTitik < 1 ) { 
     return 'Invalid'
       
		} else {
 		return 'Valid'
      
    } 
  }	
}
    
console.log(checkEmail('herlan@gmail.co.id'))
console.log(checkEmail('herlan@gmail.com'))
console.log(checkEmail('herlan@gmail'))
console.log(checkEmail('herlan'))
console.log(checkEmail(3322))
console.log(checkEmail())

    
