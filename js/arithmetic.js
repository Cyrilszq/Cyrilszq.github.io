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
    let temp, j, states = []
    for (let i = 1, len = arr.length; i < len; i++) {
        temp = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            states.push({base: i, index: j})
            j--
        }
        arr[j + 1] = temp
        states.push([j + 1, i])
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

function quickSort(arr, start = 0, end = arr.length - 1) {
    let states = []

    function quickSortRecursive(start, end) {
        if (start >= end) return
        let mid = arr[end], left = start, right = end - 1
        while (left < right) {
            while (arr[left] < mid && left < right) {
                states.push({base: end, index: left})
                left++
            }
            while (arr[right] >= mid && left < right) {
                states.push({base: end, index: right})
                right--
            }
            swap(arr, left, right)
            states.push([left, right])
        }
        if (arr[left] >= arr[end]) {
            swap(arr, left, right)
            states.push([left, right])
        } else {
            left++
            states.push({base: end, index: left})
        }
        quickSortRecursive(start, left - 1)
        quickSortRecursive(left + 1, end)
    }

    quickSortRecursive(start, end)
    return states
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


let r = mergeSort([2, 1, 3, 4, 7, 6, 5])
console.log(r)
// (function (window) {
//     let pivotIndex;
//     let states = [];
//
//     function quickSort(arr, low = 0, high = arr.length - 1) {
//         if (low < high) {
//             pivotIndex = partition(arr, low, high);
//             quickSort(arr, low, pivotIndex - 1);
//             quickSort(arr, pivotIndex + 1, high)
//         }
//         return states
//     }
//
//     function partition(arr, low, high) {
//         let privot = arr[low];
//         let i = low, j = high + 1;
//         while (true) {
//             while (arr[++i] < privot) if (i === high) break;
//             while (privot < arr[--j]) if (j === low) break;
//             if (i >= j) break;
//             swap(arr, i, j);
//             states.push([i, j])
//         }
//         swap(arr, low, j);
//         states.push([low, j]);
//         return j
//     }
//
//     window.quickSort = quickSort
//
// })(window)







