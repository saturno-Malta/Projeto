const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const handleFocus = ({ target }) => {
   const span = target.previousElementSibling;
   span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  
   if(target.value == '') {
     const span = target.previousElementSibling;
     span.classList.remove('span-active');
    }
}

const handlechange = () => {
   const [username, password] = inputs;

   if( username.value && password.value.legth >= 8) {

     button.removeAttribute('disabled');

   }else {
      button.setAttribute('disabled', '');
   }
}

inputs.forEach((input)=>  input.addEventListener('focus', handleFocus));
inputs.forEach((input)=>  input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input)=>  input.addEventListener('input', handlechange));

