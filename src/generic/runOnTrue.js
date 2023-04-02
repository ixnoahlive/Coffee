/**
 * Creates a seperate thread to run a function when a condition is met
 * @param {() => boolean} conditionCallback A function that **must** return a boolean, if it returns true it runs the callback
 * @param {() => void} callback Runs when condition is met 
 * @param {number} refreshRateInMs Amount of time between checks
 * @example runOnTrue(() => World.isLoaded(), runMeWhenWorldLoads, 1000)
 */
function runOnTrue(conditionCallback, callback, refreshRateInMs) {
    new Thread(() => {
      while (!conditionCallback()) {
            Thread.sleep(refreshRateInMs)
            continue;
        }
        callback();
    }).start()
}

export default runOnTrue
