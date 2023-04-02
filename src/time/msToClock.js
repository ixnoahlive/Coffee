/**
 * Transforms milliseconds into a clock timestamp like 00:00
 * @param {number} ms An amount of time in milliseconds 
 * @returns {string} The clock time stamp (example: 1d + 01:19:12)
 * @author gdcolon.com / stolen function i don't actually know maths
 */
function msToClock(ms) {
    let secs = Math.ceil(Math.abs(ms) / 1000)
    if (secs < 0) secs = 0
    let days = Math.floor(secs / 86400)
    if (days) secs -= days * 86400
    let timestamp = `${ms < 0 ? "-" : ""}${days ? (days + "d + ") : ""}${[Math.floor(+secs / 3600), Math.floor(+secs / 60) % 60, +secs % 60].map(v => v < 10 ? "0" + v : v).filter((v, i) => v !== "00" || i > 0).join(":")}`
    if (timestamp.length > 5) timestamp = timestamp.replace(/^0+/, "")
    return timestamp
}

export default msToClock