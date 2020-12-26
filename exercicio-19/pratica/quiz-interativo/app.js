const form = document.querySelector('.quiz-form')

const repostasCertas = ['B','B','B','B']

form.addEventListener('submit', event => {
    event.preventDefault()

    let pontuacao = 0

    repostasUsuario = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    repostasUsuario.forEach((respUser, index) => {
        if(respUser === repostasCertas[index]){
            pontuacao += 25
        }
    }) 
    console.log(pontuacao)
})