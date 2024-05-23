function wishlist(val) {
    let qtyId = 'Quantity-template--'+val+'__main';
    var addedQty = document.getElementById(qtyId).value;
    localStorage.setItem("proId", val);
    localStorage.setItem("qty", addedQty);
    console.log(localStorage.getItem("proId")+localStorage.getItem("qty"));
}