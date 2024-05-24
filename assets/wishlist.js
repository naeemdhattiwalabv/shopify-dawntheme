function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    const product = { proId: proId, qty: addedQty };
    const jsonString = JSON.stringify(product);
    console.log(jsonString);
    localStorage.setItem("wishlist_product", JSON.stringify(jsonString));
    console.log(localStorage.getItem("wishlist_product"));
}