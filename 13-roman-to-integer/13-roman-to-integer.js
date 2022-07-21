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
        const nextNum = s[i+1];
        
        
        if (nextNum && (s[i] + nextNum).match(/(I[VX])|(X[LC])|(C[DM])/)) {
            num = -num;
            num += dic[nextNum];
            i++;
        }
        
        result += num;
    }
    
    return result;
};