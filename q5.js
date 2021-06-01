// Questão 5
q5();
function q5(){
  let aulas = [
    {
      instrutor: 'Arthur Furtado',
      aula: 'Introdução ao React',
      assistido: true
    },
    {
      instrutor: 'Gabriel Xavier',
      aula: 'Html e Css',
      assistido: true
    },
    {
      instrutor: 'Guilherme',
      aula: 'Git e Github',
      assistido: true
    },
    {
      instrutor: 'Gabriel Cruz',
      aula: 'Rails API',
      assistido: false
    },
    {
      instrutor: 'David Mendes',
      aula: 'Ruby',
      assistido: false
    }
  ];

  for (i in aulas){
    if (aulas[i].assistido)
      console.log("Já assisti a aula de "+aulas[i].aula+" com o "+aulas[i].instrutor)
    else
      console.log("Não assisti a aula de "+aulas[i].aula+" com o "+aulas[i].instrutor)
  }
}