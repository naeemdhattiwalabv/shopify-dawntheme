function wishlist(val) {
    let qtyId = 'Quantity-template--'+val+'__main';
    console.log(qtyId);
    let addedQty = document.getElementById(qtyId).value ;
    console.log(addedQty);
    localStorage.setItem("proId", val);
    localStorage.setItem("qty", addedQty);
}