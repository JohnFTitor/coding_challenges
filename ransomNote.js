/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 
 https://leetcode.com/problems/ransom-note/
 
 */

var canConstruct = function(ransomNote, magazine) {
  const wordsMap = new Map();
  ransomNote.split("").forEach((char) => {
    const wordCounted = wordsMap.get(char)
    if (wordCounted) {
      wordsMap.set(char, wordCounted + 1);
    } else {
      wordsMap.set(char, 1);
    }     
  });
  for(let i=0; i < magazine.length; i++) {
    const char = magazine[i];
    let mapCount = wordsMap.get(char)
    if (mapCount) {
      mapCount -= 1;
      if (mapCount === 0) {
        wordsMap.delete(char);  
      } else {
        wordsMap.set(char, mapCount);
      }
    }
    if (wordsMap.size === 0) {
      return true;
    }
  }
  return false;
};
