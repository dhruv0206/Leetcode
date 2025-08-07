/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // if(!strs){
    //     return [""]
    // }
    // let anagramMap = new Map()

    // for(let i = 0; i < strs.length; i++){
    //     let sortedKey = strs[i].split('').sort().join('')
    //     if(anagramMap.has(sortedKey)){
    //         anagramMap.set(sortedKey, [...anagramMap.get(sortedKey), strs[i]])
    //     }else{
    //         anagramMap.set(sortedKey, [strs[i]])
    //     }
    // }
    // return [...anagramMap.values()]

    if (!strs || strs.length === 0) return []
    
    const anagramMap = new Map()
    
    for (const str of strs) {
        const sortedKey = str.split('').sort().join('') // O(M log M)
        
        if (!anagramMap.has(sortedKey)) {
            anagramMap.set(sortedKey, [])
        }
        anagramMap.get(sortedKey).push(str)
    }
    
    return Array.from(anagramMap.values())
};