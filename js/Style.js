document.getElementById('btn-Button').addEventListener('click',function(even){
    even.preventDefault();
    // console.log('click your button')

    const number=document.getElementById('Mobile-number').value;
    const pin=document.getElementById('password').value;
    if(number==="01330569510" && pin ==='1234'){
        // console.log("this is lonig");
        window.location.href='/home.html'
    }
    else{
        alert("Wrine code")
    }
    
})