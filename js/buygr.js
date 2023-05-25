var empty= document.querySelector("#hallow")
var kolo=document.querySelector("#kolo")
var checkOut=document.querySelector(".checkout")
console.log(kolo)
console.log(empty)
  if (localStorage.getItem("beeeb") != null) {
    
      var list=JSON.parse(localStorage.getItem("beeeb"))
     console.log(list)
     console.log("beeeeeeeeb")
    empty.classList.add("d-none");
    checkOut.classList.remove("d-none")
  } else {

    console.log("empty")
    empty.classList.remove("d-none");
    checkOut.classList.add("d-none")
  }


function displayProduct()
{
    var cartona=""
    for(let i=0;i<list.length;i++)
    {
         cartona+=`  <div class="col-lg-12">
         <div class="row ">
             <div class="item d-flex align-content-center mb-3 justify-content-center bg-white p-5 rounded-4 w-60  m-auto">
                 <div class="col-lg-4">
                     <img src="${list[i].productImage}" class="w-75" alt="">
                 </div>
                 <div class="col-lg-8">
                 <h2 class="fw-bold">${list[i].productName}</h2>
                 <p>${list[i].productGermanContent}</p>
                 <h5 class="fw-bold">Pfegehinweise</h5>
                 <p>${list[i].productGermanInstruction}</p>
                 <h6 class="fw-bold">Größe:</h6>
                 <p>${list[i].productSize} cm</p>
                 <h6 class="fw-bold">Preis:</h6>
                 <p class="fw-bolder fs-5">${list[i].productPrice} EGP</p>
                 <h6 class="fw-bold">Quantität:</h6>
                 <div class="quantity d-flex mb-4">
                     <span id="minus">-</span>
                     <span id="quantity" class="border-1">1</span>
                     <span id="plus" class="border-1">+</span>
                 </div>
                 </div>
                 <div class="closemark">
                 <i class="fa-solid fa-xmark pointer-event pe-auto" id="close" role="button onclick="deleteee(${i})" ></i>
             </div>
             </div>         
             <hr>
             
         </div>
     </div>`
    }

    

    document.querySelector("#kolo").innerHTML=cartona
    
}

displayProduct()
var closeIcons=document.querySelectorAll("#close")
console.log(closeIcons)
function deleteee(i)
{
   list.splice(i,1)
    localStorage.setItem("beeeb",JSON.stringify(list))
    displayProduct()

    
}
document.addEventListener
closeIcons.forEach((icon,index) => {
    icon.addEventListener("click",()=>
    { 
        console.log("hi")
        list.splice(index,1)
        console.log(list)
        localStorage.setItem("beeeb",JSON.stringify(list))
        displayProduct()

    })
    
});

