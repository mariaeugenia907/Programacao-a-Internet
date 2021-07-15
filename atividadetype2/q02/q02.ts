export  class  Personagem  {
id : número
nome : string
energia : número

construtor ( id : número ,  nome : string ,  energia : número )  {
this.id  =  id
this.nome  =  nome
this.energia  =  energia
}

public  Vivo ( ) : boolean  {
if  ( this . energia  ==  0 )  {
return  false
}  else  {
return  true
}
}

public  defendeAtaque ( valor : número ) : vazio  {
if  ( valor  >  this . energia )  {
this.energia  =  0
}  else  {
this.energia =  valor
}
}

public  situacaoPersonagem () : string  {
return  ID: $ { this.id } \ nNOME: $ { this.nome } \ nENERGIA: $ { this.energia } \ nVIVO: $ { this.Vivo ( ) }
}
}

export  class  Soldado  extends  Personagem  {
public  Ataque : number

construtor ( id : número ,  nome : string ,  energia : número ,  Ataque : número )  {
super ( id ,  nome ,  energia )
this.Ataque  =  forcaAtaque
}

public  Vivo ( ) : boolean  {
if  ( this . energia  ==  0 )  {
return  false
}  else  {
return  true
}
}

ataca public ( personagem : Personagem )  {
personagem.defendeAtaque ( this.Ataque )
}

public  defendeAtaque ( valor : número ) : vazio  {
if  ( valor  >  this.energia )  {
this. energia  =  0
}  else  {
this. energia  - =  ( valor / 2 )
}
}

public  situacaoPersonagem ( ) : string  {
return  ID: $ { this.id } \ nNOME: $ { this.nome } \ nENERGIA: $ { this.energia } \ nATAQUE: $ { this.Ataque } \ nVIVO: $ { this.Vivo() }
}
}


class  export Cavaleiro  and  Soldado  {
construtor ( id : número ,  nome : string ,  energia : número ,  Ataque : número )  {
super ( id ,  nome ,  energia ,  Ataque )
}

public  estaVivo ( ) : boolean  {
if  ( this . energia  ==  0 )  {
return  false
}  else  {
return  true
}
}

ataca public ( personagem : Personagem )  {
personagem . defendeAtaque ( this.Ataque  *  2 )
}

public  defendeAtaque ( valor : número ) : vazio  {
if  ( valor  >  this . energia )  {
this.energia  =  0
}  else  {
this.energia  - =  ( valor / 3 )
}
}

public  situacaoPersonagem ( ) : string  {
return  ID: $ { this.id } \ nNOME: $ { this. nome } \ nENERGIA: $ { this. energia } \ nATAQUE: $ { this.Ataque } \ nVIVO: $ { this.Vivo ( ) } `
}
}