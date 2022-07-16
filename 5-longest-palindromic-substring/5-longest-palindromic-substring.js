/**
 * @param {string} s
 * @return {string}
 */

var getPalindrome = function(left, right, word) {
    while(left >= 0 && right < word.length) {
        if (word[left] !== word[right]) break;
        left -= 1;
        right += 1;
    }
    
    return [left + 1, right];
};

var longestPalindrome = function(s) {
    let longestSubstr = [0, 1];
    
    for (let i = 0; i < s.length; i++) {
        
        const odd = getPalindrome(i - 1, i + 1, s);
        const even = getPalindrome(i - 1, i, s);
        
        const currentSubstr = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        
        longestSubstr = longestSubstr[1] - longestSubstr[0] > currentSubstr[1] - currentSubstr[0] ? longestSubstr : currentSubstr;
        
    }
    
    return s.slice(longestSubstr[0], longestSubstr[1]);
};