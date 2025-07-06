

// const primeContainer = document.getElementById('prime-container')
// primeContainer.style.backgroundColor = 'orange'



const sections = document.querySelectorAll('section')
// console.log(sections)
// console.log(sections)
for (const section of sections) {
    section.style.border = "1px solid red"
    section.style.marginBottom = "5px"
    section.style.borderRadius = "15px"
    section.style.paddingLeft = "15px"
    section.style.backgroundColor = 'lightgray'
}

const title = document.getElementById('prime-container')
title.classList.add('text-center')
title.classList.remove('large-font')

const primaryHtml = document.getElementById('prime-container').innerHTML
console.log(primaryHtml)

