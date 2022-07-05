'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let suma = 0;
let post= 0
for (let i= num.length - 1; i>=0; i--){
  suma = suma + num[i] * 2 ** post
  post++
}
return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
 var resultado = ""
 while (num >= 0){
  resultado = num% 2 + resultadonum=Math.floor (num/2)

 }
 return resultado
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}