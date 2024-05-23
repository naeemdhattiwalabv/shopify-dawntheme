function wishlist(productId) {
    let qtyId = 'Quantity-template--' +productId +'__main';
    var addedQty = document.getElementById(qtyId).value;
    console.log(addedQty);
}