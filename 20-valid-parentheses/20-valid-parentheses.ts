function isValid(s: string): boolean {
    interface shape {
        '}': string,
        ']': string,
        ')': string,    
    }
        
    const dic: shape = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    
    type OpenedParentesis = '{' | '[' | '('; 
        
    const stack: OpenedParentesis[] = []; 
        
    for (let i = 0; i < s.length; i++) {
        const char: string = s[i];
        
        if (/[\{\[\(]/.test(char)) {
            stack.push(char as OpenedParentesis);
        } else {
            const expectedValue: string = stack.pop();
            
            if (dic[char] !== expectedValue) {
                return false;
            }
        }
    }
        
    if (stack.length !== 0) {
        return false;
    }
        
    return true;
};