// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/array-reduce

/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if(typeof callbackFn != 'function'){
    throw new TypeError(callbackFn + "is not a function")
  }

  const arr = this
  let acc 
  let startIndex

  if(arguments.length >= 2){
    acc = initialValue;
    startIndex = 0;
  }else{
   // find first non-sparse element - [1,2,,4] -> hume first as acc & startIndex uska next chaiye 
    let found = false;
    for(let i = 0; i < arr.length; i++) {
      if(i in arr) {
        acc = arr[i];
        startIndex = i + 1;
        found = true;
        break;
      }
    }
    if (!found) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
  }

  for(let i=startIndex; i<arr.length; i++){
    if(i in arr) {  // sparse elements ke liye check
      acc = callbackFn(acc, arr[i], i, arr);
    }
  }
  return acc;
};
