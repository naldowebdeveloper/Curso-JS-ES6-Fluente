const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.result')

const correctAnswers = ['B', 'B', 'B', 'B']

let score = 0

const getUserAnswers = () => {
    const userAnswers = [] 

    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })

    return userAnswers
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo(0, 0)
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }

        finalScoreContainer.querySelector('span').textContent = `${counter}%`
        counter++
    }, 10)  
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()

    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalScore()
})


