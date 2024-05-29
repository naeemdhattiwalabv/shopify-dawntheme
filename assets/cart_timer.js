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
    var localDateTime = localCartItemData[index]['added_time'];
    const date2 = new Date();
    console.log(date2);
    const diffTime = Math.abs(date2 - localDateTime);
    const diffDays = Math.floor(diffTime / (1000  60  60 * 24)); 
    console.log(Math.floor(diffTime / 60000) + " minute");
    console.log(diffDays + " days");
    // if (cartItemData[index]['variant_id'] == localCartItemData[index]['variant_id']){

    // }
  }
}