function wishlist(proHandle) {
    let addedQty = document.querySelectorAll('[name="quantity"]')[0].value;
    var wishlist_productData = product = [];
    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    if (!wishlist_productData) {
        product = [
            { proHandle: proHandle, addedQty: parseInt(addedQty) }
        ];
    } else {
        product = wishlist_productData;
        product.push({ proHandle: proHandle, addedQty: parseInt(addedQty) });
    }
    const mergedProducts = Object.values(mergeProductData(product));
    localStorage.setItem("wishlist_product", JSON.stringify(mergedProducts));
}

function mergeProductData(array) {
    return array.reduce((groups, item) => {
        const key = item.proHandle;
        if (!groups[key]) {
            groups[key] = item;
        } else {
            groups[key].addedQty += item.addedQty;
        }
        return groups;
    }, {});
}   
