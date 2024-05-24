function wishlist(proId) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    console.log(addedQty);
    localStorage.setItem("proId", [proId]);
    localStorage.setItem("qty", [addedQty]);
    console.log(localStorage.getItem("proId"));
    console.log(localStorage.getItem("qty"));
}