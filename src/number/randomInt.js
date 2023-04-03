/**
* Generates a pseudorandom integer with min & max values
* @param {number} inclusiveOrigin The lowest possible number
* @param {number} exclusiveBound The maximum number, keep in mind it is exclusive and will not be picked.
* @returns {number} The pseudorandom integer
*/
function randomInt(inclusiveOrigin = 0, exclusiveBound) {
    return Math.random() * (max - min) + min;
}

export default randomInt