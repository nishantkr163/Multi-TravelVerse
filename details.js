let details = JSON.parse(localStorage.getItem("logged"));
console.log(details);


let uName = document.querySelector(".user-name");
uName.innerText = `Name : ${details.name}`;
let uEmail = document.querySelector(".user-email");
uEmail.innerText = `Email : ${details.email}`;
let uphone = document.querySelector(".user-phone");
uphone.innerText = `Phone no : ${details.phone}`;
let ubirth = document.querySelector(".user-birth");
ubirth.innerText = `Date of Birth : ${details.dob}`;