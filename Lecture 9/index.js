const d = new Date();
console.log(d.toDateString());
console.log(d.toString());
console.log(d.toISOString());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getMilliseconds());
console.log(d.getMinutes());
console.log(d.getTime());
const now = Date.now();
console.log(now);

const e=new Date("2022-10-20T10:10:10");
const date = new Date(2024,4,28);
console.log(date.toString());
console.log(e);
console.log(e.toDateString());

const f = new Date();
f.setDate(20);
f.setFullYear(2021);
f.setMonth(3);
console.log(f.toDateString());


// Date calculation
const date1=new Date();
const date2=new Date("2025-04-21");
console.log(date2-date1);

// Countdown timer for  olympics
// Days,hours,minute,second 
const olym_date1 = new Date();
const olym_date2 = new Date("2028-07-14T00:00:00");
const rem_olym_date = olym_date2-olym_date1;
const days=Math.floor(rem_olym_date/(1000*60*60*24));
const hour= Math.floor((rem_olym_date/(1000*60*60))%24);
const minute= Math.floor((rem_olym_date/(1000*60))%60);
const second= Math.floor((rem_olym_date/(1000))%60);
// console.log(days);
// console.log(hour);
// console.log(minute);
// console.log(second);
console.log(`Olympics CountDownTime: Days:${days} Hour:${hour} Minute:${minute} Second:${second}`);

