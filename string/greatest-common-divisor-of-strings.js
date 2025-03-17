/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
    let x="";
    let len1=str1.length;
    let len2=str2.length;
    let check1=str1+str2;
    let check2 =str2+str1;
    if(check1==check2){
       let g= gcd(len1,len2);
       x=str1.slice(0,g)
    }

    return x;
};