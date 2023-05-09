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


window.onload=function (){

 var order=firebase.database().ref("order/");
 order.on("child_added",function(data){
    var orderValue=data.val();
    document.getElementById("table").innerHTML+=`
    <tr>
    <td>${orderValue.id}</td>
    <td>${orderValue.order}</td>
    <td>${orderValue.total}</td>
    </tr>
    `;
 });
}