// map
const map1= new Map();
map1.set(3,90);
map1.set("rohit",45);
map1.set(20,"mohan");
map1.set("rohit",40);
console.log(map1);
map1.delete(3);
console.log(map1);
console.log(map1.has("rohit"));
console.log(map1.size);

const map2= new Map([
    [4,"Rohit"],
    ["Mohan","rohan"],
    [30,9],
])
console.log(map2);
for(let [key,value] of map2)
    console.log(key,value);
