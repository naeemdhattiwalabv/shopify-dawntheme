function wishlist(productId) {
    var qtyId = 'Quantity-template--'+productId+'__main';
    var qty = document.getElementById(qtyId).val;
    console.log(qty);
}