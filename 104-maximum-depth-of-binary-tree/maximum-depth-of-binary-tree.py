# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # if not root:
        #     return 0
        # leftDepth = self.maxDepth(root.left)
        # rightDepth = self.maxDepth(root.right)
        # return 1 + max(leftDepth, rightDepth)

        # non recursive approach
        if not root:
            return 0
        queue = []
        queue.append(root)
        depth = 0

        while len(queue) > 0:
            depth+=1
            
            levelSize = len(queue)
            for i in range(levelSize):
                node = queue.pop(0)
                if(node.left):
                    queue.append(node.left)
                if(node.right):
                    queue.append(node.right)
        
        return depth
                

            
            
        
        
        
        