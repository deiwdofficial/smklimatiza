const q = (element)=> document.querySelector(element)

const intro_Btn_Request = q('.btn-request');
const UP_Btn = q('button.up');

const whatsapp_Btn = q('.whatsapp-icon');
const whatsapp_Chat = q('.whatsapp-chat');
const whatsapp_Btn_Close_Chat = q('.whatsapp-chat .closed > button');
const whatsapp_Btn_Section = q('.whatsapp-chat .main > button')

whatsapp_Btn.addEventListener("click", whatsapp_Open)
whatsapp_Btn_Close_Chat.addEventListener("click", whatsapp_Open)
whatsapp_Btn_Section.addEventListener("click", whatsapp_Section)
intro_Btn_Request.addEventListener("click", whatsapp_Section)

function whatsapp_Open(){
    whatsapp_Chat.classList.contains('show')
    ?   whatsapp_Chat.classList.remove('show')
    :   whatsapp_Chat.classList.add('show')
}
function whatsapp_Section(){
    
    let phoneNumber = "5511993037618"
    let message = "Olá! \n\nEstou entrando em contato através do seu site e tenho interesse em obter mais informações."
    let whatsUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsUrl, "_blank");
}

UP_Btn.addEventListener("click", scroll_Up_Animation)

function scroll_Up_Animation(){
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}

window.addEventListener("click", close_Show)

function close_Show(event){
    let verify_Buttons = event.target.nodeName !== 'BUTTON'
    let verify_Class = !event.target.offsetParent?.classList.contains('show')

    if(verify_Buttons && verify_Class){
        document.querySelector('.show')?.classList.remove('show')
    }
}