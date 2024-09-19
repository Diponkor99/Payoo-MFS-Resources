document.getElementById('cush-out-btn').addEventListener('click',function(){
   document.getElementById('cush-hedden').classList.remove('hidden');
   document.getElementById('money-hedden').classList.add('hidden');
})



document.getElementById('Add-money-btn').addEventListener('click',function(){
    document.getElementById('money-hedden').classList.remove('hidden');
    document.getElementById('cush-hedden').classList.add('hidden');
})