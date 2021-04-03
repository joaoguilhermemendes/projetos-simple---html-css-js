function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente ')
        
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade<13){ img.setAttribute('src', 'menino.jpeg') 
            } else if (idade < 21) { img.setAttribute('src', 'jovemh.jpeg')
            } else if (idade < 50) { img.setAttribute('src', 'adultoh.jpeg')
            } else {img.setAttribute('src', 'idoso.jpeg')}

        } else { genero= 'Feminino'    
        if (idade >=0 && idade<13) { img.setAttribute('src', 'menina.png')
        } else if (idade < 21) { img.setAttribute('src', 'jovemm.jpeg')
        } else if (idade < 50) { img.setAttribute('src', 'adultom.jpeg')
        } else {img.setAttribute('src', 'idosa.jpeg')}
        }


        res.style.textAlign = 'center'
        res.innerHTML = `Dados captados - ${genero} de ${idade} anos`
        res.appendChild(img)
    }

}