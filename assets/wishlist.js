function wishlist(val) {
    let qtyId = 'Quantity-template--' + val + '__main';
    var quantityElement = document.getElementById(qtyId);
    var addedQty = 1;
    if (quantityElement) {
        var addedQty = quantityElement.value;
    }
    console.log(val);
    console.log(addedQty);
    localStorage.setItem("proId", val);
    localStorage.setItem("qty", addedQty);
}