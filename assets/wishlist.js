function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    var product = [];
    product[proId] = addedQty;
    let productData = product.toString();
    localStorage.setItem("wishlist_product", productData);
    console.log(localStorage.getItem("wishlist_product"));
}