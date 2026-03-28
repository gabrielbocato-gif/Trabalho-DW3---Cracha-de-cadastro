const enviar = document.querySelector("#btn");
const nome = document.querySelector("#nome_completo");
const curso = document.querySelector("#curso");
const nascimento = document.querySelector("#data_nascimento");
const telefone = document.querySelector("#telefone");
const foto = document.querySelector("#fotosua");
const input = querySelector("input")

addEventListener("click", () => {
    if (input.value == "") {
        input.classList.add('vazio')
    } else {
        input.classList.remove('vazio')
    }

    
})