let numeros = [2,7,11,15,19]
let alvo = 9


function twoSum(){
    for(let i = 0; i <= numeros.length; i++){
        for(let j = 0; j <= numeros.length; j++){
            var sum = numeros[i]+numeros[j]
            if(sum = alvo){
                j = numeros.length
                i = numeros.length
                return numeros[i].indexOf, numeros[j].indexOf
            }
        }
    }
}
twoSum()