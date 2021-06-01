// QUESTÃO 1:
q1();
function q1(){
  let anos = []
  for (ano = 1901; ano<2001;ano++){
    if (ano%4 == 0){
      anos.push(ano)
    }
  }
  console.log(anos)
}