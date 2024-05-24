function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    var product = [];
     product = [proId => proId, qty => addedQty];
    console.log(product);
    //localStorage.setItem("wishlist_product", JSON.stringify(product));
    //console.log(localStorage.getItem("wishlist_product"));
}