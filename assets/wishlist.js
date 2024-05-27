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
    window.location = "/pages/wishlist-page";
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
    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    const updatedProducts = wishlist_productData.filter(
        wishlist_productData => wishlist_productData.proHandle != productHandle
    );
    localStorage.setItem("wishlist_product", JSON.stringify(updatedProducts));
    // document.querySelectorAll('.msgsuccess').forEach(function(element) {
    //     element.style.display = 'block';
    // });
    location.reload();
}

function addtocart(value){
    alert(value);
    let qty = document.querySelectorAll('[name="wishlish_qty"]')[0].value;
    alert(qty);
}