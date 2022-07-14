/**
 * @param {string} s
 * @return {string}
 */

var isPalindrome = function(word) {
    const wordReversed = word.split('').reverse().join('');
    return word === wordReversed;
};

var longestPalindrome = function(s) {
    
    let longestSubstring = s[0];
    
    const map = new Map();
    
    s.split('').forEach((char, index) => {
        const arr = map.get(char);
        
        if (arr === undefined) {
            map.set(char, [index]); 
        } else {
            arr.push(index);
            map.set(char, arr);
        }
    });
        
    map.forEach((arr) => {
        if (arr.length > 1) {
            for(let i = 0; i < arr.length - 1; i++) {
                for (let j = 1; j < arr.length; j++) {
                   const currentSubstring = s.slice(arr[i], arr[j] + 1);
                    if (currentSubstring.length < longestSubstring.length) {
                        continue;
                    }
                    if (isPalindrome(currentSubstring)) {
                        if (currentSubstring.length > longestSubstring.length) {
                            longestSubstring = currentSubstring;
                        }
                    }      
                } 
            }
        }    
    });
    
    return longestSubstring
};