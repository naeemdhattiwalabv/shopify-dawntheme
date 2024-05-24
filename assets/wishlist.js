function wishlist(proId) {
    let addedQty = document.querySelectorAll('[name="quantity"]')[0].value;
    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));

    if (wishlist_productData.length == 0) {
        var product = proIds = [];
        var wishlist_productData = [];
        product = [
            { proId: proId, addedQty: addedQty }
        ];
    } else {
        product.push[
            { proId: proId, addedQty: addedQty }
        ];
    }
    // if (proIds[0] != proId) {
    //     product = [
    //         { proId: proId, addedQty: addedQty }
    //     ];
    // } else {
    //     qty = wishlist_productData.map(item => item.addedQty);
    //     var newQty = parseInt(qty[0]) + parseInt(addedQty);
    //     product = [
    //         { proId: proId, addedQty: newQty }
    //     ];
    // }
    localStorage.setItem("wishlist_product", JSON.stringify(product));
    console.log(product);
}