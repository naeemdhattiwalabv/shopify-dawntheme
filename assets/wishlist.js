function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    var product = [];
        product['id'] = proId;
        product['qty'] = addedQty;
    console.log(JSON.stringify(product));
    //var wishlist_productData = [];
    // wishlist_productData =  JSON.parse(localStorage.getItem("wishlist_product"));
    // var proIds = wishlist_productData.map(item => item.proId);
    // console.log(proIds[0]);
    // if(proIds[0] != proId)
    // {
    //     product = [
    //         { proId: proId, addedQty: addedQty }
    //     ];
    //     var productJSON = JSON.stringify(product);
    //     console.log(productJSON );
    // }
    localStorage.setItem("product", JSON.stringify(product));
    console.log((localStorage.getItem("product")));
    
}