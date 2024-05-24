function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;

    var product = [];
    var wishlist_productData = [];

    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    console.log(wishlist_productData);
    if (wishlist_productData) {
        var proIds = wishlist_productData.map(item => item.proId);
        if (proIds[0] != proId) {
            product = [
                { proId: proId, addedQty: addedQty }
            ];
            localStorage.setItem("wishlist_product", JSON.stringify(product));
        }
    }
}