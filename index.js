var twoSum = function (nums, target) {
    let numsLength = nums.length;
    const map = {};
    for (let i = 0; i < numsLength; i++) {
        const index = target - nums[i];
        if (index in map) return [map[index], i];
        console.log(map)
        map[nums[i]] = i;
    }
};

console.log(twoSum([3,2,4], 6))