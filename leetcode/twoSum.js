const twoSum = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]] !== undefined){
            console.log(nums[i])
            console.log(nums[map[nums[i]]])
            return [map[nums[i]], i];
        } else {
            map[target-nums[i]] = i;
        }
    }
}

console.log(twoSum([1,10,3,5], 11));
