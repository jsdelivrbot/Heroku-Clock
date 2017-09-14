const CronJob = require('cron').CronJob;
// For specific times, use a chron job
const fifteenSeconsAfterMinute = function() {
  console.log('Another minute is gone forever. Hopefully, you made the most of it...');
};

const job1 = new CronJob({
  // 15 seconds after every minute
  cronTime: '15 * * * * *',
  onTick: fifteenSeconsAfterMinute,
  start: true,
  timeZone: 'America/Los_Angeles'
});

const test = () => {
  console.log('Test 1sec');
};

const job2 = new CronJob({
  cronTime: '*/1 * * * * *',
  onTick: test,
  start: true,
  timeZone: 'America/Los_Angeles'
});

const test1 = () => {
  console.log('Test 10sec');
};

const job3 = new CronJob({
  cronTime: '*/10 * * * * *',
  onTick: test1,
  start: true,
  timeZone: 'America/Los_Angeles'
});
