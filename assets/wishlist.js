function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    var product = [];
    var wishlist_productData = localStorage.getItem("wishlist_product");
    console.log(wishlist_productData[proId]);
    product = [
        { proId: proId, addedQty: addedQty }
    ];
    var productJSON = JSON.stringify(product);
    console.log(productJSON );
    localStorage.setItem("wishlist_product", productJSON);
    
}