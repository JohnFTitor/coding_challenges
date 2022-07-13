/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if (s.length === 0) return 0;
    
    let map = new Map();
    let currentSubstring = s[0];
    let maxLength = 1;
    map.set(s[0], 0)
    let startingIndex = 0;
    
    for (let i = 1; i < s.length; i++) {
        const char = s[i];
        
        if (map.has(char)) {
            const newIndex = map.get(char) + 1;
            if (newIndex > startingIndex) {
                startingIndex = newIndex;                
            }
        }
        
        map.set(char, i);
        currentSubstring = s.slice(startingIndex, i+1);
        
        maxLength = Math.max(maxLength, currentSubstring.length);
    }
    
    return maxLength;
};