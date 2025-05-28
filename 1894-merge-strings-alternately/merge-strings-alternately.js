/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let merged = "";
    let longer = 0
    let shorter = 0
    if (word1.length > word2.length) {
        longer = word1.length
        shorter = word2.length
    } else {
        longer = word2.length
        shorter = word1.length
    }
    let j = 0;
    let k = 0;
    for (let i = 0; i < longer; i++) {
        if (j < word1.length) {
            merged += word1[j];
            j += 1;
        }
        if (k < word2.length) {
            merged += word2[k];
            k += 1;
        }

    }

    // AOTHER APPROACH
    // let result = '';
    //   for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    //     if (i < word1.length) result += word1[i];
    //     if (i < word2.length) result += word2[i];
    //   }
    //   return result;


    // console.log("MERGED", merged)
    return merged

};