function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    var product = [];
    var productJSON = '';
    var wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    console.log(productJSON );
    if (product.length != 0) {
        product = [
            { proId: proId, addedQty: addedQty }
        ];
        var productJSON = JSON.stringify(product);
        console.log(productJSON );
    }
    localStorage.setItem("wishlist_product", productJSON);
    
}