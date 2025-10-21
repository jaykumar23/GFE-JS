// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/flatten


/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  const result = [];

  for(const item of value){
    if(Array.isArray(item)){
      result.push(...flatten(item));
    }else{
      result.push(item);
    }
  }
  return result;
}
