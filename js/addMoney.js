document.getElementById('btn-addmoney')
    .addEventListener('click', function(event){
    event.preventDefault();

    //getting Input into Number using seperate Utilities Functions
    const addMoneyNumber = getInputValueById('input-add-money');
    const pinNumber = getInputValueById('pin-number');

    if(pinNumber === 1234){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('Wrong Pin')
    }
    
   


})