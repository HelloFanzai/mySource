function solution(A) {
    if (A.length <= 2) {
        return 0;
    }
    A.sort((a, b) => a - b)
    let result = 0;
    for (let i = 0;i < A.length; i++) {
        let k = 2;
        for (let j = i + 1; j < A.length; j++) {
            while (k < A.length && A[i] + A[j] > A[k]) {
                k++;
            }
            result += k - j - 1;
        }
    }
    return result;
    
}
// Q：
//https://app.codility.com/programmers/lessons/15-caterpillar_method/count_triangles/

// A:
//https://app.codility.com/demo/results/trainingD4DYHQ-522/