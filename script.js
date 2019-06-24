var appleQuantity = 0;
var total = 0;
var mangoQuantity = 0;
var bananaQuantity = 0;

function addButtonApple() {

    let wallet = Number(document.querySelector('.wallet').value);
    let totalBill = Number(document.querySelector('.total-price').innerHTML);
    if (wallet <= totalBill) {
        alert('Sorry You have No more Money');
    }

    else {
        let accessInput = document.querySelector('#txtNumApple');

        appleQuantity++;
        total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;

        if (wallet <= totalBill) {
            alert('Sorry You have No more Money');
            appleQuantity--;
        }
        else {
            accessInput.innerHTML = accessInput.value;
            accessInput.value = appleQuantity;
            document.querySelector('.total-price').innerHTML = total;
        }
    }
}
function substractButtonApple() {

    let accessInput = document.querySelector('#txtNumApple');

    appleQuantity--;
    total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;

    accessInput.innerHTML = accessInput.value;
    accessInput.value = appleQuantity;
    document.querySelector('.total-price').innerHTML = total;
}

// For Mango

function addButtonMango() {


    let wallet = Number(document.querySelector('.wallet').value);
    let totalBill = Number(document.querySelector('.total-price').innerHTML);
    if (wallet <= totalBill) {
        alert('Sorry You have No more Money');
    }

    else {

        let accessInput = document.querySelector('#txtNumMango');

        mangoQuantity++;
        total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;
        if (wallet <= total) {
            alert('Sorry You have No more Money 2');
            mangoQuantity--;
        }
        else {
            accessInput.innerHTML = accessInput.value;
            accessInput.value = mangoQuantity;
            document.querySelector('.total-price').innerHTML = total;
        }

    }
}

function substractButtonMango() {

    let accessInput = document.querySelector('#txtNumMango');

    mangoQuantity--;
    total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;

    accessInput.innerHTML = accessInput.value;
    accessInput.value = bananaQuantity;
    document.querySelector('.total-price').innerHTML = total;
}

//  For Banana

function addButtonBanana() {


    let wallet = Number(document.querySelector('.wallet').value);
    let totalBill = Number(document.querySelector('.total-price').innerHTML);
    if (wallet <= totalBill) {
        alert('Sorry You have No more Money');
    }

    else {
        let accessInput = document.querySelector('#txtNumBanana');

        bananaQuantity++;
        total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;

        if (wallet <= totalBill) {
            alert('Sorry You have No more Money');
            bananaQuantity--;
        }

        else {
            accessInput.innerHTML = accessInput.value;
            accessInput.value = bananaQuantity;
            document.querySelector('.total-price').innerHTML = total;
        }
    }
}
function substractButtonBanana() {

    let accessInput = document.querySelector('#txtNumBanana');

    bananaQuantity--;
    total = appleQuantity * 10 + mangoQuantity * 15 + bananaQuantity * 7;

    accessInput.innerHTML = accessInput.value;
    accessInput.value = bananaQuantity;
    document.querySelector('.total-price').innerHTML = total;
}



