function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;

    var product = [];
    var wishlist_productData = [];

    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));

    if (wishlist_productData) {
        var proIds = wishlist_productData.map(item => item.proId);
            { proId: proId, addedQty: addedQty }
        if (proIds[0] == proId) {
            product = [
                { proId: proId, addedQty: addedQty }
            ];
        }
        console.log(product);
    }

    localStorage.setItem("wishlist_product", JSON.stringify(product));
    
}