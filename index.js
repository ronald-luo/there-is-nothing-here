const dog = document.getElementById('dog')
dog.classList.add('invisible')

const inView = () => {
    return document.hidden
}

setInterval(() => {
    if (inView()) {
        dog.classList.add('visible')
        dog.classList.remove('invisible')
    } else {
        dog.classList.add('invisible')
        dog.classList.remove('visible')
    }
}, 1500)