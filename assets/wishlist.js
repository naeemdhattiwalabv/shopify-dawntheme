function wishlist(proHandle) {
    var addedQty = 1;
    if(document.querySelectorAll('[name="quantity"]')[0]) {
        addedQty = document.querySelectorAll('[name="quantity"]')[0].value;
    }
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

function removeWishlistProduct(productHandle){
    wishlist_productData = JSON.parse(localStorage.getItem("wishlist_product"));
    const updatedProducts = wishlist_productData.filter(
        wishlist_productData => wishlist_productData.proHandle != productHandle
    );
    localStorage.setItem("wishlist_product", JSON.stringify(updatedProducts));
    location.reload();
}

function addtocartWishlistProduct(proVariantId){
    let qty = document.querySelectorAll('[name="wishlish_qty_'+proVariantId+'"]')[0].value;
    let formData = {
        'items': [{
            'id': proVariantId,
            'quantity': qty
        }]
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        removeWishlistProduct(data['items'][0]['handle']);
        return window.location = "/cart";
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}