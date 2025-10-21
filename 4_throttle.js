// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/throttle


// 0ms      500ms        1500ms       2000ms        2500ms       4000ms
// |---------|-------------|------------|-------------|------------|
// A(lead)   B(call ignored) C(call ignored)  func(trail)   D(call scheduled) func(trail)


// Leading call → runs immediately if wait time has passed.
// Trailing call → runs at the end of wait period if a call was made during that period.
// Multiple rapid calls → only first and last (trailing) call execute within the throttle window.
// Preserves this context and arguments

/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
  let lastTime = 0;
  let timeoutId = null;

  return function (...args) {
    const now = Date.now();
    const remaining = wait - (now - lastTime);

    // enough time passed → run immediately
    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      func.apply(this, args);
      lastTime = now;
    }
    // schedule a trailing call
    else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastTime = Date.now();
        timeoutId = null;
      }, remaining);
    }
  };
}
