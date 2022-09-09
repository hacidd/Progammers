document.addEventListener('DOMContentLoaded', function(){
const nav = document.querySelector('.navbar')
const allNavItems = document.querySelectorAll('.nav-link')
const navShow = document.querySelector('.navbar-collapse')
function addShadow(){
    if (window.scrollY >= 200){
        nav.classList.add('shadow-bg')
    } else {
        nav.classList.remove('shadow-bg')
    }
}

allNavItems.forEach(item => item.addEventListener('click', () => navShow.classList.remove('show'))) 
// na zmienną nadajemy pętle forEach ktora nasluchuje na klik w kazdy link i usówa klase .show
window.addEventListener('scroll', addShadow)
})