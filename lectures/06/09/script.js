window.addEventListener('load', afterLoading)

function afterLoading() {
    // window > document > body
    let btn = document.querySelector('button')
    btn.addEventListener('click', click)
}

function click() {
    let btn = document.querySelector('button')
    btn.style = 'background-color: red'
}