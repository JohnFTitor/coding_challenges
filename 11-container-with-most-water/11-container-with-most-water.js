/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxValue = 0;
    
    while (start !== end) {
        const distance = end - start;
        let currentMax;
        
        if (height[start] <= height[end]) {
            currentMax = height[start] * distance;
            start += 1;
        } else {
            currentMax = height[end] * distance;
            end -= 1;
        }
        
        maxValue = Math.max(maxValue, currentMax);
    }
    
    return maxValue;
};