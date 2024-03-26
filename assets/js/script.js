window.addEventListener("click", close_Show)

function close_Show(event){
    let verify_Buttons = event.target.nodeName !== 'BUTTON'
    let verify_Class = !event.target.offsetParent?.classList.contains('show')

    if(verify_Buttons && verify_Class){
        document.querySelector('.show')?.classList.remove('show')
    }
}