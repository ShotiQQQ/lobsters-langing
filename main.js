
function otherCasesSliderClick() {
    const otherCasesSlider = document.querySelector(".other-cases-cards-slider")
    const otherCasesPrevBtn = document.querySelector("#other-cases-next-button")
    const otherCasesNextBtn = document.querySelector('#other-cases-prev-button')

    const otherCasesFirstCard = document.querySelectorAll(".other-cases-card")[0]
    let otherCasesFirstCardWidth = otherCasesFirstCard.clientWidth

    otherCasesNextBtn.addEventListener('click', function(){
        otherCasesSlider.scrollLeft -=  otherCasesFirstCardWidth
    })

    otherCasesPrevBtn.addEventListener('click', function(){
        otherCasesSlider.scrollLeft +=  otherCasesFirstCardWidth
    })

}

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


stickyHeader()
otherCasesSliderClick()
reviewsSliderClick()
