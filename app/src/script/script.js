// SLider animation

const sliderLine = document.querySelector('.main__payment-menu'),
    img = [...sliderLine.children],
    imgWidth = document.querySelector('.main__payment-burgers')
    prev = document.querySelector('#arrow-left'),
    next = document.querySelector('#arrow-right'),
    screen = window.matchMedia("(min-width:1100px)")

let position = 0
const nextSlide = () => {
    if (screen.matches && position < ((img.length - 3) * imgWidth.clientWidth)) {
        position += imgWidth.clientWidth
        console.log('asd');
    } else if (!screen.matches && position < ((img.length - 2) * imgWidth.clientWidth)){
        position += imgWidth.clientWidth
        console.log('dd');
    } else{
        position = 0
    }

    img.forEach(item => {
        item.style.transform = `translateX(-${position}px)`
        item.style.transition = '1s'
    })
}

const prevSlide = () => {
    if (position > 0) {
        position -= imgWidth.clientWidth
    } else if(screen.matches) {
        position += ((img.length - 3) * imgWidth.clientWidth)
    } else{
        position += ((img.length - 2) * imgWidth.clientWidth)
    }

    img.forEach(item => {
        item.style.transform = `translateX(-${position}px)`
        item.style.transition = '1s'
    })
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)


img.forEach(slide => {
    slide.addEventListener('click', () => {
        removeActiveClass()
        slide.classList.add('active')
    })
})

function removeActiveClass() {
    img.forEach(slide => {
        slide.classList.remove('active')
    })
}