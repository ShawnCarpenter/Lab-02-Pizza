const Driver = require('./Driver');
const Schedule = require('./Schedule');

describe('Driver class', () => {
  it('has a name and currentSchedule', () => {
    const driver = new Driver('jay');

    expect(driver.name).toEqual('jay');
    expect(driver.currentSchedule).toEqual(expect.any(Schedule));
  });
});
