function wishlist(proId) {
    console.log(proId);
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
    const mergedProducts = Object.values(mergeObjectsWithSameKey(product));
    console.log(mergedProducts);
    localStorage.setItem("wishlist_product", JSON.stringify(mergedProducts));
}

function mergeObjectsWithSameKey(array) {
    return array.reduce((groups, item) => {
        const key = item.proId;
        if (!groups[key]) {
            groups[key] = item;
        } else {
            groups[key].addedQty += item.addedQty;
        }
        console.log(groups);
        return groups;
    }, {});
}   
