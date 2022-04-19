let iteratorSolution = (nums) => {
  let maxSum = nums[0];
  let current = maxSum;
  for (let i = 1;  i < nums.length; i += 1) {
    current = Math.max(current + nums[i], nums[i]);
    maxSum = Math.max(current, maxSum);
  }
  return maxSum;
}


let crossingArray = (array, middle, start, end) => {
  let sum = 0;
  let leftSum = -Number.MAX_VALUE;
  
  for (let i = middle; i >= start; i -= 1) {
    num = array[i];
    sum += num;
    
    if (sum > leftSum) {
      leftSum = sum;
    }
  }
  
  sum = 0;
  let rigthSum = -Number.MAX_VALUE;
  
  for (let i = middle + 1; i <= end; i += 1) {
    num = array[i];
    sum += num;
    
    if (sum > rigthSum) {
      rigthSum = sum;
    }
  }
  
  return leftSum + rigthSum;
}



let recursiveSolution = (array, start, end) => {
  if (start === end) {
    return array[start];
  }
  
  let middle = Math.round((start + end)/2);
  
  
  let leftMaxSum = recursiveSolution(array, start, middle - 1);
  let rigthMaxSum = recursiveSolution(array, middle, end);
  let crossingArrayMaxSum = crossingArray(array, middle - 1, start, end);
  
  return Math.max(leftMaxSum, rigthMaxSum, crossingArrayMaxSum);
}

var maxSubArray = function(nums) {
  return recursiveSolution(nums, 0, nums.length - 1);
};
