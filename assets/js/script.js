const q = (element)=> document.querySelector(element)

const menuMobileBtn = q('.open_m-mobile');
const menuMobileCloseBtn = q('.close_m-mobile');
const areaMenuMobile = q('#main-menu ul');

const intro_Btn_Request = q('.btn-request');
const UP_Btn = q('button.up');

intro_Btn_Request?.addEventListener("click", whatsapp_Section)

function whatsapp_Section(){
    
    let phoneNumber = "5511993037618"
    let message = "Olá! \n\nEstou entrando em contato através do seu site e tenho interesse em obter mais informações."
    let whatsUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsUrl, "_blank");
}

menuMobileBtn.addEventListener("click", Menu_Mobile)
menuMobileCloseBtn.addEventListener("click", Menu_Mobile)

function Menu_Mobile(){
    areaMenuMobile.classList.contains('show')
        ? areaMenuMobile.classList.remove('show')
        : areaMenuMobile.classList.add('show')
}

UP_Btn.addEventListener("click", scroll_Up_Animation)

function scroll_Up_Animation(){
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}

/* window.addEventListener("click", close_Show)

function close_Show(event){
    let verify_Buttons = event.target.nodeName !== 'BUTTON'
    let verify_Class = !event.target.offsetParent?.classList.contains('show')

    if(verify_Buttons && verify_Class){
        document.querySelector('.show')?.classList.remove('show')
    }
} */