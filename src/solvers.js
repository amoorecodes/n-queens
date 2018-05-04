/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findSolution = function(row, board, n, test, callback) {
  let solution = undefined;
  
  if ( row === n) {
    callback();
    return;
  }

  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);
    if (!board[test]()) {
      findSolution(row + 1, board, n, test, callback);
    }
    board.togglePiece(row, i);
  }
};

window.findNRooksSolution = function(n) {
  // let solution = new Board({n: n});
  // let matrix = new Board({n: n});
  // let result = [];
  let board = new Board ({n: n});
  let solution = board.rows();
  findSolution(0, board, n, 'hasAnyRooksConflicts', function() { 
                                                      solution = board.rows().map(row => row.slice());
                                                    });
 

  // const placeRooks = function(rowIndex, colIndex) {
  //   var locations = [];
  //   for (var i = rowIndex; i < n; i++) {
  //     for (var j = colIndex; j < n; j++) {
  //       matrix.togglePiece(i, j); 
  //       if (matrix.hasAnyRooksConflicts()) {
  //         matrix.togglePiece(i, j);
  //       } else {
  //         locations.push([i, j]);
  //       }
  //     }
  //   }
  //   if (locations.length > result.length) {
  //     result = locations;
  //   }
  // };

  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //     placeRooks(i, j);
  //   }
  // }
   
  // for (var i = 0; i < result.length; i++) {
  //   solution.togglePiece(result[i][0], result[i][1]);
  // } 
  console.log(`Single solution for ${n} rooks: ${JSON.stringify(solution)}`);
  // console.log(solution);
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  let board = new Board({n: n}); //fixme
  // let matrix = new Board({n: n});
  // let result = [];
  findSolution(0, board, n, 'hasAnyRooksConflicts', function(){solutionCount++;});
 

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

