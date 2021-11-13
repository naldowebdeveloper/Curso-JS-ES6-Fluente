const ul = document.querySelector('ul')
// ul.remove()

// const button = document.querySelector('button')
// console.log(button)

// button.addEventListener('click', () => {
//     console.log('button clicked')
// })

const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickElement = event.target
        //clickElement.style.textDecoration = 'line-through'
        clickElement.remove()
    })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    
    li.textContent = 'Novo item'
    
    ul.append(li)
})