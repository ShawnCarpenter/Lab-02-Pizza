const Order = require('./Order');

describe('Order class', () => {
  // test that the public properties are available
  it('has a name and deliveryMinute', () => {
    const order = new Order('pizza order', 50, 20);
    expect(order.name).toEqual('pizza order');
    expect(order.deliveryMinute).toEqual(50);
  });

  // test our getter to make sure we are calculating correctly
  it('has a startMinute', () => {
    const order = new Order('pizza order', 50, 20);
    expect(order.startMinute).toEqual(10);
  });
});