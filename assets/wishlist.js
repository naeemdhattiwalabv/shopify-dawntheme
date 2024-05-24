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
    product = groupByField(product, 'proId');
    console.log(product);
    localStorage.setItem("wishlist_product", JSON.stringify(product));
}

function groupByField(array, field) {
    return array.reduce((groups, item) => {
        const value = item[field];
        if (!groups[value]) {
            groups[value] = item;
        } else {
            // Merge the current object with the existing object
            Object.assign(groups[value], item);
        }
        return groups;
    }, {});
}