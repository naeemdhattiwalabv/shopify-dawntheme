function wishlist(proId) {
    let addedQty = document.querySelectorAll('[name="quantity"]')[0].value;
    var wishlist_productData = product = [];
    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    if (!wishlist_productData) {
        product = [
            { proId: proId, addedQty: parseInt(addedQty) }
        ];
    } else {
        product = wishlist_productData;
        product.push({ proId: proId, addedQty: parseInt(addedQty) });
    }
    console.log(product);
    const mergedProducts = Object.values(mergeObjectsWithSameKey(products));
    console.log(mergedData);
    localStorage.setItem("wishlist_product", JSON.stringify(product));
}

function mergeObjectsWithSameKey(array) {
    return array.reduce((groups, item) => {
        const key = item.proId;
        if (!groups[key]) {
            groups[key] = item;
        } else {
            // Merge the current object with the existing object
            groups[key].addedQty += item.addedQty;
        }
        return groups;
    }, {});
}   
