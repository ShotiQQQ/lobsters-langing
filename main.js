
function reviewsSliderClick() {
    const reviewsSlider = document.querySelector(".reviews-cards-slider")
    const reviewsPrevBtn = document.querySelector("#reviews-next-button")
    const reviewsNextBtn = document.querySelector('#reviews-prev-button')

    const reviewsFirstCard = document.querySelectorAll(".reviews-card ")[0]
    let reviewsFirstCardWidth = reviewsFirstCard.clientWidth

    reviewsNextBtn.addEventListener('click', function(){
        reviewsSlider.scrollLeft -=  reviewsFirstCardWidth
    })

    reviewsPrevBtn.addEventListener('click', function(){
        reviewsSlider.scrollLeft +=  reviewsFirstCardWidth
    })
}

function stickyHeader() {
    window.onscroll = function() {myFunction()};

    const header = document.querySelector(".header");
    const hero = document.querySelector(".hero")

    let sticky = header.offsetTop;

    function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        hero.classList.add("hero-sticky-header")
    } else {
        header.classList.remove("sticky");
        hero.classList.remove("hero-sticky-header")
    }
    }

}


const otherCasesSwiper = new Swiper('.other-cases-slider', {
    navigation: {
        nextEl: '#other-cases-next-button',
        prevEl: '#other-cases-prev-button',
    },

    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 8
        },

        760: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },

        1020: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }

});

const reviewSwiper = new Swiper('.reviews-swiper', {
    navigation: {
        nextEl: '#reviews-next-button',
        prevEl: '#reviews-prev-button',
    },

    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 8
        },

        760: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },

        1020: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }

});



stickyHeader()
reviewsSliderClick()
