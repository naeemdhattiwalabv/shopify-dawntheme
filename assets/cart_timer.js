// document.addEventListener('DOMContentLoaded', function() {
//   var localCartItemData = JSON.parse(localStorage.getItem('cartTimerData'));
//   for (let index = 0; index < localCartItemData.length; index++) {
//     var localDateTime = localCartItemData[index]['added_time'];
//     const currentDateTime = new Date();
//     const diffTime = Math.abs(currentDateTime - new Date(localDateTime));
//     let display = document.getElementById('timer_countdown_'+localCartItemData[index]['variant_id']);
//     let duration = (diffTime / 60000) * 60;
//     showTimer(duration.toFixed(2), display);
//   }
// });

// function showTimer(duration, display) {
//   console.log('duration : '+duration);
 
//   let timer = duration, minutes, seconds;

//   console.log('timer : '+timer);

//   interval = setInterval(function() {
//       minutes = (Math.floor(timer / 60));
//       seconds = Math.round((timer % 60).toFixed(2));
//       console.log('minutes : '+minutes);
//       console.log('seconds : '+seconds);

//       minutes = minutes < 10 ? '0' + minutes : minutes;
//       seconds = seconds < 10 ? '0' + seconds : seconds;
//       display.textContent = minutes + ':' + seconds;
//       timer++;
//   }, 1000);
// }

document.addEventListener('DOMContentLoaded', function() {
  var localCartItemData = JSON.parse(localStorage.getItem('cartTimerData'));

  for (let index = 0; index < localCartItemData.length; index++) {
      var localDateTime = localCartItemData[index]['added_time'];
      const currentDateTime = new Date();
      const diffTime = Math.abs(currentDateTime - new Date(localDateTime));
      let display = document.getElementById('timer_countdown_' + localCartItemData[index]['variant_id']);
      let duration = Math.max(20 - (diffTime / 1000), 0); // Subtract elapsed seconds from 20 seconds
      showTimer(duration, display);
  }
});

function showTimer(duration, display) {
  let timer = duration, minutes, seconds;
  let interval = setInterval(function() {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.textContent = minutes + ':' + seconds;

      if (timer <= 0) {
          clearInterval(interval);
          alert('Time is up!');
      }

      timer--;
  }, 1000);
}

function checkCartData(){
  if(JSON.parse(localStorage.getItem('cartTimerData')).length == 0) {
    clearInterval(intervalId);
  }
  var localCartItemData = JSON.parse(localStorage.getItem('cartTimerData'));

  for (let index = 0; index < localCartItemData.length; index++) {
    var localDateTime = localCartItemData[index]['added_time'];
    const currentDateTime = new Date();
    const diffTime = Math.abs(date2 - new Date(localDateTime));
    if(Math.floor(diffTime / 60000) >= 1) {
     removeCartData(localCartItemData[index]['variant_id']);
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