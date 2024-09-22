
//This function is useable for only input field
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}


function getInputTextById(id){
    const inputText = document.getElementById(id).innerText;
    console.log(inputText);
    const inputTextNumber = parseFloat(inputText);
    return inputTextNumber;
}


function showASectionById(id){
    document.getElementById('addmoney-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    ///show clicked button related form by removing hidden class

    document.getElementById(id).classList.remove('hidden');
}

//// transaction history

function transactionHistory(money, type, total){
    let div = document.createElement('div');
    
    div.classList.add('bg-slate-500');
    div.classList.add('p-3');
    div.classList.add('text-center');
    div.innerHTML = `
            <h1 class="font-bold text-2xl">${type}</h1>
            <p>${type} Tk. ${money}, New Blance is: TK. ${total} </p>
    `
    document.getElementById('transaction-container').appendChild(div);
}