
function isValidPassword (password) { 
    
    let regex = new RegExp (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
                  
      if (password === 0 || !password ) {
      return "error karena data null"
        
      } else if (typeof password !== "number"){
      	
        if (regex.test(password) === true){
       	return true
      } 
        else if (regex.test(password) === false){
       return false 
    } 	
	}    
}
	console.log(isValidPassword())
  console.log(isValidPassword(0))
  console.log(isValidPassword('Meong2'))
  console.log(isValidPassword('@eong'))
  console.log(isValidPassword('Meong2021'))


    