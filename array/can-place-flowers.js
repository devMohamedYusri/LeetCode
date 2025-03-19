/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed[0]==flowerbed[1]==1){
        n--;
    }
    for (let i =1 ;i<flowerbed.length-1;i++){
        if(flowerbed[i-1]==flowerbed[i]==flowerbed[i+1]==0){
            n--;
        }
    }

    return n==0
};