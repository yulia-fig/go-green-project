window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        const header = document.querySelector('.header')
        header.classList.add("black-background")
    } else {
        const header = document.querySelector('.header')
        header.classList.remove("black-background")
    }
})