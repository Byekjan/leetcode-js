var numRows = 3;

var generate = function(numRows) {
    const table = [];
    for (let i = 0; i < numRows; i++) {
        table[i] = [];
        table[i][0] = 1;
        for (let j = 1; j < i; j++) {
            table[i][j] = table[i-1][j-1] + table[i-1][j]
        }
        table[i][i] = 1;
    }
    return table;
}

let  arr = generate(numRows);

arr.forEach(function(entry) {
    console.log(entry);
  });