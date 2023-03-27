let hambueger = document.querySelector('.hamburger')
let slideMenu = document.querySelector('.slideMenu')
let slideMenu__hamburger  = document.querySelector('.slideMenu__hamburger')

let menu_close = document.querySelectorAll('.menu_close')
for(let i = 0; i < menu_close.length; i++) {
    menu_close[i].addEventListener('click', () => {
        slideMenu.classList.toggle('active')

        hambueger.classList.remove('active')
    })
}

hambueger.addEventListener('click', () => {
    hambueger.classList.add('active')
    slideMenu.classList.add('active')

    if(slideMenu__hamburger.classList.contains('unactive')) {
        slideMenu__hamburger.classList.remove('unactive')
    }
})

slideMenu__hamburger.addEventListener('click', () => {
    slideMenu__hamburger.classList.add('unactive')
    hambueger.classList.remove('active')
    slideMenu.classList.remove('active')
})