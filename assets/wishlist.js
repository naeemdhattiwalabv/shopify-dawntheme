function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;

    var product = [];
    var wishlist_productData = [];

    wishlist_productData =  JSON.parse(localStorage.getItem("wishlist_product"));
    var proIds = wishlist_productData.map(item => item.proId);
    
    console.log(proIds[0]);

    product = [
        { proId: proId, addedQty: addedQty }
    ];

    localStorage.setItem("wishlist_product", JSON.stringify(product));
    console.log((localStorage.getItem("product")));
    
}