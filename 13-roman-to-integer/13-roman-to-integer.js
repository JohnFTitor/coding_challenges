/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dic = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        let num = dic[s[i]];
        const nextNum = dic[s[i+1]];
        
        
        if (s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X')) {
            num = -num;
            num += nextNum;
            i++;
        } else if (s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C')) {
            num = -num;
            num += nextNum;
            i++;
        } else if (s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M')) {
            num = -num;
            num += nextNum;
            i++;
        }
        
        result += num;
    }
    
    return result;
};