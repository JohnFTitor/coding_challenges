/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 
 
 // https://leetcode.com/problems/intersection-of-two-arrays-ii/
 
 
var intersect = function(nums1, nums2) {
  let result = [];
  let iterator1 = 0;
  let iterator2 = 0;
  
  nums1.sort((a,b) => a - b);
  nums2.sort((a,b) => a - b);
  
  while(iterator1 < nums1.length && iterator2 < nums2.length) {
    const num1 = nums1[iterator1];
    const num2 = nums2[iterator2];
    
    if (num1 === num2) {
      result.push(num1);
      iterator1 += 1;
      iterator2 += 1;
    } else if (num1 > num2) {
      iterator2 += 1;
    } else {
      iterator1 += 1;
    }
  }
  return result;
};
