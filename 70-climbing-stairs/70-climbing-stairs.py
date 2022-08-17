class Tree:
    def __init__(self, val: int, left= None, right= None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    
    def __init__(self):
        self.map = {}
    
    def decisionTreeStairs(self, tree: Tree, target: int, result: int) -> int:
        if (tree.val == target):
            return result + 1
    
        if (tree.val > target): return result
        
        if tree.val in self.map:
            stored_value = self.map[tree.val] 
            if (stored_value):
                return result + stored_value
    
        tree.left = Tree(tree.val + 1)
        tree.right = Tree(tree.val + 2)
        
        result_left = self.decisionTreeStairs(tree= tree.left, target= target, result= result)
        result_right = self.decisionTreeStairs(tree= tree.right, target= target, result= result)
        
        total_result = result_left + result_right
        
        self.map[tree.val] = total_result
        
        return total_result
    
    def climbStairs(self, n: int) -> int:
        base = Tree(0)
        return self.decisionTreeStairs(tree= base, target= n, result= 0);
        