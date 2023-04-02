/**
 * Converts a number into a commafied string version of that number
 * @param {number} number example: 10000000
 * @param {string} customDivider A custom divider to use instead of a comma
 * @returns {string} example: 10,000,000
 */
function commafy(number, customDivider = ',') {
    return number.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, customDivider);
}

export default commafy