let select = document.querySelector('#select')
let startSortBtn = document.querySelector('#startSortBtn')
let randomBtn = document.querySelector('#randomBtn')

let originArr = []
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
        case '快速排序':
            states = quickSort(originArr)
            animate.start(states)
            console.log(originArr)
            break
        case '冒泡排序':
            states = bubbleSort(originArr)
            animate.start(states)
            break
        case '选择排序':
            states = selectionSort(originArr)
            animate.start(states)
            break
        case '插入排序':
            states = insertionSorting(originArr)
            console.log(originArr)
            animate.start(states)
            break
    }
})



function swap(arr, a, b) {
    let temp
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}