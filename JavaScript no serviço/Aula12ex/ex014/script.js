var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos e ${segundos} segundos.`
if (hora >= 0 && hora < 12 ){
    // BOM DIA!
    img.src = "foto manhã.png"
    document.body.style.background = "#cec4a2"
} else if (hora >= 12 && hora <= 18) {
    // BOA TARDE! 
    img.src = "foto tarde.png"
    document.body.style.background = "#db9974"
} else {
    // BOA NOITE!
    img.src = "foto noite.png"
    document.body.style.background = "#4c4d51"
}
