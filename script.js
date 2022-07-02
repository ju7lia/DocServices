let btn = document.getElementById('btn_mobile')
btn.addEventListener('click', clicou)
btn.addEventListener('touchstart', clicou)

function clicou(event) {
    if (event.type === 'touchstart') 
        event.preventDefault() 
        const nav = document.querySelector('nav#navHeader')
        nav.classList.toggle('active')
        const active = nav.classList.contains('active')
        event.currentTarget.setAttribute('aria-expanded' , active)
   if (active) {
        event.currentTarget.setAttribute('aria-label' , 'fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label' , 'abrir menu')
    } 
}