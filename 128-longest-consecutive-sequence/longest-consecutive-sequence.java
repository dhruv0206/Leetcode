import java.util.Arrays;

public class Solution {
    public int longestConsecutive(int[] nums) {
        Arrays.sort(nums);
        int maxCount = 0;
        int currCount = 1;
        
        if (nums.length == 0) {
            return 0;
        }
        if (nums.length == 1) {
            return 1;
        }
        
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] + 1 == nums[i + 1]) {
                currCount++;
                maxCount = Math.max(maxCount, currCount);
            } else if (nums[i] == nums[i + 1]) {
                maxCount = Math.max(maxCount, currCount);
            } else {
                currCount = 1;
                maxCount = Math.max(maxCount, currCount);
            }
        }
        
        return maxCount;
    }
}