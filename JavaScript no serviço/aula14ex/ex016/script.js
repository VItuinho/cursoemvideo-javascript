function contar() {
    var numInicio = document.getElementById('numInicio')
    var numFim = document.getElementById('numFim')
    var passo1 = document.getElementById('passo')
    var numIn = Number(numInicio.value)
    var numF = Number(numFim.value)
    var passo = Number(passo1.value)
    var res = document.getElementById('res')
    if(numInicio.value.length == 0){
        res.innerText = 'impossivel contar'
    } else if (passo == 0){
        alert('passo invalido, considerando passo = 1')
        var passo = 1
        while(numIn <= numF){
            res.innerText += ` ${ numIn }`
             numIn = numIn + passo
         }
    } else {
        for( ; numIn <= numF ; numIn = numIn + passo ){
            res.innerText += ` ${numIn} `
        }
        }
        /*while(numIn <= numF){
          res.innerText += ` ${ numIn }`
           numIn = numIn + passo*/
       }