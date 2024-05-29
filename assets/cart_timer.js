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
      console.log(JSON.parse(localStorage.getItem('cartTimerData')));
      console.log(data['items']);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

function cartRemoveItem(data){
  console.log('test');
}