/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
// HASH MAP APPROACH


    // let stonesMap = new Map();
    // let totalJewels = 0

    // for(let stone of stones){
    //     if(stonesMap.has(stone)){
    //         let currVal = stonesMap.get(stone)
    //         stonesMap.set(stone, currVal+1)
    //     }else{
    //         stonesMap.set(stone, 1);

    //     }
    // }

    // for(let jewel of jewels){
    //     if(stonesMap.has(jewel)){
    //         totalJewels+= stonesMap.get(jewel)
    //     }
    // }

    // return totalJewels

// single for loop approach

let resultCount = anotherApproach(jewels, stones)
    return resultCount
};

function anotherApproach(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length; i++){
        if(jewels.includes(stones[i])){
            count++
        }
    }

    return count;
}