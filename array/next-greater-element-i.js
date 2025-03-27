/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack=[];
    for(let i =0;i<nums1.length;i++){
        for(let j=nums2.indexOf(nums1[i]);j<nums2.length;j++){
            if(nums1[i]<nums2[j]){
                stack.push(nums2[j]);
                break;
            }else if(nums2.length-1==j){
                stack.push(-1);
                break;
            }
        }
    }
    return stack;
};