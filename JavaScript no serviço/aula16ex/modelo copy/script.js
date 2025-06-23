function analisador() {
    let num = window.document.getElementById("txtn")
    let ana = window.document.getElementById("selana")
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let a = 1
        ana.innerHTML = ''
        while (a = 1) {
            let item = document.createElement("option")
            item.text = `O valor ${n} adicionado.`
            item.value = `ana${a}`
            ana.appendChild(item)
            a++
        }
    }
}
function finalizador(){
    
}