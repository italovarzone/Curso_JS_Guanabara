function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var  img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homem_crianca.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'homem_jovem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'homem_adulto.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'homem_idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'mulher_crianca.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'mulher_jovem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'mulher_adulta.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)

    }

}