document.getElementById('add-cush-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const Cush_Out=document.getElementById('cush-out').value;
    const Cush_password=document.getElementById('password-CU').value;
    if(Cush_password==='1234'){
        const amount = document.getElementById('amount').innerText;
        const int_amount=parseFloat(amount);
        const int_cush=parseFloat(Cush_Out);
        const new_amount=int_amount - int_cush;
        document.getElementById('amount').innerText=new_amount;
  
    }
    else{
        alert('New try agran')
    }

  

})
