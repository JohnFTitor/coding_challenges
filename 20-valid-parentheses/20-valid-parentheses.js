/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const dic = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    };
    
    const arrayOfParenthesis = s.split('');
    
    for (let i = 0; i < arrayOfParenthesis.length; i += 1) {
        const parenthesis = arrayOfParenthesis[i];
        if ((/[{\(\[]/).test(parenthesis)) {
            stack.push(parenthesis);
        } else {
            
            if (stack.length === 0) {
                return false;
            }
            
            const expectedMatch = dic[parenthesis];
            const openingParenthesis = stack.pop();
            
            if (expectedMatch !== openingParenthesis) {
                return false;
            }
        }
    }
    
    if (stack.length !== 0) {
        return false;
    }
    
    return true;
};