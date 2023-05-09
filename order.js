window.onload=function (){//read order
    readOrder()
 
}

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

var d=new Date();
var t=d.getTime();
var counter=t;
document.getElementById("form").addEventListener("submit",(e)=>{
    var order=document.getElementById("order").value;
    var total=document.getElementById("total").value;
    e.preventDefault();
    createOrder(order,total);
    form.reset();
});


function createOrder(order,total)
{
    console.log(counter);
    counter+=1;
    console.log(counter);
    var newOrder={
        id:counter,
        order:order,
        total:total
    };
    let db=firebase.database().ref("order/"+counter);
    db.set(newOrder);
    document.getElementById("cardSection").innerHTM='';
    readOrder();
}
function readOrder(){
    var order=firebase.database().ref("/order");
    order.on("child_added",function(data)
{
        var orderValue=data.val();
        document.getElementById("cardSection").innerHTML+= `
        <div class="card mb-3">
        <div class="card-body">
        <h5 class="card-title">Order:${orderValue.order}</h5>
        <p class="card-text">Total:${orderValue.total}</p>
        <button type="submit" style="color:white;" class="btn btn-warning" onclick="updateOrder(${orderValue.id},'${orderValue.order}','${orderValue.total}')"><i class="glyphicon glyphicon-edit"></i>Edit order</button>
        <button type="submit" class="btn btn-danger" onclick="deleteOrder(${orderValue.id})"><i class="glyphicon glyphicon-trash"></i>Delete order</button>
        </div>
        </div> `;
    });

}
function reset(){
document.getElementById("firstSection").innerHTML+=`     
<form class="border p-4 mb-4" id="form">
<div class="form-group">
    <label>Order</label>
    <input type="text" class="form-control" id="order" placeholder="order">
</div>
<div class="form-group">
    <label>Total</label>
    <input type="text" class="form-control" id="total" placeholder="total">
</div>
<button type="submit" id="button1" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i> Add Order</button>
<button style="display:none;" id="button2" class="btn btn-success">Update order</button>
<button style="display:none;" id="button3" class="btn btn-danger">Cancel order</button>

</form>`;

document.getElementById("form").addEventListener("submit",(e)=>{
    var order=document.getElementById("order").value;
    var total=document.getElementById("total").value;
    e.preventDefault();
    createOrder(order,total);
    form.reset();
});
}

function updateOrder(id,order,total){
    document.getElementById("firstSection").innerHTML+=` 
     <form class="border p-4 mb-4" id="form2">
    <div class="form-group">
        <label>Order</label>
        <input type="text" class="form-control" id="order" placeholder="order">
    </div>
    <div class="form-group">
        <label>Total</label>
        <input type="text" class="form-control" id="total" placeholder="total">
    </div>
    <button style="display:none;" type="submit" id="button1" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i> Add Order</button>
    <button  id="button2" class="btn btn-success">Update order</button>
    <button  id="button3" class="btn btn-danger">Cancel order</button>
    
    </form>`;

document.getElementById("form2").addEventListener("submit",(e)=>{
    e.preventDefault();
});
document.getElementById("button3").addEventListener("click",(e)=>{
    reset();
});
document.getElementById("button2").addEventListener("click",(e)=>{
    updateOrder2(id,document.getElementById("order").value,document.getElementById("total").value);
});
document.getElementById("order").value=order;
document.getElementById("total").value=total;
}
function updateOrder2(id,order,total)
{
    var orderUpdated={
        id:id,
        order:order,
        total:total
    };
    let db=firebase.database().ref("order/"+id);
    db.set(orderUpdated);
    document.getElementById("cardSection").innerHTM+='';
    readOrder();
    reset();
}

function deleteOrder(){
    console.log(id);
    var order=firebase.database().ref("order/"+id);
    order.remove();
    reset();
    document.getElementById("cardSection").innerHTM+='';
    readOrder();
}

