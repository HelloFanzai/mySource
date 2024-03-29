// 交换两个节点
function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设 结点 i 以下的子堆已经是一个大顶堆，shiftDown函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。后面
// 将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 shiftDown操作，所以就满足了结点 i 以下的子堆已经是一大
//顶堆
function shiftDown(tree, i, length) {
    let temp = tree[i]; // 当前父节点
    // j<length 的目的是对结点 i 以下的结点全部做顺序调整
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
        temp = tree[i];  // 将 tree[i] 取出，整个过程相当于找到 tree[i] 应处于的位置
        if (j + 1 < length && tree[j] < tree[j + 1]) {
            j++;   // 找到两个孩子中较大的一个，再与父节点比较
        }
        if (temp < tree[j]) {
            // swap(tree, i, j) // 如果父节点小于子节点:交换；否则跳出
            [tree[i], tree[j]] = [tree[j], tree[i]]
            i = j;  // 交换后，temp 的下标变为 j
        } else {
            break;
        }
    }
}

// 堆排序
function heapSort(tree) {
    // 初始化大顶堆，从第一个非叶子结点开始
    for (let i = Math.floor(tree.length / 2 - 1); i >= 0; i--) {
        shiftDown(tree, i, tree.length);
    }
    // 排序，每一次for循环找出一个当前最大值，数组长度减一
    for (let i = Math.floor(tree.length - 1); i > 0; i--) {
        //   swap(tree, 0, i); // 根节点与最后一个节点交换
        [tree[0], tree[i]] = [tree[i], tree[0]]


        shiftDown(tree, 0, i); // 从根节点开始调整，并且最后一个结点已经为当
        // 前最大值，不需要再参与比较，所以第三个参数
        // 为 i，即比较到最后一个结点前一个即可
    }
}

let input = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
heapSort(input);
console.log(input);