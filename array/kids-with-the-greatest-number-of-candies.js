/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let mx=candies[0];
    let newArray=new Array(candies.length).fill(false);
    for(let i=1;i<candies.length;i++){
        if(candies[i]>mx){
            mx=candies[i];
        }
    }


    for(let i=0;i<candies.length;i++){
            if((candies[i]+extraCandies)>=mx){
                newArray[i]=true;
            }
        }
        return newArray;
};