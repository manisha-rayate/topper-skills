// Data Structure

// Array :- array stores duplicate elements

// Set :- Set stores unique elements only

// const arr = [10, 11, 12, 10, 13, 12, 11, 15, 14, 12, 16];
// console.log(arr);

// const s2 = new Set(arr);        // remove duplicate values from array by using set
// console.log(s2);

// // Create an empty set
// const s = new Set();

// // add elements to the set
// s.add(10);
// s.add(11);
// s.add(12);
// s.add(13);
// s.add(15);

// console.log(s);
// console.log(s.size);
// // s.clear();        // remove all the elements from set
// // console.log(s);

// console.log(s.has(14));     // checks whether an element is available or not

// for(let ele of s.values())
// {
//     console.log(ele);
// }
// console.log(s);
//------------------------------------------------------------------------------------------

// Map :- Map stores elements in key-value pair.

// create an empty map
const m = new Map();

console.log(m);

// add entries
// m.set(key, value);
// Note :- Key must be unique

m.set(411001, "Shivajinagar");
m.set(411041, "Narhe");
m.set(411018, "Kothrud");
m.set(411043, "Dhanakawadi");

console.log(m);

const m2 = new Map(
    [
        [411001, "Shivajinagar"],
        [411041, "Narhe"],
        [411018, "Kothrud"]   
    ]
);

console.log(m2);

// get a value of provided

console.log(m2.get(411018));

// get total entries

console.log(m2.size);

// remove all the entries
// m2.clear();
// console.log(m2);

console.log("************************Keys*************************");
const keys = m2.keys();
for(let k of keys)
{
    console.log(k);
}

console.log("*************************Values*****************************");
const values = m2.values();
for(let v of values)
{
    console.log(v);
    
}

console.log("***********************************Entries****************************");
const entries = m2.entries();
for(let entry of entries)
{
    console.log(entry[0]+ " -> " + entry[1]);
}

console.log(m2);
console.log(m);

