function wishlist(val) {
    let addedQty =  document.querySelectorAll('[name="quantity"]')[0].value;
    console.log(addedQty);
    localStorage.setItem("proId", val);
    localStorage.setItem("qty", addedQty);
}