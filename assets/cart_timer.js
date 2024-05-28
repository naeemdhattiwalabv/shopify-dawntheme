document.addEventListener('DOMContentLoaded', function() {
    var addToCartButton = document.getElementById('ProductSubmitButton-template--22655669600555__main');
    if (addToCartButton) {
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
    }
});