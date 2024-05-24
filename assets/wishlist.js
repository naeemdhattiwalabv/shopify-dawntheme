function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    var product = [];
    product[proId] = addedQty;
    console.log(product);
    localStorage.setItem("wishlist_product", product);
    console.log(localStorage.setItem("wishlist_product"));
}