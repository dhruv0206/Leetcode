class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        // List<Map.Entry<Integer, Integer>> maxHeap = new ArrayList<>(map.entrySet());
        var maxHeap = new ArrayList<>(map.entrySet());
        maxHeap.sort((a, b) -> b.getValue() - a.getValue());

        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = maxHeap.get(i).getKey();
        }

        return result;
    }
}