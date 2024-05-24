function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    let product = { proId: proId, qty: addedQty };
    localStorage.setItem("wishlist_product", product);
    console.log(localStorage.getItem("wishlist_product"));
}