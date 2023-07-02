var validPalindrome = function (s) {
  let low = 0;
  let high = s.length - 1
  while (low < high) {
    if (s[low] === s[high]) {
      low++
      high--
    } else {
      return isValid(s, low + 1, high) || isValid(s, low, high - 1)
    }
  }

  function isValid(s, low, high) {
    for (; low < high; low--, high++) {
      if (s[low] !== s[high]) {
        return false
      }
    }
    return true
  }
  return true
};

console.log(validPalindrome('deeee'))