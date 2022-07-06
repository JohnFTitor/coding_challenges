/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// target = a + b

// b = target - a

/* 
    map = {
        7 : 0 
    }    

    is a inside map?
        b = map.get(a) = 2
        return [a,b] [1, 0]
    if it's not
        ourB = target - a
        map.set (ourB, a)
*/

var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        const mapIndex = map.get(num);
        if (mapIndex === undefined) {
            const secondNumber = target - num;
            map.set(secondNumber, i);
        } else {
            return [mapIndex, i];
        }
    }
};