const arr=[10,20,30,40,50];
arr.name="Rohan";
for(let key in arr)
    console.log(key,arr[key]);
console.log(Object.getOwnPropertyDescriptor(arr,0));