// Hambuger
const hambuger = document.querySelector('#hambuger')
const navMenu = document.querySelector('#nav-menu')

hambuger.addEventListener('click', function(){
    hambuger.classList.toggle('hambuger-active')
    navMenu.classList.toggle('hidden')
})

window.onscroll = () => {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}