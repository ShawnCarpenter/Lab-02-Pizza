class Parlor {
  #drivers = [];
  #orders = [];

  #clearDriversSchedule() {
    this.#drivers
      .forEach(driver => driver.currentSchedule.clear());
  }

  #sortOrders() {
    return this.#orders
      .sort((a, b) => a.deliveryMinute - b.deliveryMinute);
  }

  #calculateSchedule() {
    // clear the schedule
    this.#clearDriversSchedule();

    // sort orders by first deliveryMinute
    this.#sortOrders()
      .forEach(order => {
        for(let i = 0; i < this.#drivers.length; i++) {
          const driverSchedule = this.#drivers[i].currentSchedule;
          // if a driver is free to deliver an order
          if(driverSchedule.freeWindow(order.startMinute, order.deliveryMinute)) {
            // add the order to the drivers schedule
            driverSchedule.addOrder(order);
            break;
          }
        }
      });
  }

  addDriver(driver) {
    this.#drivers.push(driver);
    this.#calculateSchedule();
  }
  
  addOrder(order) {
    this.#orders.push(order);
    this.#calculateSchedule();
  }

  printSchedule() {
    this.#drivers
      .forEach(driver => {
        driver.currentSchedule.print();
      });
  }
}

module.exports = Parlor;
