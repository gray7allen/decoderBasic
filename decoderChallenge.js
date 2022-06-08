// function decoder(code) {
//     for (i=0; i < code.length; i++)
//     atob(code)
//     // check for number first
//     // number = letters passed over til good letter
//     // slice letters and push into array
//     //
// }

// console.log(decoder('0h2xce5ngbrdy'))

const decoder = code => {
    let splitStr = code.split('')
    let result = ''
  
    for (let i = 0; i < splitStr.length; i++) {
      if (!isNaN(+splitStr[i])) {
        i += +splitStr[i]
      } else {
        result += splitStr[i]
      }
    }
  
    return result
  }
  
  console.log(decoder('0y4akjfe0s'))
  console.log(decoder('0h2xce5ngbrdy'))
  console.log(decoder('2bna0p1mp2osl0e'))