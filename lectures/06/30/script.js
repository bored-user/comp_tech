window.addEventListener('load', afterLoading)
let click_amount = 0

function afterLoading() {
    // window > document > body
    let btn = document.querySelector('button')
    btn.addEventListener('click', click)
}

function click() {
    let btn = document.querySelector('button')

    if(click_amount <= 3) {
        btn.style = 'background-color: red;'
        btn.innerHTML = 'VOCE CLICOU NI MIM'
    } else if(click_amount >= 3) {
        btn.innerHTML = 'PARA DE CLICAR NI MIM'
    } else if(click_amount >= 6) {
        btn.style += 'border-radius: 50%;'
    }

    // click_amount = click_amount + 1
    click_amount++
}