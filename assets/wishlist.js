function wishlist(val) {
    let qtyId = 'Quantity-template--' + val + '__main';
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