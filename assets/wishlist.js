function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    var product = [];
    var wishlist_productData = localStorage.getItem("wishlist_product");
    var proIds = wishlist_productData.map(item => item.proId);
    console.log(proIds);
    product = [
        { proId: proId, addedQty: addedQty }
    ];
    var productJSON = JSON.stringify(product);
    console.log(productJSON );
    localStorage.setItem("wishlist_product", productJSON);
    
}