const enviar = document.querySelector("#btn");
const nome = document.querySelector("#nome_completo");
const curso = document.querySelector("#curso");
const nascimento = document.querySelector("#data_nascimento");
const telefone = document.querySelector("#telefone");
const foto = document.querySelector("#fotosua");

enviar.addEventListener("click", () => {
    if (nome.value == "") {
        {
            nome.classList.add('vazio')
        }
    } else {
        nome.classList.remove('vazio')
    }

    if (curso.value == "") {
        {
            curso.classList.add('vazio')
        }
    } else {
        curso.classList.remove('vazio')
    }

    if (nascimento.value == "") {
        {
            nascimento.classList.add('vazio')
        }
    } else {
        nascimento.classList.remove('vazio')
    }

    if (telefone.value == "") {
        {
            telefone.classList.add('vazio')
        }
    } else {
        telefone.classList.remove('vazio')
    }

    if (foto.value == "") {
        {
            foto.classList.add('vazio')
        }
    } else {
        foto.classList.remove('vazio')
    }

    console.log(nome.value)
    console.log(curso.value)
    console.log(nascimento.value)
    console.log(telefone.value)
    console.log(foto.value)

})