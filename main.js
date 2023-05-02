    //THIS IS WHERE YOU PASTE THE CODE TO CONNECT TO YOUR OWN DATABASE
        //Copy and paste the CDN bit of code from your app that you created on Firebase.
        //The script tag above is already there, so careful not to have duplicate script tags.
        //After you've copied and pasted, just delete the unnecessary script tags. 
    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCaPbtvoBZ6DcSd94HVNBP5bsJmpNUdj2Y",
    authDomain: "fbase-proj.firebaseapp.com",
    databaseURL: "https://fbase-proj-default-rtdb.firebaseio.com",
    projectId: "fbase-proj",
    storageBucket: "fbase-proj.appspot.com",
    messagingSenderId: "725907087760",
    appId: "1:725907087760:web:720ccf787397aa1b00d315",
    measurementId: "G-JRBMLMXJ2D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  var products=[];
  var cartItems=[];
  var cart_n=document.getElementById('cart_n');
  var jewlDIV=document.getElementById('jewlDIV');


  var PRODUCTS=[
    {name:'Dress' ,price:10},
    {name:'Watch #1' ,price:1},
    {name:'Bracelet #1' ,price:1},
    {name:'Necklace #1' ,price:1},
    
    {name:'Keyboard' ,price:10}

];


function cart(name,price,url,con,btncart)
{
  var item={
      name:name,
      price:price,
      url:url,
      con:con

  }
  cartItems.push(item);
  let storage=JSON.parse(localStorage.getItem("cart"));
  if(storage==null)
  {
      products.push(item);
      localStorage.setItem("cart",JSON.stringify(products));
  }else{
      products=JSON.parse(localStorage.getItem("cart"));
      products.push(item);
      localStorage.setItem("cart",JSON.stringify(products));
  }
  products=JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
      document.getElementById(btncart).style.display="none";
      alert("success");
}

function cart2(name,price,url,con,btncart)
{
  var item={
      name:name,
      price:price,
      url:url,
      con:con

  }
  cartItems.push(item);
  let storage=JSON.parse(localStorage.getItem("cart"));
  if(storage==null)
  {
      products.push(item);
      localStorage.setItem("cart",JSON.stringify(products));
  }else{
      products=JSON.parse(localStorage.getItem("cart"));
      products.push(item);
      localStorage.setItem("cart",JSON.stringify(products));
  }
  products=JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
      document.getElementById(btncart).style.display="none";
      alert("success");
}



  function HTMLjewlProduct(con)
  {
    
    let url=`img/prod${con}.png`;
    let btn=`btnJewl${con}`;
   
    return `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm d-flex justify-content-between align-items-center">
    <img class="card-img-top" style="height:200px;width:200px" src="${url}">
    <div class="card-body">
    <p class="card-text text-center">${PRODUCTS[con-1].name}</p>
    <p class="card-text text-center">Price: ${PRODUCTS[con-1].price}.00$</p>
    <div class="d-flex justify-content-between align-items-center">
    <div class="btn-group d-flex justify-content-between align-items-center">
        <button type="button" id="cart2" onclick="cart2('${PRODUCTS[con-1].name}','${PRODUCTS[con-1].price}','${url}','${con}','${btn}')" class="btn btn-sm btn-light m-3"><a href="cart.html" >BUY</a></button>
        <button type="button" id="cart" onclick="cart('${PRODUCTS[con-1].name}','${PRODUCTS[con-1].price}','${url}','${con}','${btn}')" class="btn btn-sm btn-secondary">Add to Cart</button>

    </div>
    </div>
    </div>
    </div>
    </div>
 
    `
  }
function animation(){
    const toast=swal.mixin({
        toast:true,
        position: top-end,
        showConfirmButton:false,
        timer:1000
    });
    toast({
    type:'success',
    title: 'Added to shopping cart'
    });
}
  
  window.onload=function (){

    for(let index=1;index<6;index++)
    {
        jewlDIV.innerHTML+=`${HTMLjewlProduct(index)}`;
        

    }
  
    if(localStorage.getItem("cart")==null)
    {
        
    }else
    {
        products=JSON.parse(localStorage.getItem("cart"))
        cart_n.innerHTML=`[${products.length}]`
    }
}

