// Questão 4
q4()
function q4 () {
  let nome, faltas, nota
  nome = prompt("nome:")
  faltas = prompt("faltas (sem a porcentagem %):")
  faltas=parseInt(faltas,10)
  nota = prompt("nota:")
  nota=parseInt(nota,10);
  if (faltas >= 25)
    alert(nome+", sua menção foi SR! Você foi reprovado!")
  else {
    if (nota >= 9)
      alert(nome+", sua menção foi SS! Você foi aprovado!")
    else if (nota >= 7)
      alert(nome+", sua menção foi MS! Você foi aprovado!")
    else if (nota >= 5)
      alert(nome+", sua menção foi MM! Você foi aprovado!")
    else if (nota >= 5)
      alert(nome+", sua menção foi MI! Você foi reprovado!")
    else
      alert(nome+", sua menção foi II! Você foi reprovado!")
  }
}