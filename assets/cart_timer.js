function getcartData(){
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
      checkCartData(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function checkCartData(data){
  var localCartItemData = JSON.parse(localStorage.getItem('cartTimerData'));
  var cartItemData = data['items'];
  
  for (let index = 0; index < cartItemData.length; index++) {
    var localDateTime = localCartItemData[index]['added_time'];
    const date2 = new Date();
    const diffTime = Math.abs(date2 - new Date(localDateTime));
    if(Math.floor(diffTime / 60000) >= 1) {
      removeCartData(cartItemData[index]['variant_id']);
    }
  }
}

function removeCartData(variant_id){
  fetch(window.Shopify.routes.root + 'cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'id': variant_id.toString(), 'quantity': 0})
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    location.reload();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

var intervalId = window.setInterval(function(){
  if(JSON.parse(localStorage.getItem('cartTimerData'))) {
    cartData();
  }
}, 5000);