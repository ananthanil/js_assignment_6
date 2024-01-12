const date = new Date()

console.log('Date :',date);

let dparse = Date.parse("February 3,1997");

console.log('parse',dparse);

let utcdate = Date.UTC(2020, 2, 30)

console.log('utc',utcdate);

let gedate = date.getDate()

console.log('getDate',gedate);

let gm = date.getMonth()

console.log('getDate',gm);

let gYear = date.getFullYear()

console.log('getYear',gYear);

let gDay = date.getDay()

console.log('getDay',gDay);

let gTime = date.getHours()

console.log('getTime',gTime);

let gMin = date.getMinutes()

console.log('getMinutes',gMin);

let gSec = date.getSeconds()

console.log('getSeconds()',gSec);

let gMilliseconds = date.getMilliseconds()

console.log('getMilliseconds()',gMilliseconds);

const sDate = new Date()

sDate.setDate(12);

console.log('setDate',sDate);

const smDate = new Date()

smDate.setMonth(11);

console.log('setMonth',smDate);

const syDate = new Date()

syDate.setFullYear(1997);

console.log('setMonth',syDate);

const shDate = new Date()

shDate.setHours(15);

console.log('setHours',shDate);

const sSTime = new Date()

sSTime.setSeconds(20);

console.log('setSeconds',sSTime);

const sMSTime = new Date()

sMSTime.setMilliseconds(55);

console.log('setSeconds',sMSTime);

const dateToStrig = new Date()

let dText = dateToStrig.toDateString();

console.log('toDateString',dText);

const dateToLocal = new Date()

let dLocalText = dateToLocal.toLocaleDateString();

console.log('toLocaleDateString',dLocalText);

const timeToTimeString = new Date()

let TimeString = timeToTimeString.toLocaleDateString();

console.log('TimeString',TimeString);

const timeToTimeStringLocal = new Date()

let TimeStringLocal = timeToTimeStringLocal.toLocaleTimeString();

console.log('toLocaleTimeString',TimeStringLocal);

const dateForUtc = new Date()

let getUTCDate = dateForUtc.getUTCDate()

console.log('getUTCDate',getUTCDate);

let getUTCDay = dateForUtc.getUTCDay()

console.log('getUTCDay',getUTCDay);

let getUTCFullYear = dateForUtc.getUTCFullYear()

console.log('getUTCFullYear',getUTCFullYear);

let getUTCHours = dateForUtc.getUTCHours()

console.log('getUTCHours',getUTCHours);

let getUTCMinutes = dateForUtc.getUTCMinutes()

console.log('getUTCMinutes',getUTCMinutes);

let getUTCSeconds = dateForUtc.getUTCSeconds()

console.log('getUTCSeconds',getUTCSeconds);

let getUTCMilliseconds = dateForUtc.getUTCMilliseconds()

console.log('getUTCMilliseconds',getUTCMilliseconds);

const utcDateSetDate = new Date()

utcDateSetDate.setUTCDate(15)

console.log('setUTCDate',utcDateSetDate);

const utcDateSetsetYear = new Date()

utcDateSetsetYear.setUTCFullYear(2015)

console.log('setUTCDate',utcDateSetsetYear);

const utcDateSetsetHours = new Date()

utcDateSetsetHours.setUTCHours(15)

console.log('setUTCHours',utcDateSetsetHours);

const utcDateSetsetMinutes = new Date()

utcDateSetsetMinutes.setUTCMinutes(45)

console.log('setUTCMinutes',utcDateSetsetMinutes);

const utcDateSetsetSeconds = new Date()

utcDateSetsetSeconds.setUTCSeconds(5)

console.log('setUTCSeconds',utcDateSetsetSeconds);

const utcDateSetsetMilliseconds = new Date()

utcDateSetsetMilliseconds.setUTCMilliseconds(100)

console.log('setUTCMilliseconds',utcDateSetsetMilliseconds);

