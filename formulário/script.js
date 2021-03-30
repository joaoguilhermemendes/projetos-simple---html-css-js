function cadastrar() {
    var nome1 = document.getElementById('nome1').value
    var email1 = document.getElementById('email1').value
    var tel1 = document.getElementById('tel1').value
    var genero = document.getElementById('info1')
    var res = document.getElementById('res')

    if (nome1.length == 0 || email1.length == 0 || tel1.length == 0 ) {
        res.innerHTML = '[ERRO] Informações Erradas ou Incompatíveis'
        res.style.color = '#AB1C2F'
        res.style.textAlign = 'center'
        res.style.fontSize = '15px'
    }

    else {
        res.innerHTML = 'Cadastro realizado'
        res.style.color = 'green'
        res.style.textAlign = 'center'
    }

    
}