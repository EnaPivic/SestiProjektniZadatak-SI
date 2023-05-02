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
    var products=JSON.parse(localStorage.getItem('cart'));
  var cartItems=[];
  var cart_n=document.getElementById('cart_n');
  var table=document.getElementById("table");
  var total=0;

function tableHTML(i){
    return`
    <tr>
    <th scope="row">${i+1}</th>
    <td><img style="width:90px;" src"${products[i].url}"></td>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>

    </tr>

    `
}

function buy(){
    var d= new Date();
    var t=d.getTime();
    var counter=t;
    counter+=1;
    let db=firebase.database().ref('order/'+counter);
    let itemdb={
        id:counter,
        order: counter-895,
        total:total
    }
    db.set(itemdb);
    swal({
        position:center,
        type:'success',
        title:'purchase successful',
        text:   `your purchase order is:${itemdb.order}  `,
        showConfirmButton:true,
        timer:50

    })
    clean();
}

function clean(){
    localStorage.clear();
    for(let index=0;index<products.length;index++)
    {
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    total=0;
    table.innerHTML=`
    <tr>
    <th></th>
    <td></td>
    <td></td>
    <td></td>

    </tr>
    `;
    cart_n.innerHTML=``;
    document.getElementById("btnBuy").style.display="none";
    document.getElementById("btnClean").style.display="none";

}
 
  
window.onload=function (){
    for(let index=0;index<products.length;index++)
    {
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }

    table.innerHTML=`
    <tr>
    <th scope="col"></th>
    <td scope="col"></td>
    <td scope="col"></td>
    <td scope="col"></td>

    </tr>
    `;
}