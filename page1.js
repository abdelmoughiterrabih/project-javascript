// La recuperation des elements 
const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Evenements
form.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
})


// Fonstions
function form_verify() {
    // Obtenir toutes les valeurs des inputs
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwd2Value = password2.value.trim();
    
    // Username verify
    if (userValue === "") {
        let message ="The Username field is required !";
        setError(username,message);
       
    }else if(!userValue.match(/^[a-zA-Z]/)){
        let message ="Please enter a valid username";
        setError(username,message)
    
    }else{
        let letterNum = userValue.length;
        if (letterNum < 3) {
            let message ="Username doit avoir au moins 3 caractères";
            setError(username,message)
           
        } else {
            setSuccess(username);
        }
    }

    // email verify
    if (emailValue === "") {
        let message = "The Email field is required !";
        setError(email,message);
       
    }else if(!email_verify(emailValue)){
        let message = "Please enter a valid email use only letters (a-z),numbers";
        setError(email,message);
       
    }else{
        setSuccess(email)
    }
    
    // password verify
    if (pwdValue ==="") {
        let message ="The Password field is required !";
        setError(password,message)
       
    }else if(!password_verify(pwdValue)){
        let message = "Please enter a valid Password!";
        setError(password,message)
        
    }else{
        setSuccess(password);
    }
    // pwd confirm
    if (pwd2Value ==="") {
        let message ="The confirm Password field is required !";
        setError(password2,message)
    }else if( pwdValue !== pwd2Value){
        let message ="Please enter a valid confirm Password !";
        setError(password2,message)
       
    }else {
        setSuccess(password2)
    }
    if (email_verify(emailValue) && userValue.match(/^[a-zA-Z]/) && password_verify(pwdValue) &&  pwdValue == pwd2Value) {
        window.location.replace("page2.html");
      }

}

  
function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajout du message d'erreur
    small.innerText = message

    // Ajout de la classe error
    formControl.className = "form-control error";
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}

function email_verify(email) {
    /*
    * r_rona.22-t@gmail.com
        /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(passeword) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(passeword);
}

