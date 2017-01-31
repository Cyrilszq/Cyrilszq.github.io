/**
 * 冒泡排序
 * @param array
 * @returns {Array}
 */
function bubbleSort(arr) {
    let states = [];
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j + 1, j);
                states.push([j + 1, j])
            }
        }
    }
    return states;
}

/**
 * 插入排序
 * @param arr
 */
function insertionSorting(arr) {
    let temp, j, k, states = []
    for (let i = 1, len = arr.length; i < len; i++) {
        temp = arr[i]
        j = i - 1
        k = i
        while (j >= 0 && arr[j] > temp) {
            swap(arr, j, k)
            states.push([j, k])
            j--
            k--
        }
    }
    return states
}

/**
 * 选择排序
 */
function selectionSort(arr) {
    let states = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
                states.push({base: min, index: j})
            } else {
                states.push({base: min, index: j})
            }
        }
        if (min !== i) {
            swap(arr, min, i)
            states.push([min, i])
        }
    }
    return states
}

/**
 * 快速排序
 */
function quickSort(arr, left = 0, len = arr.length) {
    let state = []
    quickSortRecursion(arr, left, len)
    function quickSortRecursion(arr, left, len) {
        let pivot
        if (left < len) {
            pivot = patition(arr, left, len)
            quickSortRecursion(arr, left, pivot - 1)
            quickSortRecursion(arr, pivot, len)
        }
        function patition(arr, left, len) {
            let pivot = left
            for (let right = left + 1; right < len; right++) {
                state.push({base: pivot, index: right})
                if (arr[pivot] >= arr[right]) {
                    left++
                    swap(arr, left, right)
                    state.push([left, right])
                }
            }
            swap(arr, left, pivot)
            state.push([left, pivot])
            return left + 1
        }
    }

    return state
}


function mergeSort(arr) {
    function merge(left, right) {
        let result = []
        while (left.length && right.length) {
            result.push(left[0] <= right[0] ? left.shift() : right.shift())
        }
        return result.concat(left.concat(right))
    }

    let len = arr.length, mid = parseInt(len / 2)
    if (len < 2) return arr
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

function heapSort(arr) {
    let len = arr.length

    function maxHeapify(start, end) {
        let dad = start, son = dad * 2 + 1
        if (son >= end) return
        if (son + 1 < end && arr[son] < arr[son + 1]) // 比较两个子节点大小，选择较大的
            son++
        if (arr[dad] <= arr[son]) {
            swap(arr, dad, son)
            maxHeapify(son, end) // 递归调整
        }
    }

    // 创建最大堆，从最后一个父节点来时调整
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        maxHeapify(i, len);
    }
    // 堆排序
    for (let i = len - 1; i > 0; i--) {
        swap(arr, 0, i);
        maxHeapify(0, i);
    }
}











