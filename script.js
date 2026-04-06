const enviar = document.querySelector("#btn");

const nome = document.querySelector("#nome_completo");
const curso = document.querySelector("#curso");
const nascimento = document.querySelector("#data_nascimento");
const telefone = document.querySelector("#telefone");
const foto = document.querySelector("#fotosua");

const base_cracha = document.querySelector("#base_cracha")

const nome_out = document.querySelector("#nome_out");
const curso_out = document.querySelector("#curso_out");
const nascimento_out = document.querySelector("#data_out");
const tel_out = document.querySelector("#tel_out");
const foto_out = document.querySelector("#foto_out");


enviar.addEventListener("click", () => {

    let formularioValido = true;

    if (nome.value == "") {
        {
            nome.classList.add('vazio')
            formularioValido = false
        }
    } else {
        nome.classList.remove('vazio')
    }

    if (curso.value == "") {
        {
            curso.classList.add('vazio')
            formularioValido = false
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
            formularioValido = false
        }
    } else {
        telefone.classList.remove('vazio')
    }

    if (foto.value == "") {
        {
            foto.classList.add('vazio')
            formularioValido = false
        }
    } else {
        foto.classList.remove('vazio')
    }

if (formularioValido) {
    base_cracha.classList.add("base_cracha");
} else {
    base_cracha.classList.remove("base_cracha");
}

    let nome_insert = document.createElement("b");
    nome_out.innerHTML = "";
    nome_insert.textContent = (nome.value);
    nome_out.appendChild(nome_insert);

    let curso_insert = document.createElement("b");
    curso_out.innerHTML = "";
    curso_insert.textContent = (curso.value);
    curso_out.appendChild(curso_insert);

    let nascimento_insert = document.createElement("i");
    nascimento_out.innerHTML = "";
    nascimento_insert.textContent = (nascimento.value);
    nascimento_out.appendChild(nascimento_insert);

    let tel_insert = document.createElement("i");
    tel_out.innerHTML = "";
    tel_insert.textContent = (telefone.value);
    tel_out.appendChild(tel_insert);

    let foto_insert = document.createElement("img");
    foto_out.innerHTML = "";
    foto_insert.src = URL.createObjectURL(foto.files[0])
    foto_insert.classList.add('foto_insert')
    foto_out.appendChild(foto_insert)

    console.log(nome.value)
    console.log(curso.value)
    console.log(nascimento.value)
    console.log(telefone.value)
    console.log(foto.value)

})