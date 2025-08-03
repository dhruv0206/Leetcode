/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function(grid) {
//     let islands = 0;
//     const visited = new Set();
//     const rows = grid.length;
//     const cols = grid[0].length;

//     const bfs = (r, c) => {
//         const q = [];
//         visited.add(`${r},${c}`);
//         q.push([r, c]);

//         while (q.length > 0) {
//             const [row, col] = q.shift();
//             const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

//             for (const [dr, dc] of directions) {
//                 const nr = row + dr;
//                 const nc = col + dc;
//                 if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "1" && !visited.has(`${nr},${nc}`)) {
//                     q.push([nr, nc]);
//                     visited.add(`${nr},${nc}`);
//                 }
//             }
//         }
//     };

//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < cols; c++) {
//             if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
//                 islands += 1;
//                 bfs(r, c);
//             }
//         }
//     }

//     return islands;    
// };


const dfs = (grid, r, c) => {
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Base case: out of bounds or not land or already visited
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== "1") {
        return;
    }
    
    // Mark as visited by changing to "0"
    grid[r][c] = "0";
    
    // Explore all 4 directions
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
};

var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;
    
    let islands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                islands++;
                dfs(grid, r, c);
            }
        }
    }

    return islands;
};