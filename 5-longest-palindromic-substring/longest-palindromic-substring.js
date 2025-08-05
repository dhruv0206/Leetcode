/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // it will always be one value above and beyond for both side
        // So we need to take +1 from left and -1 from right but because right side bracket is exclusive, it will already take -1
        // it will exclud right
        return s.substring(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(i, i);
        let even = expandAroundCenter(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
};


/*
claude chat link

https://claude.ai/chat/505d3d0c-1af1-4184-b28a-6b2ee6615d52


 */