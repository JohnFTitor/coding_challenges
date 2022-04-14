/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  let auxiliar = nums.map((element) => target - element);
  for (let index = 0; index < nums.length; index++) {
    let element = auxiliar[index];
    presence = nums.indexOf(element);
    console.log(presence);
    if (presence > -1 && presence !== index) {
      return [presence, index]
    } 
  }
};
