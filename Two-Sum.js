var twoSum = function(nums, target) {
    
   // sort the input array
    nums.sort((a, b) => a - b);
    
    // use two-pointer approach to find the pair of indices
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let sum = nums[left] + nums[right];
        
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};
