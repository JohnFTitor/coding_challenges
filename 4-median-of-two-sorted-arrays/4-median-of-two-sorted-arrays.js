/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let resultArray = [];
    
    while (true) {
        
        if (nums1.length  === 0) {
            resultArray = resultArray.concat(nums2);
            break;
        }
        
        if (nums2.length  === 0) {
            resultArray = resultArray.concat(nums1);
            break;
        }
        
        if (nums1[0] <= nums2[0]) {
            resultArray.push(nums1.shift());
        } else {
            resultArray.push(nums2.shift());
        }
    }
    
    const size = resultArray.length;
    const midPoint = Math.floor(size / 2);
    let median = 0;
    
    if (size % 2 === 0) {
        median = (resultArray[midPoint] + resultArray[midPoint - 1]) / 2; 
    } else {
        median = resultArray[midPoint];
    }
    
    return median;
};