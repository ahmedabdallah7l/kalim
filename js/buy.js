var empty= document.querySelector("#hallow")
var kolo=document.querySelector("#kolo")
var checkOut=document.querySelector(".checkout")
console.log(kolo)
console.log(empty)
if (localStorage.getItem("beeeb") != null) {
    var list=JSON.parse(localStorage.getItem("beeeb"))
    empty.classList.add("d-none");
    checkOut.classList.remove("d-none")
  } else {
    console.log(empty)
    empty.classList.remove("d-none");
    checkOut.classList.add("d-none")
  }


function desplay()
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
                 <p>${list[i].productContent}</p>
                 <h5 class="fw-bold">Care Instruction</h5>
                 <p>Dry clean - cold water hand wash - no dryer</p>
                 <h6 class="fw-bold">Size:</h6>
                 <p>${list[i].productSize} cm</p>
                 <h6 class="fw-bold">Price:</h6>
                 <p class="fw-bolder fs-5">${list[i].productPrice} EGP</p>
                 <h6 class="fw-bold">Quantity:</h6>
                 <div class="quantity d-flex mb-4">
                     <span id="minus">-</span>
                     <span id="quantity" class="border-1">1</span>
                     <span id="plus" class="border-1">+</span>
                 </div>
                 </div>
             </div>         
             <hr>
         </div>
     </div>`
    }

    document.querySelector("#kolo").innerHTML=cartona
}

desplay()
// localStorage.removeItem("beeeb")