var merge = function(nums1, m, nums2, n) {
  let nums1Iterator = 0;
  let nums2Iterator = 0;
  let resultIterator = 0;
  
  let nums1Copy = nums1.slice(0, m);
  let nums2Copy = [...nums2];
  
  while(nums1Iterator < m && nums2Iterator < n) {
    const num1 = nums1Copy[nums1Iterator];
    const num2 = nums2[nums2Iterator];
    
    if (num1 <= num2) {
      nums1[resultIterator] = num1;
      nums1Iterator += 1;
    } else {
      nums1[resultIterator] = num2;
      nums2Iterator += 1;
    }
    
    resultIterator += 1;
  }
  
  while(nums1Iterator < m) {
    const num1 = nums1Copy[nums1Iterator];
    nums1[resultIterator] = num1;
    nums1Iterator += 1;
    resultIterator += 1;
  }
  
  while(nums2Iterator < n) {
    const num2 = nums2[nums2Iterator];
    nums1[resultIterator] = num2;
    nums2Iterator += 1;
    resultIterator += 1;
  }
};
