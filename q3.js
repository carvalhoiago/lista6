// Questão 3
q3()
function q3 () {
  let c, k, f
  tipo = prompt("qual unidade de temperatura?")
  tipo = tipo.toUpperCase()
  switch(tipo){
    case "CELSIUS":
      c = prompt("digite o valor a ser convertido")
      c = parseInt(c,10)
      f = c*(9/5) + 32
      k = c + 273
      console.log("fahrenheit: "+f+" kelvin: "+k)
      break
    case "KELVIN":
      k = prompt("digite o valor a ser convertido")
      k = parseInt(k,10)
      c = k - 273
      f = c*(9/5) + 32
      console.log("fahrenheit: "+f+" celsius: "+c)
      break
    case "FAHRENHEIT":
      f = prompt("digite o valor a ser convertido")
      f = parseInt(f,10)
      c = (f - 32)*(5/9)
      k = c + 273
      console.log("kelvin: "+k+" celsius: "+c)
      break
    default:
      console.log("conversão impossível")
  }
}