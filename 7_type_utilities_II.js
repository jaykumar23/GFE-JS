// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/type-utilities-ii

export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isObject(value) {
  return value !== null && (typeof value === "object" || typeof value === "function");
}

export function isPlainObject(value) {
  if (!isObject(value)) return false;
  // ensures it’s a regular object created by {} or new Object(), not arrays or instances of classes.
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}
