let isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const sMap = new Map()
  const tMap = new Map()
  
  for (let i = 0; i < s.length ; i += 1) {
    const char = s[i];
    if (sMap.has(char)) {
      sMap.set(char, sMap.get(char) + 1);
    } else {
      sMap.set(char, 1);
    }
  }
  
  for (let i = 0; i < t.length ; i += 1) {
    const char = t[i];
    if (tMap.has(char)) {
      tMap.set(char, tMap.get(char) + 1);
    } else {
      tMap.set(char, 1);
    }
  }
  
  for (const key of sMap.keys()) {
    if (tMap.get(key) !== sMap.get(key)) {
      return false;
    }
  }
  return true;
};
