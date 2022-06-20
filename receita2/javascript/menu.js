var btnMobile = document.getElementById("btn-mobile")

function toggleMenu(){
    var nav = document.getElementById("nav")
    nav.classList.toggle('active')
}
btnMobile.addEventListener("click", toggleMenu)