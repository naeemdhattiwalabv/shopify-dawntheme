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

function mergeProductData(products) {
    return products.reduce((groups, item) => {
        const product_key = item.proHandle;
        if (!groups[product_key]) {
            groups[product_key] = item;
        } else {
            groups[product_key].addedQty += item.addedQty;
        }
        return groups;
    }, {});
}   

function removeProduct(productHandle){
    console.log(productHandle);
    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    console.log(wishlist_productData);
    
    const updatedProducts = wishlist_productData.filter(wishlist_productData => wishlist_productData.proHandle != productHandle);

    console.log(updatedProducts);
    // var proHandle = wishlist_productData.map((item) => item.proHandle);
    // if (wishlist_productData) {
    //     for (let index = 0; index < proHandle.length; index++) {
    //         console.log(proHandle[index]);
        
    //     let indexe = proHandle.indexOf(productHandle); // Find the index of the element to remove
    //     console.log(indexe);
    //     if (indexe !== -1) {
    //         proHandle.splice(indexe, 1); // Remove one element at the specified index
    //      }
    //      console.log(proHandle);
    // }
    //}
}