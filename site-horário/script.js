function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var status = window.document.getElementById('status')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 1
    if ( min<9 ) {
        msg.innerHTML = `Agora são (${hora}:0${min})`}
    else {
        msg.innerHTML = `Agora são (${hora}:${min} horas)`}

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manhã.png'
        document.body.style.backgroundColor ='#ead3a3'
        status.innerHTML ='BOM DIA !!'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'tarde.png'
        document.body.style.backgroundColor ='#eca552'
        status.innerHTML ='BOA TARDE !!'
    } else {
        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.backgroundColor ='307cb8'
        status.innerHTML ='BOA NOITE !!'

    }
}