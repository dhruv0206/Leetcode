/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicate values for i
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return result;

};


// Mine written Brute Force

// var threeSum = function (nums) {
//     nums.sort((a, b) => a - b)
//     let z = 0;
//     let i = z + 1;
//     let j = nums.length - 1
//     let resSet = new Set()
//     // if(nums.length === 3){
//     //     if(nums[0] + nums[1] + nums[2] === 0){
//     //         return [nums[0] + nums[1] + nums[2]]
//     //     }
//     // }
//     while (z <= nums.length - 3) {
//         while (i < j) {
//             // console.log("I,j", z, i, j, nums[z], nums[i], nums[j])
//             let sum = nums[z] + nums[i] + nums[j]
//             // console.log("SUM", sum)
//             if (sum === 0) {
//                 // console.log("IN RES", z, i, j, nums[z], nums[i], nums[j])
//                 // res.every(s => clickedArr.includes(s));
//                 // let x = res.some(item => arr2.includes(item))
//                 // console.log("XXXX", x)
//                 const elementToAddArr = [nums[z], nums[i], nums[j]] 
//                 // res = [...res, elementToAddArr]
//                 // console.log("res", res)
//                 resSet.add(JSON.stringify(elementToAddArr))
//                 i++
//                 j--
//             }
//             if(sum<0){
//                 i++
//             }
//             if(sum>0){
//                 j--
//             }

//         }
//         z++
//         i = z + 1
//         j = nums.length - 1

//     }

//     let intArr = Array.from(resSet).map(str => JSON.parse(str));

//     // console.log("resSet", intArr)
//     return intArr

// };