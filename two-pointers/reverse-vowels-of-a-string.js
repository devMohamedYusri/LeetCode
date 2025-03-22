/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = s.match(/[aeiou]/gi);
    const all = new Set(['a', 'e', 'i', 'o', 'u']);
    const reversed=vowels.reverse();
    const strArray = Array.from(s);

    let result="";
    let j=0;

    for (let i=0;i<s.length;i++ ){
        if(all.has(strArray[i].toLowerCase())){
            strArray[i]=reversed[j];
            j++;
        }
    }
    return strArray.join("");
}