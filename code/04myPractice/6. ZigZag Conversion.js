var convert = function(s, numRows) {
    if(numRows === 1 || s.length <= numRows) return s;
    const grid = Array(numRows).fill('');
    let i = 0, down = true;
    
    for(let c of s) {
        grid[i] += c;
        down ? i++ : i--;
        if(i === numRows-1 || !i) down = !down;
    }
    return grid.join('')
};