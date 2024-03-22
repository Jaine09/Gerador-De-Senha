let sliderElement = document.querySelector('#slider');
let buttonElemenet = document.querySelector('#button');

let tamanhoSenha = document.querySelector('#valor');
let senha = document.querySelector('#senha');

let containerSenha = document.querySelector('#container-senha');

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
let novaSenha = "";

tamanhoSenha.innerHTML = sliderElement.value

slider.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha(){
    let pass = "";
    for(let i = 0, n = caracteres.length; i < sliderElement.value; i++){
        pass += caracteres.charAt(Math.floor(Math.random()* n))
    }

    containerSenha.classList.remove("hide");
    // console.log(pass);
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha(){
    alert("Senha copiada com sucesso!!");
    navigator.clipboard.writeText(novaSenha);
}
