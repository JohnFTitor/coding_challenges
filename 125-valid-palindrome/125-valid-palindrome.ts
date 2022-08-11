function isPalindrome(s: string): boolean {
    const cleanedString: string = [...s.toLowerCase().matchAll(/[A-Za-z0-9]/g)].join('');
    let start: number = 0;
    let end: number = cleanedString.length - 1;
    
    while (start < end) {
        if (cleanedString[start] !== cleanedString[end]) return false;
        start++;
        end--;
    }
    
    return true;
};