class Solution:
    def longestPalindrome(self, s: str) -> int:
        dict = {}
        for char in s:
            if char in dict:
                dict[char] += 1
            else:
                dict[char] = 1
        one_odd = False
        longest_palindrome = 0
        
        for value in dict.values():            
            if value % 2 == 0:
                longest_palindrome += value
            else:
                if not one_odd:
                    longest_palindrome += value
                    one_odd = True
                else:
                    longest_palindrome += value - 1
                
        return longest_palindrome