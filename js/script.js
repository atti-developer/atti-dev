
let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');

};

window.onscroll = () => {
   navbar.classList.remove('active');
};


// for email send from contact



 const sendEmail =() =>{
 Email.send({
    Host : "smtp.gamil.com",
    Username : "atti7466@gmail.com",
    Password : "@@@@@",
    To : "atti7466@gmail.com",
    From : document.getElementById("email").value,
    Subject : "New Contact Inquiry from Portfolio",
    Body : "Name: " +document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Phone no: " + document.getElementById("phone").value
    + "<br> Message: " + document.getElementById("message").value

 }).then(
    message => alert(message)
 );

 }