const qrinput = document.getElementById('inp');
const qrimg = document.getElementById('qr-img');
const qrbutton = document.getElementById('btn');


qrbutton.addEventListener('click',() => {
    const inputValue = qrinput.value;
    if(!inputValue){
        alert('Please enter a valid URL');
        return;

    }
    else{
        qrimg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        

    }
});