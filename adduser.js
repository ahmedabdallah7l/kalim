  var users=[];
 let x=42;
var firstName=document.querySelector("input[name='fName']")
var userName=document.querySelector("input[name='userName']")
var lastName=document.querySelector("input[name='lName']")
var email=document.querySelector("input[name='Email']")
var Phone=document.querySelector("input[name='Phone']")
var Password=document.querySelector("input[name='password']")
var role =document.getElementById("roles")
var rePassword=document.querySelector("input[name='re-password']")
var add=document.querySelector(".btn")
var firstNameError=document.querySelector("#firstName-error")
var lastNameError=document.querySelector("#lastName-error")
var emailError=document.querySelector("#email-error")
var userNameError=document.querySelector("#userNmae-error")
var passError=document.querySelector("#password-error")
var matchingPasswordError=document.querySelector("#matchingPassword")
var phoneError=document.querySelector("#phone-error")

users[0]=
    {
        firstName:"Bojack",
        lastName:"Horseman",
        userName:"Weird_Ward",
        email:"WowoManger1@gmail.com",
        phone:"011166778899",
        Password:"Password#ward1",
        rePassword:"Password#ward1",
        role:"General Manger"
    }

var Form=document.querySelector("#myForm")

if(localStorage.getItem("list")!=null)
{
    users=JSON.parse(localStorage.getItem("list"))
}
else
{
    users[0]=
    {
        firstName:"Bojack",
        lastName:"Horseman",
        userName:"Weird_Ward",
        email:"WowoManger1@gmail.com",
        phone:"011166778899",
        Password:"Password#ward1",
        rePassword:"Password#ward1",
        role:"General Manger"
    }
}

function addUsers()
{
    let user =
    {
        firstName:firstName.value,
        lastName:lastName.value,
        userName:userName.value,
        email:email.value,
        phone:Phone.value,
        Password:Password.value,
        rePassword:rePassword.value,
        role:role.value
    }
    users.push(user)
    localStorage.setItem("list",JSON.stringify(users))
}
function validateFirstName()
{
    var regex=/^[a-zA-Z ,.'-]+$/

if(regex.test(firstName.value)) 
{ 
return true;
}else{ 
return false
}
}
function validateLastName()
{
    var regex=/^[a-zA-Z ,.'-]+$/

if(regex.test(lastName.value)) 
{ 
return true;
}else{ 
return false
}
}

function validateUserName()
{
 var regex=/[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]/
 let found = false;
 
        for(let i = 0; i < users.length; i++) {
            if (users[i].userName == userName.value) {
                found = true;
                break;
            }
        }
if(regex.test(userName.value)&&found==false) 
{ 
return true;
}else{ 
return false
}
}
function validateEmail()
{
    var regex=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    let found = false;
 
        for(let i = 0; i < users.length; i++) {
            if (users[i].email == email.value) {
                found = true;
                break;
            }
        }
    if(regex.test(email.value)&&found==false) 
{ 
return true;
}else{ 
return false
}

}
function validatePassword()
{    
var regex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

if(regex.test(Password.value)) 
{ 
return true;
}else{ 
return false
}
}

function validateTelephone()
{
    var regex=/^01[0125][0-9]{8}$/
    let found =false
    for(let i = 0; i < users.length; i++) {
        if (users[i].phone == Phone.value) {
            found = true;
            break;
        }
    }
    if(regex.test(Phone.value)&&found==false) 
{ 
return true;
}else{ 
return false
}
}
function matchingPasssword()
{
    if(Password.value===rePassword.value)
    {
        return true;
    }else{
        return false;
    }
}
add.addEventListener("click",function()
{

      if(validateTelephone()==false){
        phoneError.classList.remove("d-none")
        }
        else
    {
        phoneError.classList.add("d-none")
        }
        if(validatePassword()==false){
               passError.classList.remove("d-none")
        }
        else
        {
            passError.classList.add("d-none")
        }
        if(matchingPasssword()==false){
            matchingPasswordError.classList.remove("d-none")
        }
        else
        {
            matchingPasswordError.classList.add("d-none")
        }
        if(validateFirstName()==false)
        {
            firstNameError.classList.remove("d-none")
        }else{
            firstNameError.classList.add("d-none")
        }
        if(validateLastName()==false)
        {
            lastNameError.classList.remove("d-none")
        }else{
            lastNameError.classList.add("d-none")
        }
        if(validateUserName()==false)
        {
            userNameError.classList.remove("d-none")
        }else{
            userNameError.classList.add("d-none")
        }
        
        if(validateEmail()==false)
        {
            emailError.classList.remove("d-none")
        }else{
            emailError.classList.add("d-none")
        }
        
    if(validatePassword()&&matchingPasssword()&&validateTelephone()&&validateFirstName()&&validateLastName()&&validateEmail()&&validateUserName())
    {
        addUsers()
        console.log("done")
        Form.submit();
        
    }

})

export  {x}