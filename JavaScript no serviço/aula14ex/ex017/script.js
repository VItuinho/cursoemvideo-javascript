function gerar_tabuada() {
    let tabuada = String()
    
    let result = document.querySelector('.r_tabuada')
    
    const numero = document.querySelector('#number_i').value

    for (var num = 1 ; num <= 10 ; num++) {
        tabuada += (`${num} x ${numero} = ${num * numero}<br>`)
    }
    
    result.innerHTML = tabuada
}
