var x= document.getElementById("email");
var p=document.getElementById("password");

document.getElementById("form").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if(x.value=="admin@gmail.com" && p.value=="passw0rd"){
        swal({
            title:'Welcome',
            html: 'access granted',
            type: 'success'
        });
        setTimeout(()=>{
            loadPage();
        },3000);s
    }else{
        swal({
            title:'ERROR',
            html: 'access denied',
            type: 'error'
        });
    }
});

function loadPage(){
    window.location.href="./admin.html"
}