const d6 = [ 
    "nada", 
    "nada", 
    "pressão", 
    "pressão e adaptação", 
    "pressão e adaptação", 
    "sucesso"]

const d10 = [ 
    "nada", 
    "nada", 
    "pressão", 
    "pressão e adaptação", 
    "pressão adaptação", 
    "sucesso", 
    "sucesso sucesso", 
    "sucesso adaptação", 
    "sucesso pressão adaptação", 
    "sucesso sucesso pressão"]

const d12 = [ 
    "nada", 
    "nada", 
    "pressão", 
    "pressão e adaptação", 
    "pressão e adaptação", 
    "sucesso", 
    "sucesso sucesso", 
    "sucesso adaptação", 
    "sucesso pressão adaptação", 
    "sucesso sucesso pressão", 
    "sucesso adaptação adaptação pressão", 
    "pressão pressão"]



function rolar() {
    let dado6 = document.getElementById("dado6").value
    let dado10 = document.getElementById("dado10").value
    let dado12 = document.getElementById("dado12").value

    if (dado6 > 0) rolar6(dado6)
    if (dado10 > 0) rolar10(dado10)
    if (dado12 > 0) rolar12(dado12)
}



function rolar6(dado6) {
    var rolagens = ""
    
    for (let i = 0; i < dado6; i++) {
        const index = Math.floor(Math.random() * d6.length);
        rolagens += `<p>${d6[index]}</p>` 
        console.log(rolagens)           
    }
    document.getElementById("resultado6").innerHTML = rolagens
}

function rolar10(dado10) {
    var rolagens = ""
    
    for (let i = 0; i < dado10; i++) {
        const index = Math.floor(Math.random() * d10.length);
        rolagens += `<p>${d10[index]}</p>` 
        console.log(rolagens)           
    }
    document.getElementById("resultado10").innerHTML = rolagens
}

function rolar12(dado12) {
    var rolagens = ""
    
    for (let i = 0; i < dado12; i++) {
        const index = Math.floor(Math.random() * d12.length);
        rolagens += `<p>${d12[index]}</p>` 
        console.log(rolagens)           
    }
    document.getElementById("resultado12").innerHTML = rolagens
}