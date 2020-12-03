
// const submitForm = document.getElementById('contact-form');

function submitForm(){ 
const submitForm = document.getElementById('contact-form');
submitForm.addEventListener('submit', function(e){
    e.preventDefault();
    let fname = document.querySelector(".fname").value;
    let lname = document.querySelector(".lname").value;
    let phone = document.querySelector(".phone").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "your email",
        Password : "your password",
        To : 'to whom(usual your own email)',
        From : "your email",
        Subject : "This is the subject",
        Body : `Fullname: ${fname} ${lname} <br/> Phone: ${phone} <br/> Email: ${email} <br/> Message: ${message}`
    }).then(
    message => alert(message),
    submitForm.reset()
    );
});
}
