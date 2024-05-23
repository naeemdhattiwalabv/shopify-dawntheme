function wishlist(val) {
    let qtyId = 'Quantity-template--'+val+'__main';
    console.log(qtyId);
    var addedQty = document.getElementById('Quantity-template--22655669600555__main').value;
    console.log(addedQty);
    localStorage.setProductData("Id", val);
    localStorage.setProductData("qty", addedQty);

}