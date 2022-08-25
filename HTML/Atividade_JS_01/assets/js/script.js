var nome= window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var nomeOk = false
var emailOk = false
var assuntoOk = false
var mapa = document.querySelector("#mapa")

function validaNome()  {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
       
    }

}

function validaEmail(){
    let txtEmail =  document.querySelector('#txtEmail')

    if (email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido!'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Nome válido!'
        txtEmail.style.color = 'green'
        emailOk = true
       
    }
}

function validaAssunto(){
    let txtAssunto =  document.querySelector('#txtAssunto')

    if (assunto.value.length >=100){
        txtAssunto.innerHTML = 'Seu texto é muto grande digite no máximo 100 caracteries!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true & emailOk == true & assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente!')
    }
}

function mapaZoom() {
mapa.style.width = '800px'
mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '300px'
    mapa.style.height = '200px'
}