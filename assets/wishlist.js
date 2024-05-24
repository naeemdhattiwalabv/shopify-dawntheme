function wishlist(proId) {
    let addedQty = document.querySelectorAll('[name="quantity"]')[0].value;
    var wishlist_productData = product = [];
    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    if (!wishlist_productData) {
        product = [
            { proId: proId, addedQty: addedQty }
        ];
    } else {
        product = wishlist_productData;
        product.push({ proId: proId, addedQty: addedQty });
    }
    console.log(product);
    localStorage.setItem("wishlist_product", JSON.stringify(product));
}