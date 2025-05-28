/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let maxWords = 0;
    for (let sen of sentences) {
        let spaceCnt = 0;
        for (let ch of sen) {
            if (ch === ' ') spaceCnt++;
        }
        maxWords = Math.max(maxWords, spaceCnt + 1);
    }
    return maxWords;
};