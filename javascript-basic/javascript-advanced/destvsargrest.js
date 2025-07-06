const numbers = ([a, b, ...abc]) => {
    console.log(abc)
}
numbers([45, 12, 47, 58, 98])
// ---------------------------
const numbers2 = (a, b, ...abc) => {
    console.log(abc)
}
numbers2(45, 12, 47, 58, 98)