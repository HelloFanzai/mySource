function checkForGraph(nodeMap, N, start, touchedPoints) {
    const target = touchedPoints[0];
    const paths = nodeMap[start];
    if (!paths || !paths.length) {
        return [];
    }
    for (const i of paths) {
        if (i === target) {
            return touchedPoints;
        } else {
            touchedPoints.push(i);
            return checkForGraph(nodeMap, N, i, [...touchedPoints]);
        }
    }
}

function solution(A, B) {
    const nodeMap = {}
    const N = A.length;
    for (let i in A) {
        const a = A[i];
        const b = B[i];
        nodeMap[a] = nodeMap[a] || [];
        nodeMap[a].push(b);
    }
    const touchedPoints = [A[0]];
    const path = checkForGraph(nodeMap, N, A[0], [...touchedPoints]);
    // console.log(path.length === N);
    if (path.length === N) {
        return true;
    } else {
        return false;
    }
}


// var A = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
// var B = [39,40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];


// var A = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
// var B = [29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];


A = [1, 2, 3]
B = [1, 2, 3]
console.log(solution(A, B));