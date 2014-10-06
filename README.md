# time-period

Round a timeoff to a given time period.

## examples

``` js
var tp = require('time-period')
var time = Date.now()

//get the time of the start (floor) of the current X

console.log(tp.floor(time, 'Seconds'))
console.log(tp.floor(time, 'Minutes'))
console.log(tp.floor(time, 'Hours'))
console.log(tp.floor(time, 'Date'))
console.log(tp.floor(time, 'Month'))
console.log(tp.floor(time, 'Hours'))

//get the time of the end (ceil) of the current X

console.log(tp.ceil(time, 'Seconds'))
console.log(tp.ceil(time, 'Minutes'))
console.log(tp.ceil(time, 'Hours'))
console.log(tp.ceil(time, 'Date'))
console.log(tp.ceil(time, 'Month'))
console.log(tp.ceil(time, 'Hours'))

```

output:

```
1412610845000
1412610840000
1412607600000
1412553600000
1412121600000
1388534400000
1412610846000
1412610900000
1412611200000
1412640000000
1414800000000
1412611200000
```

All time ranges are in UTC time, because timezones are evil.

## api
``` js
var tp = require('time-period')
```

### tp.floor(date, period)

round a time period down. Period may be
`Seconds, Minutes, Hours, Date, Month, FullYear`

### tp.ceil(date, period)

Round up to the start of the next time period.
This will carry if, for example,
ask for the next minute in the last second of the day.

`period` may be the same values as in `tp.floor`

## tp.ceil[period](date); tp.floor[period](date)

there is also a function for each period, if that is easier

## License

MIT
