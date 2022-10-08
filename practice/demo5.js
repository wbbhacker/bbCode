var specialArray = function (nums) {
  nums.sort((a, b) => b - a);
  const n = nums.length;
  for (let i = 1; i <= n; ++i) {
    if (nums[i - 1] >= i && (i === n || nums[i] < i)) {
      return i;
    }
  }
  return -1;
};

console.log(specialArray([0, 4, 3, 0, 4]))
window.addEventListener('unhandledrejection', function (event) {
  // the event object has two special properties:
  console.log(event.promise); // [object Promise] - the promise that generated the error
  console.log(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function () {
  throw new Error("Whoops!");
}); 
