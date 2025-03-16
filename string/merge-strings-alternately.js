/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word="";
    let more="";
    if(word1.length>word2.length){
       more=word1.slice(word2.length)
       word1=word1.slice(0,word2.length)
    }else if(word1.length<word2.length){
       more+=word2.slice(word1.length)
       word2=word2.slice(0,word1.length)
    }
     for(var i=0;i<word1.length;i++){
            if(word1[i]>word2[i]){
                word+=word2[i]+word1[i];
            }else{
                word+=word1[i]+word2[i];
            }
        }
        word+=more;
        return word;
};