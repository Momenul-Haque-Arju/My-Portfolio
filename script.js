function scroll(elementSelector, instance=0) {
    let elements=document.querySelectorAll(elementSelector);
    if(elements.length>instance){
        elements[instance].scrollIntoView({behavior:'smooth'});
    }
}

document.getElementById('Library').addEventListener('click',()=>{
    scroll('#library');
})

document.getElementById('Home').addEventListener('click',()=>{
    scroll('#home');
});

document.getElementById('About').addEventListener('click',()=>{
    scroll('#about');
});

document.getElementById('Contact').addEventListener('click',()=>{
    scroll('#contact');
});

const textmsg=document.getElementById('msg');
textmsg.addEventListener('keyup',(e)=>{
    textmsg.style.height='17px';
    let scHeight=e.target.scrollHeight;
    console.log(scHeight);
    textmsg.style.height=`${scHeight-20}px`;
});


const form=document.getElementById('form');
const userName=document.getElementById('name');
const email=document.getElementById('email');
const msg=document.getElementById('msg');

function showError(input, message){
    const send_msg=input.parentElement;
    send_msg.className='send-msg error';
    const small=send_msg.querySelector('small');
    small.innerText=message;
}

function isvalidEmail(input){
    let email_val= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
    if(email_val.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'Email is Not Valid');
    }
}

function showSuccess(input,message){
    const send_msg=input.parentElement;
    send_msg.className='send-msg success';
    const small=send_msg.querySelector('small');
    small.innerText='';
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function check(inputArr){
    inputArr.forEach((input) => {
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    check([userName,email,msg])
    isvalidEmail(email);

    // if(userName.value.length<=5){
    //     showError(userName, 'Name is always more than 5 characters');
    // }


    // if(userName.value===''){
    //     showError(userName, 'Name is Required');
    // }else if(userName.value<=5){
    //     showError(userName, 'Name is always more than 5 characters');
    // }else{
    //     showSuccess(userName);
    // }

    // if(email.value===''){
    //     showError(email, 'Email is Required');
    // }else if(!isvalidEmail(email.value)){
    //     showError(email, 'Email is Not Valid');
    // }else{
    //     showSuccess(email);
    // }
})