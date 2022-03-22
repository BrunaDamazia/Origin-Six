// abre e fecha o menu

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// quando clicar em um item no menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// mudar o header da pagina quando der scroll

function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if(this.window.scrollY >= navHeight) {

        header.classList.add('scroll')

    } else {

        header.classList.remove('scroll')

    }
}

// testimonials carousel slider swiper

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        990: {
            slidesPerView: 3, 
        }
    }

});

// scroll reveal - mostrar elementos quando der scroll na pagina

const scrollReveal = ScrollReveal ({
    origin : 'top',
    distance: '20px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    #footer .brand, #footer .social
    `,
    { interval: 100 }
  )

// button back to top
function backToTop() {
const backToTopButton = document.querySelector('.back-to-top')
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
})