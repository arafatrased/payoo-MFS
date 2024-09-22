document.getElementById('btn-addmoney')
    .addEventListener('click', function(event){
    event.preventDefault();

    //getting Input into Number using seperate Utilities Functions
    const addMoneyNumber = getInputValueById('input-add-money');
    const pinNumber = getInputValueById('pin-number');
    
    if(isNaN(addMoneyNumber)){
        alert('Invalid Input');
        return;
    }

    if(pinNumber === 1234){
        const balance = getInputTextById('account-balance');
        const newBalance = balance + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;
        // adding the transaction to transaction history
        transactionHistory(addMoneyNumber,'Add Money',newBalance);

    }else{
        alert('Wrong Pin')
    }
    

})