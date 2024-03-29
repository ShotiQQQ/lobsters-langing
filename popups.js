function mobileMenuPopUp(){
    const header = document.querySelector(".header")
    const body = document.querySelector("body")
    const hero = document.querySelector(".top-hero")

    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileMenuButton = document.querySelector(".header-menu-button")
    const mobileMenuClose = document.querySelector("#mobile-menu-close")

    mobileMenuButton.addEventListener('click', function(){
        mobileMenu.classList.remove("hidden")
        header.classList.add("header-popup-active")
        body.classList.add("body-active-pop-up")
        hero.classList.add("hero-pop-up-displayed")
    })

    mobileMenuClose.addEventListener('click', function(){
        mobileMenu.classList.add("hidden")
        header.classList.remove("header-popup-active")
        body.classList.remove("body-active-pop-up")
        hero.classList.remove("hero-pop-up-displayed")
    })

}

function registrationPopUp(){
    const header = document.querySelector(".header")
    const body = document.querySelector("body")
    const beginWorkButtons = document.querySelectorAll("#begin-work-button")
    const registrationPopup = document.querySelector(".registration-popup")
    const registrationButton = document.querySelector(".registration-button")
    const registrationClose = document.querySelector("#registration-popup-close")
    const mobileRegistrationButton = document.querySelector("#mobile-registration-button")
    const mobileCloseButton = document.querySelector("#registration-popup-close")
    const mobileMenu = document.querySelector(".mobile-menu")
    const hero = document.querySelector(".top-hero")

    registrationButton.addEventListener('click', function(){
        registrationPopup.classList.remove("hidden")
        registrationPopup.classList.add("shown")
        mobileMenu.classList.add("hidden")
        body.classList.add("body-active-pop-up")
        header.classList.add("header-popup-active")
        hero.classList.add("hero-pop-up-displayed")
    })

    mobileRegistrationButton.addEventListener('click', function(){
        registrationPopup.classList.remove("hidden")
        registrationPopup.classList.add("shown")
        mobileMenu.classList.add("hidden")
        body.classList.add("body-active-pop-up")
        header.classList.add("header-popup-active")
        hero.classList.add("hero-pop-up-displayed")
    })

    for(let i = 0; i < beginWorkButtons.length; i++) {
        beginWorkButtons[i].addEventListener('click', function(){
            registrationPopup.classList.remove("hidden")
            registrationPopup.classList.add("shown")
            mobileMenu.classList.add("hidden")
            body.classList.add("body-active-pop-up")
            header.classList.add("header-popup-active")
            hero.classList.add("hero-pop-up-displayed")
        })
    }


    registrationClose.addEventListener('click', function(){
        registrationPopup.classList.remove("shown")
        registrationPopup.classList.add("hidden")
        mobileMenu.classList.add("hidden")
        body.classList.remove("body-active-pop-up")
        header.classList.remove("header-popup-active")
        hero.classList.remove("hero-pop-up-displayed")
    })

    mobileCloseButton.addEventListener('click', function(){
        registrationPopup.classList.remove("shown")
        registrationPopup.classList.add("hidden")
        mobileMenu.classList.add("hidden")
        body.classList.remove("body-active-pop-up")
        header.classList.remove("header-popup-active")
        hero.classList.remove("hero-pop-up-displayed")
    })
}

function registrationStatusList() {
    const statusList = document.querySelector(".status-list")
    const statusListOpen = document.querySelector(".registration-popup-dropdown-button")
    const statusListClose = document.querySelector("#status-list-close-button")

    statusListOpen.addEventListener('click', function(e){
        e.preventDefault()
        statusList.classList.remove("hidden")
        statusList.classList.add("shown")
    })

    statusListClose.addEventListener('click', function(e){
        e.preventDefault()
        statusList.classList.remove("shown")
        statusList.classList.add("hidden")
    })
}

function contactUsPopUp() {
    const hero = document.querySelector(".top-hero")
    const header = document.querySelector(".header")
    const contactUsButtons = document.querySelectorAll(".contact")
    const contactUsPopUp = document.querySelector(".contacts-us-popup")
    const registrationCloseButton = document.querySelector("#registration-popup-close")


    for(let i = 0; i < contactUsButtons.length; i++){
        contactUsButtons[i].addEventListener('click', function(){
            contactUsPopUp.classList.remove("hidden")
            header.classList.add("header-popup-active")
            hero.classList.add("hero-pop-up-displayed")
        })
    }

    registrationCloseButton.addEventListener('click', function(){
        contactUsPopUp.classList.add("hidden")
        header.classList.remove("header-popup-active")
        hero.classList.remove("hero-pop-up-displayed")
    })
}

contactUsPopUp()
mobileMenuPopUp()
registrationPopUp()
registrationStatusList()



// /----------------------------------------------------------

