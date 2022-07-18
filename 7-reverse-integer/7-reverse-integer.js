/**
 * @param {number} x
 * @return {number}
 */

const reverseString = (s) => s.split('').reverse().join('');

var reverse = function(x) {
    let XString = x.toString();
    let sign = '';
    if (XString[0] === '-') {
        XString = XString.slice(1);
        sign = '-';
    }
    
    const maxString = '2147483648';
    const reversedString = reverseString(XString);
    
    if (XString.length === 10) {
        for (let i = 0; i < maxString.length; i++) {
            if (parseInt(maxString[i]) < parseInt(reversedString[i])) {
                return 0;
            } else if (parseInt(maxString[i]) > parseInt(reversedString[i])) {
                break;
            }
        }
    }
    
    return parseInt(`${sign}${reversedString}`);
};