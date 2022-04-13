let animated = document.querySelectorAll(".animated")
let body = document.querySelector("body")
let card = document.querySelectorAll(".card")
    // console.log(card)
let observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
        if (item.intersectionRatio > 0) {
            item.target.style.animation = `animate 2s ${item.target.dataset.delay} forwards`
        }

        // else{
        //     item.target.style.animation = `none`
        // }
    })
})
animated.forEach((item) => {
    observer.observe(item)
})
card.forEach((item) => {
    observer.observe(item)
})
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let round = document.querySelector('.roundbtn')
let bg = document.querySelector('.bg-theme')
let header = document.querySelector(".header")
let wave = document.querySelector(".wave")
let wave2 = document.querySelector(".wave2")
let webimg = document.querySelector(".webappimage")
let mobileappimg = document.querySelector(".mobileapp-image")
let uiimage = document.querySelector(".uiimage")
let phonemockup = document.querySelector(".phoneimg")
let laptopmockup = document.querySelector(".laptopimg")
let desktopmockup = document.querySelector(".pcimg")
let tabletmockup = document.querySelector(".tabimg")
    // redundant code must be optimized later
header.style.background = "#f6fcfc"
round.style.left = '38px'
round.style.backgroundColor = '#ffff'
round.style.transition = '1s'
wave.style.backgroundImage = "url(" + "./images/wave2.svg " + " )"
wave2.style.backgroundImage = "url(" + "./images/wavenew2.svg " + " )"
bg.style.backgroundColor = '#333333'
bg.style.transition = '1s'
localStorage.setItem('theme', 'light')
body.classList.remove("dark")
body.classList.add("light")
laptopmockup.src = "./images/Laptop1.png"
desktopmockup.src = "./images/Computer1.png"
tabletmockup.src = "./images/Tablet1.png"
phonemockup.src = "./images/phone1.png"
    // end of redundant code 
round.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'light') {
        laptopmockup.src = "./images/Laptop11.png"
        desktopmockup.src = "./images/Computer11.png"
        tabletmockup.src = "./images/Tablet11.png"
        phonemockup.src = "./images/phone11.png"
        round.style.left = '3px'
        round.style.backgroundColor = 'black'
        round.style.transition = '1s'
            // console.log(bg)
        bg.style.backgroundColor = '#fff'
        bg.style.transition = '1s'
        console.log(wave)
        wave.style.backgroundImage = "url(" + "./images/wave1.svg " + " )"
        wave2.style.backgroundImage = "url(" + "./images/wavenew.svg " + " )"
            // background: url(./images/wave1.svg);
        localStorage.setItem('theme', 'dark')
        body.classList.remove("light")
        body.classList.add("dark")
        body.style.transition = "1s"
            // header.style.backgroundColor = "black"
        header.style.backgroundImage = "url(" + "./images/stars.jpg" + ")";
        // header.style.backgroundImage = "url(./images/stars.png);"
        // console.log(header.st)
        // uiimage.src = "./gif/UIWhite.gif"
        // webimg.src = "./gif/webwhitebg.gif"
        // mobileappimg.src = "./gif/MobileAppWhite.gif"
    } else {
        laptopmockup.src = "./images/Laptop11.png"
        desktopmockup.src = "./images/Computer11.png"
        tabletmockup.src = "./images/Tablet11.png"
        phonemockup.src = "./images/phone11.png"
        header.style.background = "#f6fcfc"
        round.style.left = '38px'
        round.style.backgroundColor = '#ffff'
        round.style.transition = '1s'
            // console.log("dark")
        wave.style.backgroundImage = "url(" + "./images/wave2.svg " + " )"
        wave2.style.backgroundImage = "url(" + "./images/wavenew2.svg " + " )"

        bg.style.backgroundColor = '#333333'
        bg.style.transition = '1s'
        localStorage.setItem('theme', 'light')
        body.classList.remove("dark")
        body.classList.add("light")
            // uiimage.src = "./gif/UIBlack.gif"
            // webimg.src = "./gif/webblackbg.gif"
            // mobileappimg.src = "./gif/MobleAppBlack.gif"

    }
})
let button = document.querySelector(".btn-seemore")
button.onclick = () => { console.log("hello") }