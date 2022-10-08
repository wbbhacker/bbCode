var frequencySort = function (nums) {
  if (nums.length <= 1) return nums
  const dict = {}
  nums.forEach((item, idx) => {
    if (dict[item] === undefined) {
      dict[item] = {}
      dict[item].key = item
      dict[item].value = [item]
    } else {
      dict[item].value.push(item)
    }
  })
  const arr = Object.values(dict).sort((a, b) => {
    if (a.value.length > b.value.length) {
      return 1
    } else if (a.value.length < b.value.length) {
      return -1
    } else {
      return a.key < b.key ? 1 : -1
    }
  })

  return arr.reduce((prev, current) => {
    return prev.concat(current.value)
  }, [])
};


console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]))