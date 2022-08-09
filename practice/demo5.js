/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let minValue = Number.MAX_SAFE_INTEGER
  let prevValue = 0
  for (let i = 0; i < nums.length; i++) { 
    let sumValue = prevValue + nums[i]
    if (sumValue < minValue) { 
      minValue = sumValue
    }
    prevValue = sumValue
  }
  return minValue >= 1 ? 1  : 1-minValue
}


console.log(minStartValue([1,2]))