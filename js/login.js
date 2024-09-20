
//step-1: set event handler to submission button
document.getElementById('btn-login').addEventListener('click', function(event){
    //step-2: prevent form reloding default behavior
    event.preventDefault();

    //step-3: get the phone number & pin number using seperate utilitis
    //function
    const phoneNumber = getInputValueById('phn-number');
    const pinNumber = getInputValueById('pin-number')
    
    if(phoneNumber === 5555 && pinNumber === 1234){
        window.location.href = '/home.html'
    }else{
        alert('Wrong Phone or Pin No')
    }


})