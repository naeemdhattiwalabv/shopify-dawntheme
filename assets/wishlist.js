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
    const mergedData = mergeObjects(product);
    console.log(mergedData);
    localStorage.setItem("wishlist_product", JSON.stringify(product));
}

function mergeObjects(array) {
    return array.reduce((merged, obj) => {
        const existing = merged.find(item => item.proId === obj.proId);
        if (existing) {
            existing.addedQty += obj.addedQty; // Merge the addedQty values
        } else {
            merged.push(obj); // Add the object if it doesn't exist in the merged array
        }
        return merged;
    }, []);
}
