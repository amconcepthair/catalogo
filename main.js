function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

//Função para alterar valores do article
const btnAndreia = document.querySelector('.btn-andreia')
const divAndreia = document.querySelector('#aesthetics-andreia')
const btnCyntia = document.querySelector('.btn-cyntia')
const divCyntia = document.querySelector('#aesthetics-cyntia')

btnAndreia.addEventListener('click', () => {
    if (divAndreia.classList.contains('hidden')) {
        divAndreia.classList.remove('hidden')
        divCyntia.classList.add('hidden')
    }
})

btnCyntia.addEventListener('click', () => {
    if (divCyntia.classList.contains('hidden')) {
        divCyntia.classList.remove('hidden')
        divAndreia.classList.add('hidden')
    }
})

const backToTop = document.querySelector('#back-to-top')

backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

//Scroll reveal
ScrollReveal().reveal('#home', { delay: 200, origin:'top', distance: '300px' });
ScrollReveal().reveal('#services article', { delay: 200, origin:'bottom', distance: '300px' });
ScrollReveal().reveal('footer a', { delay: 200, origin:'bottom', distance: '300px' });
