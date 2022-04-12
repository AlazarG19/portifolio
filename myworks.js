let images = document.querySelectorAll("img")
let hoverMe = document.querySelector(".hoverme")
let downButton = document.querySelectorAll(".fa-chevron-up")
observer.observe(hoverMe)
// downButton.forEach(
//     (item)=>{
//         observer.observe(item)
    
//     }
// )
downButton.forEach(
    (item)=>{
        console.log(item)
        item.style.animation = `animateup 1.5s  infinite`
    }
)
images.forEach((image)=>{
    image.addEventListener("mouseover",()=>{
        images.forEach(element => {
            if(element.dataset.name !== image.dataset.name){
                element.style.animation = "animation .7s linear forwards"
            }else{
                console.log(element.style.animation)
                let des = document.querySelector(`.${image.dataset.name}d${image.dataset.n}`)
                console.log(des)
                element.style.animation = "scale .7s forwards"
                des.style.animation = "animation4 .7s .3s forwards"
            }

       });
    })
    image.addEventListener("mouseleave",()=>{
        images.forEach(element => {
            if(element.dataset.name !== image.dataset.name){
                element.style.animation = "animation2 .7s forwards"
            }else{
                let des = document.querySelector(`.${image.dataset.name}d${image.dataset.n}`)
                element.style.animation = "scale2 .7s forwards"
                des.style.animation = "animation3 .1s forwards"

            }
       });})
})