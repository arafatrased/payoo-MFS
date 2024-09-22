document.getElementById('btn-cashout')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const cashOutNumber = getInputValueById('input-cash-out');
        const cashoutPinNumber = getInputValueById('pin-cash-number');


        if(isNaN(cashOutNumber)){
            alert('Invalid Input');
            return;
        };

        if(cashoutPinNumber === 1234){
            const balance = getInputTextById('account-balance');
            if(cashOutNumber > balance){
                alert('You dont have enough balance');
                return;
            }
            const newBalance = balance - cashOutNumber;
            
            document.getElementById('account-balance').innerText = newBalance;

            //common cashout function
            transactionHistory(cashOutNumber,'Cash Out',newBalance);
    }else{
            alert('Wrong Pin')
        }
    })