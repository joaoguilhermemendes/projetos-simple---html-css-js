
function milimetro() {
    let resultado = document.querySelector('div#res')
    let mm = document.getElementById("valor1").value
    let smm = mm*1000
    resultado.innerHTML = `${smm} - Milímetros`
    resultado.style.color = '#45B4E0'
}

function centimetro() {
    let resultado = document.querySelector('div#res')
    let cm = document.getElementById('valor1').value
    let scm = cm*100
    resultado.innerHTML = `${scm} - Centímetros`
    resultado.style.color = '#45B4E0'
}

function decimetro() {
    let resultado = document.querySelector('div#res')
    let dm = document.getElementById('valor1').value
    let sdm = dm*10
    resultado.innerHTML = `${sdm} - Decímetros`
    resultado.style.color = '#45B4E0'
}

function decametro() {
    let resultado = document.querySelector('div#res')
    let dam = document.getElementById('valor1').value
    let sdam = dam/10
    resultado.innerHTML = `${sdam} - Decâmetros`
    resultado.style.color = '#45B4E0'
}

function hectometro() {
    let resultado = document.querySelector('div#res')
    let hm = document.getElementById('valor1').value
    let shm = hm/100
    resultado.innerHTML = `${shm} - Hectômetros`
    resultado.style.color = '#45B4E0'
}

function quilometro() {
    let resultado = document.querySelector('div#res')
    let km = document.getElementById('valor1').value
    let skm = km/1000
    resultado.innerHTML = `${skm} - Quilômetro`
    resultado.style.color = '#45B4E0'
}
