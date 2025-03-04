const adaptacao = '<img src="imagens/adaptacao.png">'
const sucesso = '<img src="imagens/sucesso.png">'
const pressao = '<img src="imagens/pressao.png">'
const nada = "<p></p>"

const d6 = [ 
    nada, 
    nada, 
    pressao, 
    pressao + adaptacao, 
    pressao + adaptacao, 
    sucesso]

const d10 = [ 
    nada, 
    nada, 
    pressao, 
    pressao + adaptacao, 
    pressao + adaptacao, 
    sucesso, 
    sucesso + sucesso, 
    sucesso + adaptacao, 
    sucesso + pressao + adaptacao, 
    sucesso + sucesso + pressao]

const d12 = [ 
    nada, 
    nada, 
    pressao, 
    pressao + adaptacao, 
    pressao + adaptacao, 
    sucesso, 
    sucesso + sucesso, 
    sucesso + adaptacao, 
    sucesso + pressao + adaptacao, 
    sucesso + sucesso + pressao, 
    sucesso + adaptacao + adaptacao + pressao, 
    pressao + pressao]



function rolar() {
    let dado6 = document.getElementById("dado6").value
    let dado10 = document.getElementById("dado10").value
    let dado12 = document.getElementById("dado12").value

    rolar6(dado6)
    rolar10(dado10)
    rolar12(dado12)
}



function rolar6(dado6) {
    var rolagens = ""
    
    for (let i = 0; i < dado6; i++) {
        const index = Math.floor(Math.random() * d6.length);
        index >= 2 ? rolagens += `<div class="d">${d6[index]}</div>` : rolagens += `<div class="d">${d6[index]}</div>`         
    }
    document.getElementById("resultado6").innerHTML = rolagens
}

function rolar10(dado10) {
    var rolagens = ""
    
    for (let i = 0; i < dado10; i++) {
        const index = Math.floor(Math.random() * d10.length);
        index >= 2 ? rolagens += `<div class="d">${d10[index]}</div>` : rolagens += `<div class="d">${d10[index]}</div>`        
    }
    document.getElementById("resultado10").innerHTML = rolagens
}

function rolar12(dado12) {
    var rolagens = ""
    
    for (let i = 0; i < dado12; i++) {
        const index = Math.floor(Math.random() * d12.length);
        index >= 2 ? rolagens += `<div class="d">${d12[index]}</div>` : rolagens += `<div class="d">${d12[index]}</div>`       
    }
    document.getElementById("resultado12").innerHTML = rolagens
}