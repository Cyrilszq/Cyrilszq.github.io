let select = document.querySelector('#select')
let startSortBtn = document.querySelector('#startSortBtn')
let randomBtn = document.querySelector('#randomBtn')
let hint = document.querySelector('#hint')
let originArr = []
let hintMsg = {
    SELECTION: `首先遍历数组找到最小的那个元素，标为蓝色，遍历结束后将它与数组第一个元素交换，然后继续在剩下的元素中找到最小的元素将它与数组第二个元素交换，这样循环直至结束`,
    BUBBLE: ` 1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。<br>
              2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。<br>
              3. 针对所有的元素重复以上的步骤，除了最后一个。<br>
              4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。`,
    INSERTION: `1. 从第一个元素开始，该元素可以认为已经被排序<br>
                2. 取出下一个元素，在已经排序的元素序列中从后向前扫描<br>
                3. 如果该元素（已排序）大于新元素，将该元素移到下一位置<br>
                4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置<br>
                5. 将新元素插入到该位置后<br>
                6. 重复步骤2~5`,
    QUICK:`1. 把数组第一个元素为"基准"（pivot）， <br>
           2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。<br>
           3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。`
}
randomBtn.addEventListener('click', () => {
    for (let i = 0; i < 15; i++) {
        originArr[i] = Math.floor(Math.random() * 30) + 1
    }
    animate.init(originArr)
    startSortBtn.disabled = false
})


startSortBtn.addEventListener('click', () => {
    let states = []
    if (!originArr.length) return
    switch (select.value) {
        case '选择排序':
            states = selectionSort(originArr)
            animate.start(states)
            hint.textContent = hintMsg.SELECTION
            break
        case '冒泡排序':
            states = bubbleSort(originArr)
            animate.start(states)
            hint.innerHTML = hintMsg.BUBBLE
            break
        case '插入排序':
            states = insertionSorting(originArr)
            animate.start(states)
            hint.innerHTML = hintMsg.INSERTION
            break
        case '快速排序':
            states = quickSort(originArr)
            animate.start(states)
            hint.innerHTML = hintMsg.QUICK
            break
        case '归并排序':
            let result = mergeSort(originArr)
            hint.innerHTML = result
            break
        case '堆排序':
            heapSort(originArr)
            hint.innerHTML = originArr
            break
    }
})


function swap(arr, a, b) {
    let temp
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

