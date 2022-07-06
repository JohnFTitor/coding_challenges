/**
 * @param {number[]} nums
 * @return {number}
 */

let iterativeSolution = (nums) => {
  let maxSum = nums[0];
  let current = maxSum;
  for (let i = 1;  i < nums.length; i += 1) {
    current = Math.max(current + nums[i], nums[i]);
    maxSum = Math.max(current, maxSum);
  }
  return maxSum;
}


var maxSubArray = function(nums) {
    return iterativeSolution(nums);
};