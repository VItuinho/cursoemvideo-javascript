var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
var milisegundos = agora.getMilliseconds()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos e ${milisegundos} milisegundos.`)
if (hora < 12){
    console.log("Bom dia!")
} else if (hora <= 18){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}