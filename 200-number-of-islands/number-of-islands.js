/**
 * @param {character[][]} grid
 * @return {number}
 */
const bfs = (grid, r, c) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [[r, c]];
    grid[r][c] = "0"; // Mark as visited immediately
    
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;
            
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "1") {
                queue.push([nr, nc]);
                grid[nr][nc] = "0"; // Mark as visited when adding to queue
            }
        }
    }
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
                bfs(grid, r, c);
            }
        }
    }

    return islands;
};



/* 

DFS APproach

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


*/