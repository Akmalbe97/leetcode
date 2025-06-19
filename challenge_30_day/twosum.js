/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let newMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let secondNum = target - nums[i];
    if (newMap.has(secondNum)) {
      return [newMap.get(secondNum), i];
    }
    newMap.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([2, 10, 25, 15, 28, 36, 10, 2, 7], 22));
