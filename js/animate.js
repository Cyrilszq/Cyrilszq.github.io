(function (window) {
    let container = document.querySelector('#container')
    let timer, rects

    function start(states, callback) {
        if (!states.length) return
        startSortBtn.disabled = true
        randomBtn.disabled = true
        rects = document.querySelectorAll('.rect')
        timer = setInterval(function () {
            rects.forEach((item) => {
                item.style.backgroundColor = 'green'
            })
            let temp = states.shift()
            if (Array.isArray(temp)) {
                swapAnimate(temp[0], temp[1])
            } else {
                document.querySelector(`#rect${temp.base}`).style.backgroundColor = 'blue'
                document.querySelector(`#rect${temp.index}`).style.backgroundColor = 'yellow'
            }
            if (!states.length) {
                clearInterval(timer)
                setTimeout(function () {
                    rects.forEach((item) => {
                        item.style.backgroundColor = 'green'
                    })
                    startSortBtn.disabled = false
                    randomBtn.disabled = false
                    callback && callback()
                }, 600)
            }
        }, 800)
    }

    function swapAnimate(a, b) {
        // if (a === b) return
        let rectA = document.querySelector(`#rect${a}`)
        let rectB = document.querySelector(`#rect${b}`)
        rectA.style.backgroundColor = 'yellow'
        rectB.style.backgroundColor = 'yellow'
        rectA.style.left = b * 30 + 'px'
        rectB.style.left = a * 30 + 'px'
        rectA.id = `rect${b}`
        rectB.id = `rect${a}`
    }

    function init(originArr) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        let fragment = document.createDocumentFragment()
        for (let i = 0; i < originArr.length; i++) {
            let div = document.createElement('div')
            div.className = 'rect'
            div.id = 'rect' + i
            div.textContent = originArr[i]
            div.style.height = originArr[i] * 5 + 'px'
            div.style.left = 30 * i + 'px'
            fragment.appendChild(div)
        }
        container.appendChild(fragment)
    }

    window.animate = {
        init,
        start
    }
})(window)




