function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    var product = [];
    product[0] = prompt(proId);
    console.log(product);
    localStorage.setItem("proId", [proId]);
    localStorage.setItem("qty", [addedQty]);
}