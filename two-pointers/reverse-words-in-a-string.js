/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words=s.split(' ').reverse().join(' ').trim().replace(/\s+/g, " ");
    return words;
};