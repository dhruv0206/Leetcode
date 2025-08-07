/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // HASH MAP APPROACH


    // let numsMap = new Map()
    // for(let num of nums){
    //     console.log(numsMap.has(num))
    //     if (numsMap.has(num)){
    //         let currCount = numsMap.get(num) + 1
    //         numsMap.set(num, currCount)
    //         if(numsMap.get(num) > 1){
    //             return true
    //         }
    //     }else{
    //         numsMap.set(num, 1)
    //     }

    // }
    // return false

    let res = anotherApproach(nums)
    return res;
};

// function anotherApproach(nums){
//     nums.sort((a, b) => a - b)

//     for(let i = 1; i < nums.length; i++){
//         if(nums[i] === nums[i-1]){
//             return true
//         }
//     }

//     return false
// }

function anotherApproach(nums) {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }

    return false;
}