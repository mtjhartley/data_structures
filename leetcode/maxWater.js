const maxArea = (height) => {
    let max = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j){
        let current = (j-i) * Math.min(height[i], height[j]);
        max = Math.max(current, max);
        height[i] <= height[j] ? i++ : j--;
        //if height of i is less than or equal to height of j, move I forward. else, move J backwards.
    }

    return max;
}
maxArea([1,8,6,2,5,4,8,3,7]); //should return 49

