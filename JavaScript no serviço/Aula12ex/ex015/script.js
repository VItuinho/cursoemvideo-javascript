function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >=0 && idade < 10) {
                // Crianças
                img.setAttribute("src","bebe homem.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src","jovem homem.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src","adulto homem.png")
            } else {
                // Idoso
                img.setAttribute("src","idoso homem.png")
                }
        } else if (fsex[1].checked) {
                gênero = "Mulher"
                if (idade >=0 && idade < 10) {
                    // Crianças
                    img.setAttribute("src","bebe mulher.png")
                } else if (idade < 21) {
                    // Jovem
                    img.setAttribute("src","jovem mulher.png")
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute("src","adulto mulher.png")
                } else {
                    // Idoso
                    img.setAttribute("src","idoso mulher.png")
                }
        }    
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}
