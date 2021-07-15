importar  {  Cavaleiro ,  Personagem ,  Soldado  }  de  "./q02/q02.js" ;


exportar  class padrão  Jogo {  
personagem : Personagem [ ]  =  [ ]

public  incluir ( pessoa : Personagem ) : void  {
 var  personagemIgual  =  this.personagem. filtro ( personagem  =>  personagem . id  ===  pessoa . id )
if  ( personagemIgual.comprimento  >  0 )  {
console . log ( 'ID ja cadastrado.' )
return
}  else  {
this. personagem.push ( pessoa )
}
}

consultar public ( valor : number ) : Personagem  {
var  personagem  =  this. personagem. filtro ( personagem  =>  personagem.id  ===  valor )

if  ( Personagem . comprimento  >  0 )  {
return  personagem [ 0 ]
}  else  {
return  nulo
}
}

ataca public ( idUm : número ,  idDois : número )  {
if  ( idUm  ===  idDois )  {
console . log ( ' Personagem igual' )
return
}

var  atacante  =  this.consultar ( idUm )
var  atacado  =  this.consultar ( idDois )

if  ( atacante  &&  atacado )  {
if  ( instância atacante do  Soldado || instância atacante do Cavaleiro ) {      
atacante.ataca ( atacado )
return
}
}
}

avalia  publicBatalha ( ) : void  {
return  this. personagens . forEach ( personagem  =>  console . log ( personagem . toString ( ) ) )
}
}