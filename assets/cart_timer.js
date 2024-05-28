document.addEventListener('DOMContentLoaded', function() {
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