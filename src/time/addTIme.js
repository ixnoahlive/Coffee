// @important DO NOT INPUT MS, USE A DATE. PLEASE USE A DATE. LIKE A PURE DATE. VIRGIN. UNTOUCHED. IF I GET ONE PING IN THE CT DISCORD FOR THIS FUNCTION NOT WORKING BECAUSE YOU TYPED DATE.NOW() I WILL NOT HEAR YOU OUT. ACTUALLY, I'LL CODE IN A BLACKLIST AND ADD YOUR MODULE. HOW ABOUT THAT? YOU DO NOT DESERVE ACCESS TO A COMPUTER! FUCK YOU!
/**
 * Adds milliseconds to a Date
 * @param {Date} date The date to modify
 * @param {number} ms The amount of ms to add to the date 
 * @returns {Date} Result
 */
function addTime(date, ms) {
    return new Date(date.getTime() + ms)
}

export default addTime