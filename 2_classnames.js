// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/classnames

/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const classNames = [];

  const process = (arg) =>{
    if(!arg) return;
    if(typeof arg ==='string' || typeof arg === 'number'){
      classNames.push(arg);
    }
    else if(Array.isArray(arg)){
      arg.forEach(process);
    }else if(typeof arg== 'object'){
      for(const key in arg){
        if(arg[key]){
          classNames.push(key);
        }
      }
    }
  }

    args.forEach(process);
    return classNames.join(' ')
}
