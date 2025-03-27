/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    const opened=['(','{','['];
   const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for(const i of s){
        if(opened.includes(i)){
            stack.push(i)
        }else{
           const top=stack.pop();
           if(top!==bracketPairs[i]){
            return false;
           }
        }
    }

    return stack.length === 0;
};