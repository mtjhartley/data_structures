
//O(n^2)
// var twoSumBad = function(nums, target) {
//     for (var i = 0; i < nums.length; i++){
//         for (var j = i+1; j < nums.length; j++){
//             if (nums[i] + nums[j] === target) {
//                 console.log("success");
//                 var array = []
//                 array.push(i);
//                 array.push(j);
//                 return array;
//             }
//         }
//     }
// };

//O(n)
const twoSum = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++){
        if (map.hasOwnProperty(nums[i])){
            console.log(nums[i])
            console.log(nums[map[nums[i]]])
            return [map[nums[i]], i];
        } else {
            map[target-nums[i]] = i;
        }
    }
}

console.log(twoSum([1,10,3,5], 11));
