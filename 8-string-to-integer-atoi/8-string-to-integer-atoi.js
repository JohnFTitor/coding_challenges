/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let stringCleaned = s.trim();
    
  if (stringCleaned.length === 0) return 0;
    
  let sign = '';
  if (!stringCleaned[0].match(/[0-9]/)) {
    sign = stringCleaned[0];
    stringCleaned = stringCleaned.slice(1);
     if (!sign.match(/[\+\-]/)) {
         return 0;
     }
  }
    
  let number = '';
  for (let i = 0; i < stringCleaned.length; i++) {
      const char = stringCleaned[i];
      
      if (char.match(/[0-9]/)) {
        
        if (number.length === 0 && char === '0' ) {
            continue;
        }  
          
        number += char    
      } else {
        break;
      }
  }
  
  const maxString = sign === '-' ? '2147483648' : '2147483647';
    
  if (number.length > 10) {
      return parseInt(`${sign}${maxString}`);
  }  
    
  if (number.length === 10) {
        for (let i = 0; i < maxString.length; i++) {
            if (parseInt(maxString[i]) < parseInt(number[i])) {
                return parseInt(`${sign}${maxString}`);
            } else if (parseInt(maxString[i]) > parseInt(number[i])) {
                break;
            }
        }
  }    
    
  return number.length > 0 ? parseInt(`${sign}${number}`) : 0;
};