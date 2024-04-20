//******************//   
//    █ ▄ █ █▀▄
//    █ █ █ █ █
//    ▀▀▀▀▀ ▀▀  ▀
//********//

const q = (element)=> document.querySelector(element)

const intro_Btn_Request = q('.btn-request');


//  --------------------------------
//  A S Y N C - G O O G L E - M A P |
//  --------------------------------

function initMap(){

    let center = { lat: -23.59819221496582, lng: -46.56325149536133 };
    
    let mapOptions = {
        zoom: 15,
        center: center
    };
    
    let map = new google.maps.Map(document.querySelector('.map'), mapOptions);
    
    let marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Minha Localização'
    });
}


//  -------------------
//  M E N U - L I N K |
//  -------------------

window.addEventListener('load', handleHashChange)
window.addEventListener('hashchange', handleHashChange)

function handleHashChange(){
    setTimeout(()=>{
        if(window.location.hash.includes("#")) {
            menu_idAnchor(window.location.hash);
        }
    }, 20)
}

function menu_idAnchor(id) {
    let element = document.querySelector(id);

    if (element) {
        let scrollPosition_El = element.offsetTop;

        window.scrollTo({
            top: scrollPosition_El - 90,
            behavior: 'smooth'
        });
    }
}


//  -----------------------
//  M E N U - M O B I L E |
//  -----------------------

const areaMenuMobile = q('#main-menu ul');
const menuMobileBtn = q('.open_m-mobile');
const menuMobileCloseBtn = q('.close_m-mobile');

menuMobileBtn.addEventListener("click", Menu_Mobile)
menuMobileCloseBtn.addEventListener("click", Menu_Mobile)

function Menu_Mobile(){

    if(areaMenuMobile.classList.contains('show')){

        areaMenuMobile.classList.remove('show')
        document.body.style.overflow = '';
    } else {

        areaMenuMobile.classList.add('show')
        document.body.style.overflow = 'hidden';
    }
}


//  -------------------
//  S C R O L L - U P |
//  -------------------

const UP_Btn = q('button.up');

UP_Btn.addEventListener("click", scroll_Up_Animation)

function scroll_Up_Animation(){
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}


//  -------------------------
//  F O R M - C O N T A C T |
//  -------------------------

const windowArea = q('.window');
const formCloseBtn = q('.close-form');
const disableFormBtn = document.querySelector('.disable-form')

const FORM_Valitador = {
    form: q('#form-contact form'),
    openClose:function(){
        if(windowArea !== null){
            if(windowArea.classList?.contains('show')){

                windowArea.classList.remove('show')
                q('#form-contact').classList.remove('show')
    
                document.body.style.overflow = '';
            } else {
    
                windowArea.classList.add('show')
                q('#form-contact').classList.add('show')
    
                document.body.style.overflow = 'hidden';
            }
        }
        
        FORM_Valitador.clear()
    },
    getInputs:function(){
        return this.form.querySelectorAll("fieldset input, fieldset textarea")
    },
    identifyRules:[
        {name:["required", "max=20"]},
        {email:["required", {regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}]},
        {phone:["required", "min=16", "max=16"]},
        {message:["required", "min=15"]}
    ],
    verifyRules:function(){

        return this.identifyRules.map((typeRules, index)=>{
            const typeInputs = this.getInputs()[index].name

            for(let rule of typeRules[typeInputs]){

                let ruleType;
                let ruleValue;

                if(typeof rule == 'object'){
                    ruleType = Object.keys(rule)[0]
                    ruleValue = rule[ruleType]
                } else {
                    const delimiterType = rule.replace("=", "")
                    ruleType = delimiterType.replace(/\d/g, "")

                    const delimiterValue = rule.substring(rule.indexOf("=")+1, rule.length)
                    ruleValue = delimiterValue
                }

                switch(ruleType){
                    case 'required':
                        if(this.rules.required(this.getInputs()[index])){
                            return 'Obrigatório'
                        }
                    break;
                    case 'max':
                        if(this.rules.max(this.getInputs()[index], ruleValue)){
                            return `Máximo de ${ruleValue} caracteres atingigo`
                        }
                    break;
                    case 'min':
                        if(this.rules.min(this.getInputs()[index], ruleValue)){
                            return `Mínimo de ${ruleValue} caracteres`
                        }
                        
                    break;
                    case 'regex':
                        if(this.rules.regex(this.getInputs()[index], ruleValue)){
                            return 'Formato e-mail válido: exemplo@email.com'
                        }
                    break;
                }
            }

            return true
        })
    },
    rules:{
        required:function(input){
            if(input.value.length <= 0){
                return true
            }
            return false
        },
        max:function(input, number){
            if(input.value.length > number){
                return true
            }

            return false
        },
        min:function(input, number){
            if(input.value.length < number){
                return true
            }

            return false
        },
        regex:function(input, rule){

            if(rule.test(input.value)){
                return false
            }

            return true
        },
        phoneFormat:function(e){

            let format = ()=>{
                let NUMBER = e.currentTarget.value.replace(/\D/g, '').substring(0, 11)
                
                if(NUMBER.length <= 3){
                    NUMBER = NUMBER.replace(/(\d{2})(\d{1})/, `($1) $2`)
                } else if(NUMBER.length <= 7){
                    NUMBER = NUMBER.replace(/(\d{2})(\d{1})(\d{1})/, `($1) $2 $3`)
                } else if(NUMBER.length <= 11){
                    NUMBER = NUMBER.replace(/(\d{2})(\d{1})(\d{4})(\d{1})/, `($1) $2 $3-$4`)
                }
            
                this.value = NUMBER;
            }
            return format()
        }
    },
    showError:function(msg, index){

        const errorArea = this.form.querySelectorAll('fieldset')[index]

        if(msg[index] !== true){
            errorArea.classList.add('show')
            errorArea.querySelector('.error').innerHTML = msg[index]
        } else {
            errorArea.classList.remove('show')
            errorArea.querySelector('.error').innerHTML = ''
        }
    },
    submit:function(e){

        let send = false;

        e?.preventDefault()

        for(let i = 0; i < FORM_Valitador.getInputs().length; i++){

            let check = FORM_Valitador.verifyRules()

            if(check.every((rules)=>rules !== true)){

                send = false;

                FORM_Valitador.showError(check, i)

            } else {
                FORM_Valitador.showError(check, i)
            }

            if(check.every((rules)=>rules === true || rules === '')){
                send = true;
                FORM_Valitador.setSubject()
            }
        }

        if(send){
            e.target.closest("#form-contact").classList.add('submit')
            e.target.querySelector("input[name=redirectTo]").value = `https://${window.location.host}`
            setTimeout(()=> e.target.submit(), 1500)
        }
        
    },
    clear:function(){
        for(let i = 0; i < this.getInputs().length; i++){

            const fieldsetEl = this.form.querySelectorAll('fieldset')[i]

            this.getInputs()[i].value = '';

            if(fieldsetEl.classList.contains('show')){

                fieldsetEl.classList.remove('show')
                fieldsetEl.querySelector('.input-area').removeAttribute('attr')
            }
        }
    },
    initializeState:function(){
        
        if(!localStorage.disableForm || localStorage.disableForm === 'false'){
            FORM_Valitador.openClose()
            localStorage.disableForm = 'false';
        }
    },
    toggleDisable:function(){

        let check = disableFormBtn.querySelector('input').checked

        if(check == true){
            localStorage.disableForm = 'true';
        } else {
            localStorage.disableForm = 'false';
        }
    },
    setSubject:function(){
        const subject = this.form.querySelector('input[name=subject]')

        const id = ()=>{
            const now = new Date();
            const year = now.getFullYear().toString().slice(-2);
            const month = ('0' + (now.getMonth() + 1)).slice(-2);
            const day = ('0' + now.getDate()).slice(-2);
            const hours = ('0' + now.getHours()).slice(-2);
            const minutes = ('0' + now.getMinutes()).slice(-2);
            const seconds = ('0' + now.getSeconds()).slice(-2);

            return `${day}${month}${year}${hours}${minutes}${seconds}`;
        }

        for(let input of FORM_Valitador.getInputs()){
            if(input.name == 'name'){
                subject.value = `${input.value} (smklimatiza.com.br) ID ${id()}`
            }
        }
    }
}

