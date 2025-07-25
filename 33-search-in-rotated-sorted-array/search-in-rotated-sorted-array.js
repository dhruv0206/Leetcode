/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0, high = nums.length - 1, ans = Infinity

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (nums[mid] === target) return mid;

        // left sorted
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }

        } else {
            // right sorted
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }

    return -1



};

// one solution easiest

// return nums.indexOf(target)

