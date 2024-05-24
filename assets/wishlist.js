function wishlist(val) {
    let qtyId = "Quantity-template--"+val+'__main';
    let addedQty = document.getElementById("'"+qtyId+"'").value ;
    console.log(qtyId);
    console.log(addedQty);
    localStorage.setItem("proId", val);
    localStorage.setItem("qty", addedQty);
}