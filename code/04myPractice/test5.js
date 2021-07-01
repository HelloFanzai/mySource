function theFn(theP=[4,5,6]) {
  return theP
}
let theA=[1,2,3]
console.log( theFn(theA) );

function maxNetworkRank(A, B, N) {
  const edgeCount = {};
  let maxRank = 0;
  const m = A.length;

  for (let i = 0; i < m; i++) {
      edgeCount[A[i]] = (edgeCount[A[i]] ? edgeCount[A[i]] : 0) + 1;
      edgeCount[B[i]] = (edgeCount[B[i]] ? edgeCount[B[i]] : 0) + 1;
  }

  for (let j = 0; j < m; j++) {
      const rank = edgeCount[A[j]] + edgeCount[B[j]] - 1;
      if (rank > maxRank) {
          maxRank = rank;
      }
  }

  return maxRank;
}