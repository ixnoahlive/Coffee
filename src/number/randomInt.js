/**
* Documentation TBA, pseudorandom int generator
*/
function randomInt(inclusiveOrigin, inclusiveBound) {
    let min = Math.ceil(inclusiveOrigin)
    let max = Math.floor(exclusiveBound)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
