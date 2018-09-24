//3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
    var chars = {};
    var max = 0;
    var start = 0;
    for (let i = 0; i < s.length; i++){
        if (start <= chars[s[i]]){
            start = chars[s[i]] + 1;
        } else {
            max = Math.max(max, i - start + 1);
        }
        chars[s[i]] = i;
    }
    return max;
}

console.log(lengthOfLongestSubstring("aaaa"));
console.log(lengthOfLongestSubstring("abca"));
lengthOfLongestSubstring("dvdf");

// console.log(lengthOfLongestSubstring("aaaa"));