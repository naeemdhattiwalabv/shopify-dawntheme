document.addEventListener('DOMContentLoaded', function() {

    var addToCartButton = document.getElementById('add-to-cart');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', function(event) {
            var currentTime = new Date().toISOString();
            console.log('Product added to cart at:', currentTime);
            // Store the timestamp in local storage (or send it to your server)
            localStorage.setItem('addToCartTime', currentTime);
        });
    }
    
    fetch(window.Shopify.routes.root + 'cart.js', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
    })
      .catch((error) => {
        console.error('Error:', error);
      });
});