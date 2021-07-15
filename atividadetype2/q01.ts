interface  Iteravel <T>  {
proximo (): T
atual (): T
isPrimeiro (): boolean
isUltimo  (): boolean
isParaPrimeiro () : T
}

class  ColecaoArray <T>  {
num = 0;
matriz : T []  =  []
cont : num  =  0  

adiciona (v: T )  {
this.array.empurrar (v)
this.cont ++
}

proximo () : T  {
    return this.array [ this.array.comprimento -1 ]
}

atual () : T  {
    return this.array [ this.cont ]
}

isPrimeiro (v: num): boolean {
        if  ( this . array [ this . cont ]  ==  this . array [ 0 ] )  {
          retornar  verdadeiro
        }
        retorno  falso
}

isUltimo ( v:num): boolean  {
if  ( this.array [this.cont]  ==  this.array [ this.array.length -1 ] )  {
return  true
}
return  false 
}

isParaPrimeiro (): T  {
return  this.matriz [0]
}
}

var  modulo  =  new  ColecaoArray < num > ()
var  modulo  =  new  ColecaoArray < num > ()
	
módulo.adiciona(1)
módulo.adiciona(7)
console.log (módulo)
console.log (módulo.atual())
console.log (módulo.isPrimeiro(1))
console.log (módulo.isUltimo(7))
console.log (módulo.isParaPrimeiro())
