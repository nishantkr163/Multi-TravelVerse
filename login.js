let forgotPass = document.querySelector("h4");
let data = JSON.parse(localStorage.getItem("userData"));

function forgot() {
    alert("A password reset link was sent. Click the link in the email to create a new password.");
    forgotPass.innerText = "Re-sent Reset Password Link";
}

let email = document.querySelector(".email");
let password = document.querySelector(".pass");

document.querySelector(".form").addEventListener('submit', function() {
    event.preventDefault();
    for(let i=0;i<data.length;i++) {
        let ele = data[i];
        if(ele.email == email.value) {
            if(ele.password == password.value) {
                alert("Login Successful :)");
                localStorage.setItem("logged", JSON.stringify(ele));
                window.location.href = "loggedin.html";
                return;
            }
            else {
                alert("Invalid Password ;(");
                return;
            }
        }
        // else {
        //     alert("Invalid Email ;(");
        //     return;
        // }
    }
    
})


function gohome() {
    window.location.href = "index.html";
}