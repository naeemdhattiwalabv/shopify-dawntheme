document.addEventListener('DOMContentLoaded', function() {
    fetch(window.Shopify.routes.root + 'cart.js', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      cartRemoveItem(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

function cartRemoveItem(data){
  var localCartItemData = JSON.parse(localStorage.getItem('cartTimerData'));
  var cartItemData = data['items'];
  
  for (let index = 0; index < cartItemData.length; index++) {
      updateCartItem(localCartItemData[index]['variant_id']);
    console.log(cartItemData[index]['variant_id']);
    var localDateTime = localCartItemData[index]['added_time'];
    const date2 = new Date();
    const diffTime = Math.abs(date2 - new Date(localDateTime));
    if(Math.floor(diffTime / 60000) >= 5) {
      updateCartItem(localCartItemData[index]['variant_id']);
    }
  }
}

function updateCartItem(variant_id){
  let updates = {
    'id': variant_id,
    'quantity': 0
  };
  console.log(updates);
  fetch(window.Shopify.routes.root + 'cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ updates })
  })
  .then(response => {
    return response.json();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}