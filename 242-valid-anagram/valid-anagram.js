/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    for (let i = 0; i < s.length; i++){
        let hitIndex = t.indexOf(s[i]);

        if(hitIndex == -1){
            return false
        }

        t = t.slice(0, hitIndex) + t.slice(hitIndex+1)
    }

    if(t.length !== 0){
        return false
    }

    return true
    
};