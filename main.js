//registration section
function registration_form(){
    var full = document.forms["my_container"]["full_name"].value;
    var user = document.forms["my_container"]["username"].value;
    //  var em = document.forms["my_container"]["email"].value;
    //  var num = document.forms["my_container"]["number"].value;
    //  var pass = document.forms["my_container"]["main_password"].value;
    //  var cpass = document.forms["my_container"]["confirm_pass"].value;
 if (full =="janmaaku" && user == "masong"){
   
    window.location.href="main.html";
     }else{
        alert("Email/Password mismatch");
    }

};



//login section
function Login_form(){
    var emails = document.forms["myForm"] ["email"].value;
    var pw = document.forms["myForm"]["password"].value;
    if(emails == "janmaaku" && pw == "123"){
        alert("Welcome!");
        window.location.href="main.html";
    }else if(emails == "" && pw == ""){
        alert("Please Input Email and Password!");
    }else{
        alert("Email/Password mismatch");
    }
};
