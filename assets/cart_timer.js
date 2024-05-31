class Timer {
  constructor() {
    this.init();
  }

  init() {
    var localCartItemData = JSON.parse(localStorage.getItem("cartTimerData"));
    for (let index = 0; index < localCartItemData.length; index++) {
      let localStorageDateTime = localCartItemData[index]["added_time"];
      let variantId = localCartItemData[index]["variant_id"];
      let diffTime = Math.abs(new Date() - new Date(localStorageDateTime));
      let display = document.getElementById("timer_countdown_" + variantId);
      let duration = Math.max(60 - diffTime / 1000, 0);
      this.showTimer(duration, display, variantId);
    }
  }

  showTimer(duration, display, variantId) {
    let timer = duration,
      minutes,
      seconds;
    let interval = setInterval(() => {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (timer <= 0) {
        clearInterval(interval);
        display.textContent = "Expired";
        this.removeCartItem(variantId);
      }
      timer--;
    }, 1000);
  }

  removeCartItem(variantId) {
    fetch(window.Shopify.routes.root + "cart/change.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: variantId.toString(), quantity: 0 }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var cartData = JSON.parse(localStorage.getItem("cartTimerData"));
        const updatedData = cartData.filter(
          (cartData) => cartData.variant_id != variantId
        );
        localStorage.setItem("cartTimerData", JSON.stringify(updatedData));
        location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
