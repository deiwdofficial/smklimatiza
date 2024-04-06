const WHATSAPP = {
    chat: q('.whatsapp-chat'),
    button_openChat: q('.whatsapp-icon'),
    button_CloseChat: q('.whatsapp-chat .closed > button'),
    button_Conversation: q('.whatsapp-chat .main > button'),
    open: function(){
        this.chat.classList.toggle('show')
    },
    action: function(){
    
        let phoneNumber = "5511993037618"
        let message = "Olá! \n\nEstou entrando em contato através do seu site e tenho interesse em obter mais informações."
        let whatsUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
        window.open(whatsUrl, "_blank");
    }
}

new Array(WHATSAPP.button_openChat, WHATSAPP.button_CloseChat).forEach((e)=>{
    e.addEventListener("click", WHATSAPP.open.bind(WHATSAPP))
}) 

new Array(WHATSAPP.button_Conversation, intro_Btn_Request).forEach((e)=>{
    e?.addEventListener("click", WHATSAPP.action)
})