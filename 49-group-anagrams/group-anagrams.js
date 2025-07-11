/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    if(!strs){
        return [""]
    }
    let anagramMap = new Map()

    for(let i = 0; i < strs.length; i++){
        console.log("strs[i]",strs[i])
        let sortedKey = strs[i].split('').sort().join('')
        if(anagramMap.has(sortedKey)){
            anagramMap.set(sortedKey, [...anagramMap.get(sortedKey), strs[i]])
        }else{
            anagramMap.set(sortedKey, [strs[i]])
        }
    }
    return [...anagramMap.values()]
};