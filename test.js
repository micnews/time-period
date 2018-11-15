
var periods = require('./')
var tape = require('tape')


tape('even time periods, seconds, minutes, hours', function (t) {

  t.equal(periods.floor(999, 'Seconds'), 0)
  t.equal(periods.ceil(999, 'Seconds'), 1000)
  t.equal(periods.ceil(59*1000, 'Seconds'), 60*1000)

  t.equal(periods.floor(1001, 'Seconds'), 1000)
  t.equal(periods.ceil(1001, 'Seconds'), 2000)
  t.equal(periods.ceil(60*1000, 'Seconds'), 61*1000)

  t.equal(0, periods.floor(59*1000, 'Minutes'))
  t.equal(60*1000, periods.ceil(0, 'Minutes'))
  t.equal(60*1000, periods.ceil(1, 'Minutes'))

  t.equal(0, periods.floor(59*1000, 'Minutes'))
  t.equal(60*1000, periods.floor(61*1000, 'Minutes'))
  t.equal(120*1000, periods.ceil(61*1000, 'Minutes'))

  t.equal(0, periods.floor(60*59*1000, 'Hours'))
  t.equal(60*60*1000, periods.ceil(0, 'Hours'))
  t.equal(60*60*1000, periods.ceil(1, 'Hours'))

  t.equal(60*60*1000, periods.floor(60*61*1000, 'Hours'))
  t.equal(120*60*1000, periods.ceil(60*61*1000, 'Hours'))

  // Period size testing.
  t.equal(periods.floor(4999, 'Seconds', 5), 0)
  t.equal(periods.ceil(999, 'Seconds', 5), 1000*5)
  t.equal(periods.ceil(1000*5, 'Seconds', 5), 1000*10)
  t.equal(periods.ceil(59*1000, 'Seconds', 40), 80*1000)

  t.equal(periods.floor(1001, 'Seconds', 5), 0)
  t.equal(periods.ceil(1001, 'Seconds', 10), 10000)
  t.equal(periods.ceil(60*1000, 'Seconds', 2), 62*1000)

  t.equal(0, periods.floor(59*1000, 'Minutes', 5))
  t.equal(60*1000*5, periods.ceil(0, 'Minutes', 5))
  t.equal(60*1000*5, periods.ceil(1, 'Minutes', 5))

  t.equal(0, periods.floor(59*1000, 'Minutes', 5))
  t.equal(0, periods.floor(61*1000, 'Minutes', 5))
  t.equal(5*60*1000, periods.ceil(61*1000, 'Minutes', 5))

  t.equal(0, periods.floor(60*59*1000, 'Hours', 5))
  t.equal(60*60*1000*5, periods.ceil(0, 'Hours', 5))
  t.equal(60*60*1000*5, periods.ceil(1, 'Hours', 5))

  t.equal(0, periods.floor(60*61*1000, 'Hours', 5))
  t.equal(60*60*1000*5, periods.ceil(60*61*1000, 'Hours', 5))

  // Expected, but perhaps unwanted behavior due to an unusual period...
  t.equal(60*60*1000*25, periods.ceil(60*60*1000*23, 'Hours', 5))

  t.end()
})

tape('uneven time periods, Date, Month, FullYear', function (t) {

  function utcDate (string) {
    var d = new Date(string)
    var tz = d.getTimezoneOffset() * 60 * 1000
    return +d - tz
  }

  t.equal(periods.floor(utcDate('Jan 3 2014'), 'Date'), utcDate('Jan 3 2014'))
  t.equal(periods.ceil(utcDate('Jan 3 2014'), 'Date'), utcDate('Jan 4 2014'))

  t.equal(periods.floor(utcDate('Jan 3 2014'), 'Month'), utcDate('Jan 1 2014'))
  t.equal(periods.ceil(utcDate('Jan 3 2014'), 'Month'), utcDate('Feb 1 2014'))

  t.equal(periods.floor(utcDate('March 3 2014'), 'FullYear'), utcDate('Jan 1 2014'))
  t.equal(periods.ceil(utcDate('March 3 2014'), 'FullYear'), utcDate('Jan 1 2015'))

  t.end()
})
