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
            slidesPerView: 2,
            spaceBetween: 20
        },

        1020: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }

});

const initSwiperPopup = () => {
    const popupReviewsSwiper = new Swiper('.reviews-popup__wrapper', {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: '.reviews-popup-pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '#popup-reviews-next-button',
            prevEl: '#popup-reviews-prev-button',
        },
    })

    addListenerReviews(popupReviewsSwiper);

}

const addListenerReviews = (swiper) => {
    const reviews = document.querySelectorAll('[data-number]');
    const popup = document.querySelector('.reviews-popup');

    reviews.forEach(review => {
        review.addEventListener('click', function(event) {
            if (event.target.classList.contains('reviews-card-company')) {
                return null;
            } else {
                document.body.classList.add('body-active-pop-up');
                document.querySelector('header').classList.add('header-popup-active');
                popup.classList.add('reviews-popup_active');
                popup.addEventListener('click', popup => {
                    if (popup.target.classList.contains('reviews-popup_active')) {
                        document.body.classList.remove('body-active-pop-up');
                        document.querySelector('header').classList.remove('header-popup-active');
                        popup.target.classList.remove('reviews-popup_active');
                    }
                })
                const indexOfSlide = +this.getAttribute('data-number') - 1;
                swiper.slideTo(indexOfSlide);
            }
        })
    })
}

initSwiperPopup();

stickyHeader()
