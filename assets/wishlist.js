function wishlist(val) {
    let qtyId = 'Quantity-template--'+val+'__main';
    var addedQty = document.getElementById('Quantity-template--22655669600555__main').value;
    localStorage.setProductData("Id", val);
    localStorage.setProductData("qty", addedQty);
    console.log(localStorage.getProductData(Id));
}