document.addEventListener("DOMContentLoaded", function () {
  var localCartItemData = JSON.parse(localStorage.getItem("cartTimerData"));

  for (let index = 0; index < localCartItemData.length; index++) {
    new Timer(localCartItemData[index]);
  }
});

class Timer {
  constructor(cartItem) {
    this.variantId = cartItem.variant_id;
    this.addedTime = cartItem.added_time;
    this.display = document.getElementById("timer_countdown_" + this.variantId);
    this.init();
  }

  init() {
    const currentDateTime = new Date();
    const diffTime = Math.abs(currentDateTime - new Date(this.addedTime));
    let duration = Math.max(60 - diffTime / 1000, 0); // 60 seconds - elapsed time in seconds
    this.showTimer(duration);
  }

  showTimer(duration) {
    let timer = duration,
      minutes,
      seconds;
    this.interval = setInterval(() => {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.display.textContent = minutes + ":" + seconds;

      if (timer <= 0) {
        clearInterval(this.interval);
        this.display.textContent = "Expired";
        this.removeCartData(this.variantId);
      }

      timer--;
    }, 1000);
  }

  removeCartData(variantId) {
    fetch(window.Shopify.routes.root + "cart/change.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: variantId.toString(), quantity: 0 }),
    })
    .then((response) => response.json())
    .then((data) => {
      let cartData = JSON.parse(localStorage.getItem("cartTimerData"));
      const updatedData = cartData.filter(
        (item) => item.variant_id != variantId
      );
      localStorage.setItem("cartTimerData", JSON.stringify(updatedData));
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
}
