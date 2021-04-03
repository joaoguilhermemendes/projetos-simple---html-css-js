function Calcular() {
    alert('oi')
    let nom = document.getElementById('Nome').value
    let alt = document.getElementById('Altura').value
    let pes = document.getElementById('Peso').value
    let res = document.getElementById('flista')

    alert(nom)

    res.innerHTML = `Nome:${nome},     Altura:${alt},     Peso:${pes}`  







    var valt = Number(pes.value)
    var vpes = Number(pes.value)

    window.alert(nom.value)
    window.alert(Number(alt.value))
    window.alert(Number(pes.value))

    var imc = vpes / (valt*valt)
    window.alert(imc)

    res.innerHTML=`Olá ${nom.value}, seu IMC é de ---------- ${imc.value} Pontos`
    

}