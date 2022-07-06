/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const words = [...s.matchAll(/[^\W_]/g)];
    const wordsMapped = words.map((word) => word[0].toLowerCase());
    const wordCleaned = wordsMapped.join('');
    const wordReversed = wordsMapped.reverse().join('');
    return wordCleaned === wordReversed;
};