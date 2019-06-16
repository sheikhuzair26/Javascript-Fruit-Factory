

var appleQuantity = 0;
var total = 0;
var mangoQuantity = 0;
var bananaQuantity = 0;

function addButtonApple() {

    let accessInput = document.querySelector('#txtNumApple');

    appleQuantity++;

    accessInput.innerHTML = accessInput.value;
    accessInput.value = appleQuantity;
    total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;
    document.querySelector('.total-price').innerHTML = total;
}

function substractButtonApple() {

    let accessInput = document.querySelector('#txtNumApple');

    appleQuantity--;

    accessInput.innerHTML = accessInput.value;
    accessInput.value = appleQuantity;
    total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;
    document.querySelector('.total-price').innerHTML = total;
}

// For Mango

function addButtonMango() {

    let accessInput = document.querySelector('#txtNumMango');

    mangoQuantity++;

    accessInput.innerHTML = accessInput.value;
    accessInput.value = mangoQuantity;
    total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;
    document.querySelector('.total-price').innerHTML = total;
}


function substractButtonMango() {

    let accessInput = document.querySelector('#txtNumMango');

    mangoQuantity--;

    accessInput.innerHTML = accessInput.value;
    accessInput.value = bananaQuantity;
    total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;
    document.querySelector('.total-price').innerHTML = total;
}

//  For Banana

function addButtonBanana() {

    let accessInput = document.querySelector('#txtNumBanana');

    bananaQuantity++;

    accessInput.innerHTML = accessInput.value;
    accessInput.value = bananaQuantity;
    total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;
    document.querySelector('.total-price').innerHTML = total;
}

function substractButtonBanana() {

    let accessInput = document.querySelector('#txtNumBanana');

    bananaQuantity--;

    accessInput.innerHTML = accessInput.value;
    accessInput.value = bananaQuantity;
    total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;
    document.querySelector('.total-price').innerHTML = total;
}



