document.addEventListener('DOMContentLoaded', function() {

    var addToCartButton = document.getElementById('ProductSubmitButton-template--22655669600555__main');

    // if (addToCartButton) {
    //     addToCartButton.addEventListener('click', function(event) {
    //         var currentTime = new Date().toISOString();
    //         console.log(currentTime);
    //         console.log('Product added to cart at:', currentTime);
    //         // Store the timestamp in local storage (or send it to your server)
    //         localStorage.setItem('addToCartTime', currentTime);
    //         console.log(localStorage.getItem('addToCartTime'));
    //     });
    // }
    //console.log(localStorage.getItem('cartTimerData'));
    fetch(window.Shopify.routes.root + 'cart.js', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        //console.log(response);
        return response.json();
      })
      .then(data => {
        //console.log(data);
    })
      .catch((error) => {
        console.error('Error:', error);
      });
});