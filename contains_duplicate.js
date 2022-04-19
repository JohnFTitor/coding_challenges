var containsDuplicate = function(nums) {
    let map = new Map()
    
    for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      if (map.has(num)) {
        return true;
      } else {
        map.set(num, 1)
      }
    }
    return false
};
