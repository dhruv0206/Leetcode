/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    const visited = new Set();
    const rows = grid.length;
    const cols = grid[0].length;

    const bfs = (r, c) => {
        const q = [];
        visited.add(`${r},${c}`);
        q.push([r, c]);

        while (q.length > 0) {
            const [row, col] = q.shift();
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "1" && !visited.has(`${nr},${nc}`)) {
                    q.push([nr, nc]);
                    visited.add(`${nr},${nc}`);
                }
            }
        }
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                islands += 1;
                bfs(r, c);
            }
        }
    }

    return islands;    
};
/*

// DFS APPROACH



const numIslands =  (grid) => {
	let count = 0 // the counted islands
	//Go though each cell of the 2d array/grid 
	for(let row = 0; row < grid.length; row++){
	for(let col = 0; col < grid[row].length; col ++){
	if(grid[row][col] == '1'){
		count ++
		explore(row,col, grid)
            }
        }
    }
    return count
}



// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function explore(row, col, grid){
    //Let's return IF
    // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
     if (row < 0 || col < 0 || row >= grid.length  
         || col >= grid[row].length || grid[row][col] === '0')  {
        return
    }
    
    //Otherwise, we should explore it!
    //First let's set the current spot to "0"
    grid[row][col]='0'
    
	//Possibilites:
	// 1) 1 to the right, left, top, bottom
	//right
	explore(row, col+1, grid)   
    //Left
	explore(row, col-1, grid)  
    //Down
	explore(row+1, col, grid) 
    //Up
	explore(row-1, col, grid)   

}


https://leetcode.com/problems/number-of-islands/submissions/1722224117
 */