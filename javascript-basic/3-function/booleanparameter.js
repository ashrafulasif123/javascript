function doubleOrTriple(number, doDouble) {
    if (doDouble) {
        return number * 2;
    }
    else {
        return number * 3
    }
}

console.log(doubleOrTriple(4, true));
console.log(doubleOrTriple(4, false));


