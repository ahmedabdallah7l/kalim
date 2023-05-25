
const tabs=Array.from(document.querySelectorAll(".page a"))
const attr= document.querySelector("section")
const currentId= attr.getAttribute("id")

        switch(currentId)
        {
            case "Home":
                tabs[0].classList.add("active2");
                break;
            case "About":
                tabs[1].classList.add("active2");
            break;
            case "contact":
                
            break;
        }   
    
var defultLang="en"

var cartona=""
if(JSON.parse(sessionStorage.getItem("lang"))=="ar")
{
   console.log("beeeeeeeeeeb")
   cartona=`<nav class="navbar  navbar-expand-lg navbar-light bg-light fixed-top pt-3 navbar navbar-default navbar-static-top custom">
   <div class="container-fluid">
       <a class="navbar-brand" href="./HomeAr.html">
           <img src="./images/main logo.png" alt="" width="25" height="30" class="d-inline-block ms-5 align-text-top">
       </a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
       <ul class="navbar-nav justify-content-between me-5 position-absolute">
         <li class="nav-item page ">
           <a class="nav-link " aria-current="page" href="./HomeAr.html" id="Home">الصفحة الرئيسة </a>
         </li>
         <li class="nav-item page">
           <a class="nav-link" href="./infoAr.html" id="About">معلومات</a>
         </li>
         <li class="nav-item page">
           <a class="nav-link" href="./productAr.html" id="Products">منتجات</a>
         </li>
         <li class="nav-item page">
           <a class="nav-link" href="./helpAr.html" id="Help">مساعدة</a>
         </li>
         <li class="nav-item page">
           <a class="nav-link" href="./loginArr.html" id="login">تسجيل</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="./signUpAr.html">
               <img src="./images/Join icon.png"width="25" height="20" alt="">
           </a>
         </li>
         <li class="nav-item ">
           <a class="nav-link" href="./chartAr.html">
               <img src="./images/cart icon.png"width="30" height="20" alt="">
           </a>
         </li>
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <img src="./images/Egypt flag.png" width="30" height="18" alt="">
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
             <li><a class="dropdown-item" id="en" href="./index.html"><img src="./images/England flag.png" width="40" height="24" alt=""></a></li>
             <li><a class="dropdown-item" id="ger" href="./homegr.html"><img src="./images/germany flag.png" width="40" height="24" alt=""></a></li>
             <li><a class="dropdown-item" id="ar" href="./HomeAr.html"><img src="./images/Egypt flag.png" width="40" height="24" alt=""></a></li>
           </ul>
         </li>
       </ul>
     </div>
   </div>
   </nav>  `
}
else if(JSON.parse(sessionStorage.getItem("lang"))=="ger")
{
  console.log("teeeeeeeeeeeeeeet")
  cartona=`<nav class="navbar  navbar-expand-lg navbar-light bg-light fixed-top pt-3 navbar navbar-default navbar-static-top custom">
  <div class="container-fluid">
      <a class="navbar-brand" href="./homegr.html">
          <img src="./images/main logo.png" alt="" width="25" height="30" class="d-inline-block ms-5 align-text-top">
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav justify-content-between me-5 position-absolute">
        <li class="nav-item page ">
          <a class="nav-link " aria-current="page" href="./homegr.html" id="Home">Startseite
          </a>
        </li>
        <li class="nav-item page">
          <a class="nav-link" href="./Aboutgr.html" id="About">Über
          </a>
        </li>
        <li class="nav-item page">
          <a class="nav-link" href="./Productgr.html" id="Products">Produkte</a>
        </li>
        <li class="nav-item page">
          <a class="nav-link" href="./Helpgr.html" id="Help">Hilfe</a>
        </li>
        <li class="nav-item page">
          <a class="nav-link" href="./logingr.html" id="login">Anmeldung</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./signUpgr.html">
              <img src="./images/Join icon.png"width="25" height="20" alt="">
          </a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="./chartgr.html">
              <img src="./images/cart icon.png"width="30" height="20" alt="">
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="./images/germany flag.png" width="30" height="18" alt="">
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" id="en" href="./index.html"><img src="./images/England flag.png" width="40" height="24" alt=""></a></li>
            <li><a class="dropdown-item" id="ger" href="./Homegr.html"><img src="./images/germany flag.png" width="40" height="24" alt=""></a></li>
            <li><a class="dropdown-item" id="ar" href="./HomeAr.html"><img src="./images/Egypt flag.png" width="40" height="24" alt=""></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </nav>  `
  
}else 
{
  cartona=`<nav class="navbar  navbar-expand-lg navbar-light bg-light fixed-top pt-3 navbar navbar-default navbar-static-top custom">
  <div class="container-fluid">
      <a class="navbar-brand" href="./index.html">
          <img src="./images/main logo.png" alt="" width="25" height="30" class="d-inline-block ms-5 align-text-top">
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav justify-content-between me-5 position-absolute">
        <li class="nav-item page ">
          <a class="nav-link " aria-current="page" href="./index.html" id="Home">Home</a>
        </li>
        <li class="nav-item page">
          <a class="nav-link" href="./About.html" id="About">About</a>
        </li>
        <li class="nav-item page">
          <a class="nav-link" href="./Product.html" id="Products">Products</a>
        </li>
        <li class="nav-item page">
          <a class="nav-link" href="./Help.html" id="Help">Help</a>
        </li>
        <li class="nav-item page">
          <a class="nav-link" href="./login.html" id="login">login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./signUp.html">
              <img src="./images/Join icon.png"width="25" height="20" alt="">
          </a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="./buy.html">
              <img src="./images/cart icon.png"width="30" height="20" alt="">
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="./images/England flag.png" width="30" height="18" alt="">
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" id="en" href="./index.html"><img src="./images/England flag.png" width="40" height="24" alt=""></a></li>
            <li><a class="dropdown-item" id="ger" href="./homegr.html"><img src="./images/germany flag.png" width="40" height="24" alt=""></a></li>
            <li><a class="dropdown-item" id="ar" href="./HomeAr.html"><img src="./images/Egypt flag.png" width="40" height="24" alt=""></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </nav>    `
}

document.getElementById("nav").innerHTML=cartona

var en=document.querySelector("#en")
var ar=document.querySelector("#ar")
var ger=document.querySelector("#ger")


ar.addEventListener("click",()=>
{
  console.log("kijkjkj")
   defultLang="ar"
   sessionStorage.setItem("lang",JSON.stringify(defultLang))
   window.location.href="./HomeAr.html"
})
en.addEventListener("click",()=>
{
  console.log("eeeeeee")
  defultLang="en"
  sessionStorage.setItem("lang",JSON.stringify(defultLang))
  window.location.href="./index.html"
})
ger.addEventListener("click",()=>
{
  console.log("eeeeeee")
  defultLang="ger"
  sessionStorage.setItem("lang",JSON.stringify(defultLang))
  window.location.href="./homegr.html"
})
