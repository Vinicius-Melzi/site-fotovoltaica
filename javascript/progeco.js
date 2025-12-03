

let resposta = document.getElementById('resposta')

function principal(){


    let kW = Number(document.getElementById('kW').value)
    let tarifakW = Number(document.getElementById('tarifakW').value)
    let eco = kW * tarifakW

console.log(eco)

resposta.innerHTML = ``
resposta.innerHTML += `Parabéns! Você economizou: ${eco} Kw<br>`

}

