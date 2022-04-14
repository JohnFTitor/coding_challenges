/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// https://leetcode.com/problems/two-sum/

let n_square_solution = (nums, target) => {
  let auxiliar = nums.map((element) => target - element);
  for (let index = 0; index < nums.length; index++) {
    let element = auxiliar[index];
    presence = nums.indexOf(element);
    console.log(presence);
    if (presence > -1 && presence !== index) {
      return [presence, index];
    } 
  }
}

let n_solution = (nums, target) => {
  let map = new Map
  for (let index = 0; index < nums.length; index++) {
    let element = nums[index];
    let searchable = target - element;
    
    if (map.has(searchable)) {
      return [map.get(searchable), index];
    }
    
    map.set(element, index);
  }
}

var twoSum = function(nums, target) {
  return n_solution(nums, target);
};
