function wishlist(proId) {
    let addedQty = document.querySelectorAll('[name="quantity"]')[0].value;
    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    var product = [];
    if (!wishlist_productData) {
        product = [
            { proId: proId, addedQty: addedQty }
        ];
        localStorage.setItem("wishlist_product", JSON.stringify(product)); 
    } else {
         product = 'test';
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
    console.log(product);
}