/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
      intervals.sort((a,b) => a[0] - b[0])

    let ans = []
    ans.push(intervals[0])
    for(let i = 1; i < intervals.length; i++){
        if(ans[ans.length - 1][1] >= intervals[i][0] ){
            if(ans[ans.length - 1][1] < intervals[i][1]) {
                let updatedInterval = [ans[ans.length - 1][0], intervals[i][1]]
                ans.pop()
                ans.push(updatedInterval)
            }
            // ans[i-1] =  intervals[i][1]
        }else{
            ans.push(intervals[i])
        }

    }
    //console.log("ANS", ans)
    return ans
    
};