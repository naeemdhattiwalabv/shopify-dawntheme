
const myTimeout = setTimeout(wishlist, 10000);


function wishlist(val) {
    //let qtyId = 'Quantity-template--' + val + '__main';
    let qtyId =  document.querySelectorAll('[name="quantity"]')[0].value;
    console.log(qtyId);
    
    let element = document.getElementById(qtyId);
    if (element) {
        let addedQty = element.value;
        console.log(addedQty);
        
        localStorage.setItem("proId", val);
        localStorage.setItem("qty", addedQty);
    } else {
        console.error('Element with ID ' + qtyId + ' not found.');
    }
}

function myStopFunction() {
    clearTimeout(myTimeout);
  }