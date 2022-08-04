/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    const checkVersion = (start, end, firstBad) => {
        if (start >= end) {
            if (isBadVersion(end)) return end;
            return firstBad;
        }
        
        const middle = Math.floor((start + end)/2);
        
        if (isBadVersion(middle)) {
            return checkVersion(start, middle - 1, middle);
        }
        return checkVersion(middle + 1, end, firstBad);
        
    }
    
    return function(n) {
        return checkVersion(1, n, n);
    };
};