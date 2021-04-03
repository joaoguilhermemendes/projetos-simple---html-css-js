var n = document.getElementById('num')
var l = document.getElementById('flista')
var res = document.getElementById('res')
var realnum = Number(n.value)
vetores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else { 
        window.alert(`${Number(n)} não está entre 1 e 100`)
        return false }
}

function isNew(n, l) {
    var teste = l.indexOf(Number(n))
    if (teste != -1 ){
        return true
    } else {
        window.alert(`${Number(n)}- pk`)
        return false
    }
}

function adicionar() {
    window.alert(Number(n.value))
    if (isNumber(n.value) && !isNew(n.value, vetores)) {
        vetores.push(Number(n.value))
        l.innerHTML =`Valor ${n.value} adicionado`
        window.alert(l)
 }
    else {window.alert('OPS')}
    
}
