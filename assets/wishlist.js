function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    var product = [];
    product = [
        { proId: proId, addedQty: addedQty }
      ];
    var productJSON = JSON.stringify(product);
    console.log(productJSON);
    localStorage.setItem("wishlist_product", product);
    console.log(localStorage.getItem("wishlist_product"));
}