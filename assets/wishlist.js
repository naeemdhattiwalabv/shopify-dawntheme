function wishlist(val) {
    let qtyId = 'Quantity-template--'+val+'__main';
    var addedQty = document.getElementById('Quantity-template--22655669600555__main').value;
    localStorage.setItem("proId", val);
    localStorage.setItem("qty", addedQty);
}