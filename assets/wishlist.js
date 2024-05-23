function wishlist(productId) {
    var qtyId = 'Quantity-template--' +productId +'__main';
    var addedQty = document.getElementById(qtyId).value;
    console.log(addedQty);
}