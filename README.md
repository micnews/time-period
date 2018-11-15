# time-period

Round a timeoff to a given time period.

## examples

``` js
var tp = require('time-period')
var time = 1542307104655

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

//specify the size of the time period

console.log(tp.floor(time, 'Seconds', 5))
console.log(tp.floor(time, 'Minutes', 5))
console.log(tp.floor(time, 'Hours', 5))
console.log(tp.floor(time, 'Date', 5))
console.log(tp.floor(time, 'Month', 5))
console.log(tp.floor(time, 'Hours', 5))
console.log(tp.ceil(time, 'Seconds', 5))
console.log(tp.ceil(time, 'Minutes', 5))
console.log(tp.ceil(time, 'Hours', 5))
console.log(tp.ceil(time, 'Date', 5))
console.log(tp.ceil(time, 'Month', 5))
console.log(tp.ceil(time, 'Hours', 5))

```

output:

```
1542307104000
1542307080000
1542304800000
1542240000000
1541030400000
1542304800000
1542307105000
1542307140000
1542308400000
1542326400000
1543622400000
1542308400000
1542307100000
1542306900000
1542294000000
1542240000000
1541030400000
1542294000000
1542307105000
1542307200000
1542312000000
1542672000000
1554076800000
1542312000000
```

All time ranges are in UTC time, because timezones are evil.

## api
``` js
var tp = require('time-period')
```

### tp.floor(date, period, size = 1)

Round a time period down. Period may be
`Seconds, Minutes, Hours, Date, Month, FullYear`

Use size to floor to the date less the remainder of size. (defaults to 1)

### tp.ceil(date, period, size = 1)

Round up to the start of the next time period.
This will carry if, for example,
ask for the next minute in the last second of the day.

Use size to ceil to the date less the remainder of size, plus the size. (defaults to 1)


`period` may be the same values as in `tp.floor`

## tp.ceil[period](date); tp.floor[period](date)

there is also a function for each period, if that is easier

## License

MIT
