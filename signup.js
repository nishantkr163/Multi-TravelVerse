let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".pass");
let password2 = document.querySelector(".pass2");
let phone = document.querySelector(".phone");
let dob = document.querySelector(".birth");


let data = JSON.parse(localStorage.getItem("userData")) || [];
document.querySelector(".form").addEventListener('submit', function() {
    event.preventDefault();
    let obj = {
        name : name.value,
        email : email.value,
        password : password.value,
        confPass : password2.value,
        phone : phone.value,
        dob : dob.value
    }

    if(password.value !== password2.value) {
        alert("Passwords do not match! Please check the both passwords whether they are same or not");
        return;
    }

    if(phone.value.length != 10) {
        alert("Invalid Phone no.")
        return
    }
    if(dob.value == "") {
        alert("Please Enter Date of Birth");
        return;
    }

    for(let i=0;i<data.length;i++) {
        let ele = data[i];
        if(ele.email == email.value) {
            alert("Email Already Registered, Use another Email ID");
            return;
        }
        if(ele.phone == phone.value) {
            alert("Phone no. Already Registered, Use another Phone no.");
            return;
        }
    }

    data.push(obj);

    localStorage.setItem("userData", JSON.stringify(data));
    name.value = null;
    email.value = null;
    password.value = null;
    password2.value = null;
    phone.value = null;
    dob.value = null;

    window.location.href = "login.html"
})


function gohome() {
    window.location.href = "index.html";
}