/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch = (start, end, target, arr) => {
    if (end >= start) {
        const middle = Math.floor((end + start)/2);
        if (target === arr[middle]) {
            return middle;
        }
    
        if (target < arr[middle]) {
            return binarySearch(start, middle - 1, target, arr);
        }
    
        return binarySearch(middle + 1, end, target, arr);    
    }
    return -1;
}

var search = function(nums, target) {
    return binarySearch(0, nums.length, target, nums);
};