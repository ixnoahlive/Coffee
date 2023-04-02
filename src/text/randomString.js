/**
* Generates a pseudorandom string consisting of A-Z, a-z & 0-9
* @param {number} length The length of the random string
* @returns {string} A pseudorandom string
*/
function randomString(length = 8) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export default randomString
