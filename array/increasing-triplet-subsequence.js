/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length<3){
        return false;
    }
    let x=nums[0],y=nums[1],z=nums[2];
    for(let i =1; i<(nums.length-1);i++){
        if(x<y && y<z){
            return true;
        }else{
            x=nums[i-1];
            y=nums[i];
            z=nums[i+1];
        }
         if(x<y && y<z){
            return true;}
    }
    return false;

};