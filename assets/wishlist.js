function wishlist(proId, proName) {
    let addedQty = document.querySelectorAll('[name="quantity"]')[0].value;
    var wishlist_productData = product = [];
    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    if (!wishlist_productData) {
        product = [
            { proId: proId, addedQty: parseInt(addedQty), proName: proName }
        ];
    } else {
        product = wishlist_productData;
        product.push({ proId: proId, addedQty: parseInt(addedQty) });
    }
    const mergedProducts = Object.values(mergeObjectsWithSameKey(product));
    localStorage.setItem("wishlist_product", JSON.stringify(mergedProducts));
}

function mergeObjectsWithSameKey(array) {
    return array.reduce((groups, item) => {
        const key = item.proId;
        if (!groups[key]) {
            groups[key] = item;
        } else {
            groups[key].addedQty = 1;
        }
        return groups;
    }, {});
}   
