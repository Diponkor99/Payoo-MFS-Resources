document.getElementById('add-amount-btn').addEventListener('click',
    function(even){
        even.preventDefault();
       const add_amount=document.getElementById('new-amount').value;
       const password=document.getElementById('Old-password').value;
       if(password==='1234'){
         const amount_old=document.getElementById('amount').innerText;
        const int_newAmount=parseFloat(add_amount);
        const int_OldAmount=parseFloat(amount_old);
         const foraner_amount=int_newAmount+int_OldAmount;

        document.getElementById('amount').innerText=foraner_amount;
        
       }
       else{
        alert("try agyn")
       }
    }
)