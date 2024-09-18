
//step-1: set event handler to submission button
document.getElementById('btn-login').addEventListener('click', function(event){
    //step-2: prevent form reloding default behavior
    event.preventDefault();

    //step-3: get the phone number
    const phoneNumber = document.getElementById('phn-number').value;
    console.log(phoneNumber)


})