
var periods = [
  'Milliseconds',
  'Seconds',
  'Minutes',
  'Hours',
  'Date',
  'Month',
  'FullYear'
]

var dateIndex = periods.indexOf('Date')

var getters = periods.map(function (name) {
  return Date.prototype['getUTC'+name]
})

var setters = periods.map(function (name) {
  return Date.prototype['setUTC'+name]
})

function index (period) {
  var j = periods.indexOf(period)
  if(!~j) throw new Error('period must be one of:' + periods)
  return j
}

exports.floor = function (time, period, size = 1) {
  var d = new Date(time)
  var j = index(period)

  for(var i = 0; i < j; i++)
    setters[i].call(d, i == dateIndex ? 1 : 0)

  if(size > 1) {
    var v = getters[j].call(d)
    setters[j].call(d, v - v % size)
  }
  return 'number' === typeof time ? +d : d
}

exports.ceil = function (time, period, size = 1) {
  var d = new Date(time)
  var j = index(period)

  for(var i = 0; i < j; i++)
    setters[i].call(d, i == dateIndex ? 1 : 0)

  do {
    var v = getters[j].call(d)
    setters[j].call(d, v - (v % size) + size)
  } while(v == getters[j++].call(d))

  return 'number' === typeof time ? +d : d
}

exports.periods = periods

periods.forEach(function (k) {
  exports.floor[k] = function (time) { return exports.floor(time, k) }
  exports.ceil[k] = function (time) { return exports.ceil(time, k) }
})