if(disableFormBtn !== null){
    disableFormBtn.addEventListener("click", FORM_Valitador.toggleDisable)
    formCloseBtn.addEventListener("click", FORM_Valitador.openClose)
}

if(q('#form-contact') !== null){
    FORM_Valitador.form.addEventListener('submit', FORM_Valitador.submit)
    FORM_Valitador.form.querySelector('input[name=phone]').addEventListener('input', FORM_Valitador.rules.phoneFormat)

    FORM_Valitador.initializeState()
}


//  -----------------------
//  C L O S E - M O D A L |
//  -----------------------

window.addEventListener("click", close_Modal)

function close_Modal(event){
    let verify_Buttons = event.target.nodeName !== 'BUTTON'
    let verify_Class = event.target.offsetParent?.closest('.show')

    if(verify_Class == undefined || null){
        verify_Class = true
    } else {
        verify_Class = false
    }

    if(verify_Buttons && verify_Class){

        if(windowArea !== null){
            FORM_Valitador.clear()
            document.body.style.overflow = '';
            
        }
        
        document.querySelectorAll('.show').forEach((el)=>{
            el.classList.remove('show')
        })
    }
}


//  ---------------------------
//  S E R V I C E S - P A G E |
//  ---------------------------

const cardWidget = document.querySelectorAll('.card_widget')

if(cardWidget !== null){

    cardWidget.forEach((card)=>{
        card.addEventListener("click", ()=>{

            let verifyShow = card.classList.contains('show')

            cardWidget.forEach((cW)=> cW.classList.remove('show'))
            
            if(!verifyShow){
                card.classList.add('show')
            }
            
        })
    })
}


console.log('%cDeveloper wd.', 'color: white; font-size: 34px; padding: 8px; font-weight: bold; text-transform: uppercase;');
console.log('%cGitHub', 'background-color: white; color: black; font-size: 14px; padding: 4px 8px; font-weight: bold; cursor: pointer;', 'https://github.com/deiwdofficial');
console.log('%cLinkedIn', 'background-color: white; color: black; font-size: 14px; padding: 4px 8px; font-weight: bold; cursor: pointer;', 'https://www.linkedin.com/in/deiwdofficial');
console.log('%cInstagram', 'background-color: white; color: black; font-size: 14px; padding: 4px 8px; font-weight: bold; cursor: pointer;', 'https://www.instagram.com/deiwdofficial');