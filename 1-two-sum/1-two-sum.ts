function twoSum(nums: number[], target: number): number[] {
    const map : Map<number, number> = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const numPair: number = target - nums[i];
        const pairIndex: number | undefined = map.get(numPair);
        
        if (pairIndex !== undefined) {
            return [pairIndex, i];
        }
        
        map.set(nums[i], i);
    } 
};