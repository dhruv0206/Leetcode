function isPalindrome(s: string): boolean {
s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
let i = 0, j = s.length - 1
while(i<=j){
    console.log("I J", i, s[i], j, s[j])
    if(s[i] !== s[j]){
        return false
    }
    i++
    j--
}
    return true
};