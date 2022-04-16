let languages = document.querySelectorAll(".languages > div ")
let choices = document.querySelectorAll(".choices > div")
let clear = ()=>{
  languages.forEach((language)=>{
    language.style.display = "none"
  })
}
let clearline = ()=>{
  let lines = document.querySelectorAll(".line")
  lines.forEach((line)=>{
    line.style.animation = "removeunderlining 0 forwards linear"
  })
}
clear()
clearline()

let line = document.querySelector(`.frontend >.line`)
clearline()
line.style.animation = "underlining .5s forwards linear"
let current = document.querySelector(`.frontend-languages`)
let childs = document.querySelectorAll(`.frontend-languages > div >div`)
clear()
childs.forEach((elements)=>{
  elements.style.animation = "spinning 1.5s forwards"
})

// adding the underline effect and changing languages 
current.style.display = "block"
choices.forEach((choice)=>{
  choice.onclick = ()=>{
    let line = document.querySelector(`.${choice.dataset.target} >.line`)
    clearline()
    // console.log(choice.dataset.target)
    if(choice.dataset.target === "other"){
      line.style.animation = "underlining2 .5s forwards linear"
      console.log()
    }else{
      line.style.animation = "underlining .5s forwards linear"
    }
    let current = document.querySelector(`.${choice.dataset.target}-languages`)
    let childs = document.querySelectorAll(`.${choice.dataset.target}-languages > div >div`)
    clear()
    childs.forEach((elements)=>{
      elements.style.animation = "spinning 1.5s forwards"
    })
    current.style.display = "block"
  }
})
