class CartTimer {
  constructor(variantId, addedTime) {
    this.variantId = variantId;
    this.addedTime = addedTime;
    this.duration = this.calculateDuration();
    this.displayElement = document.getElementById("timer_countdown_" + variantId);
    this.intervalId = null;
  }

  calculateDuration() {
    const diffTime = Math.abs(new Date() - new Date(this.addedTime));
    return Math.max(60 - diffTime / 1000, 0);
  }

  startTimer() {
    const timer = this.duration;
    this.intervalId = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = Math.floor(timer % 60);
      this.displayElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      if (timer <= 0) {
        this.stopTimer();
        this.displayElement.textContent = "Expired";
        removeCartData(this.variantId);
      }
      this.duration--;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}