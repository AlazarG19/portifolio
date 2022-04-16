// adding the hover effect on the images 
let images = document.querySelectorAll(".workimg")
let visits = document.querySelectorAll(".btn-visit")
let hoverMe = document.querySelector(".hoverme")
let downButton = document.querySelectorAll(".fa-chevron-up")
observer.observe(hoverMe)
    // downButton.forEach(
    //     (item)=>{
    //         observer.observe(item)

//     }
// )
downButton.forEach(
    (item) => {
        item.style.animation = `animateup 1.5s  infinite`
    }
)
visits.forEach((visit) => {
    visit.addEventListener("click", () => {
        window.open(visit.dataset.link, '_self')
    })
})
images.forEach((image) => {
    image.addEventListener("click", () => {
        window.open(image.dataset.link, '_self')
    })
    image.addEventListener("mouseover", () => {
        let width = window.innerWidth
        if (width > 700) {
            images.forEach(element => {
                if (element.dataset.name !== image.dataset.name) {
                    element.style.animation = "animation .7s linear forwards"
                } else {
                    let des = document.querySelector(`.${image.dataset.name}d${image.dataset.n}`)
                    element.style.animation = "scale .7s forwards"
                    des.style.animation = "animation4 .7s .3s forwards"
                }

            });
        }
    })
    image.addEventListener("mouseleave", () => {
        let width = window.innerWidth
        if (width > 700) {
            images.forEach(element => {
                if (element.dataset.name !== image.dataset.name) {
                    element.style.animation = "animation2 .7s forwards"
                } else {
                    let des = document.querySelector(`.${image.dataset.name}d${image.dataset.n}`)
                    element.style.animation = "scale2 .7s forwards"
                    des.style.animation = "animation3 .1s forwards"

                }
            });
        }
    })
})