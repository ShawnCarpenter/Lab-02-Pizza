const Order = require('./Order');

describe('Order class', () => {
  const dinner = new Order('dinner', 1200, 10);
  it('should have a name property', () => {
    const name = dinner.name;
    expect(name).toEqual('dinner');
  });
  it('should have a deliveryMinute property', () => {
    const dinnerTime = dinner.deliveryMinute;
    expect(dinnerTime).toEqual(1200);
  });
  it('returns a start time based on the drivingDistanceInMinutes', () => {
    const startTime = dinner.startMinute();
    expect(startTime).toEqual(1170);
  });
});
