/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magMap = new Map()
    for(let mag of magazine){
        magMap.has(mag) ? magMap.set(mag, magMap.get(mag) + 1) : magMap.set(mag, 1)
    }

    for(let note of ransomNote){
        if(magMap.has(note) && magMap.get(note) > 0){
            magMap.set(note, magMap.get(note) - 1)
        }else{
            return false
        }
    }

    return true
    
};

// var canConstruct = function (ransomNote, magazine) {
//   for (const char of magazine) {
//     ransomNote = ransomNote.replace(char, "");
//   }
  
//   if (!ransomNote) return true;
//   else return false;
// };