document.addEventListener('DOMContentLoaded', function() {
  var localCartItemData = JSON.parse(localStorage.getItem('cartTimerData'));
  for (let index = 0; index < localCartItemData.length; index++) {
    var localDateTime = localCartItemData[index]['added_time'];
    const date2 = new Date();
    const diffTime = Math.abs(date2 - new Date(localDateTime));
    let duration = (Math.floor(diffTime / 60000)) * 60;
    alert(duration);
    let display = document.getElementById('timer_countdown_'+localCartItemData[index]['variant_id']);
    display.innerHTML = duration;
  }

  // let interval;
  // function startTimer(duration, display) {
  //     let timer = duration, minutes, seconds;

  //     interval = setInterval(function() {
  //         minutes = Math.floor(timer / 60);
  //         seconds = timer % 60;

  //         minutes = minutes < 10 ? '0' + minutes : minutes;
  //         seconds = seconds < 10 ? '0' + seconds : seconds;

  //         display.textContent = minutes + ':' + seconds;

  //         if (--timer < 0) {
  //           clearInterval(interval);
  //           startTimer(duration, display);
  //         }
  //     }, 1000);
  // }
  // startTimer(duration, display);
});

function checkCartData(){
  if(JSON.parse(localStorage.getItem('cartTimerData')).length == 0) {
    clearInterval(intervalId);
  }
  var localCartItemData = JSON.parse(localStorage.getItem('cartTimerData'));

  for (let index = 0; index < localCartItemData.length; index++) {
    var localDateTime = localCartItemData[index]['added_time'];
    const date2 = new Date();
    const diffTime = Math.abs(date2 - new Date(localDateTime));
    if(Math.floor(diffTime / 60000) >= 1) {
     // removeCartData(localCartItemData[index]['variant_id']);
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
    cartData = JSON.parse(localStorage.getItem("cartTimerData"));
    const updatedData = cartData.filter(
        cartData => cartData.variant_id != variant_id
    );
    localStorage.setItem("cartTimerData", JSON.stringify(updatedData));
    location.reload();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

var intervalId = window.setInterval(function(){
  if(JSON.parse(localStorage.getItem('cartTimerData'))) {
    checkCartData();
  }
}, 5000);