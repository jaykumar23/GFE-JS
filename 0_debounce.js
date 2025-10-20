// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/debounce

/**
 * @param {Function} func - The function to debounce
 * @param {number} wait - Time in milliseconds to wait before calling func
 * @return {Function} - Returns a new debounced function
 */
export default function debounce(func, wait) {
    let timer; // store the timer ID for setTimeout

    // Return a new function that will be called instead of the original func
    return function(...args){
        // If this function is called again before wait ms, clear previous timer
        clearTimeout(timer);

        // Set a new timer to call func after wait ms
        timer = setTimeout(() => {
            // Call the original function with correct 'this' and latest arguments
            func.apply(this, args);
        }, wait);
    }
}
