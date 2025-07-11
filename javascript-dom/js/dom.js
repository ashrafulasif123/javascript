

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
title.classList.add('prime-bg')
title.classList.remove('large-font')


/**
 * With innerHTML
 */
/* const primaryAll = document.getElementById('prime-container')
console.log(primaryAll) */


/**
 * Without innerHTML
 */

const primaryAll = document.getElementById('prime-container')
// console.log(primaryAll)
// console.log(primaryAll.childNodes)
// console.log(primaryAll.childNodes[3])
// console.log(primaryAll.childNodes[3].childNodes)
// console.log(primaryAll.childNodes[3].childNodes[3])
// console.log(primaryAll.childNodes[3].childNodes[3].previousSibling.previousSibling)



