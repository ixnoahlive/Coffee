/**
 * Picks a pseudorandom value from an array
 * @param {any[]} array Array to pick from 
 */
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

export default pickRandom