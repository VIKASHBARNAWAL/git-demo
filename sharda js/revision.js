let a=4;
console.log(a);
const b=5;
console.log(b);
 a=5;
console.log(a);
//object
const student= {
    age:18,
    name:"vikash",
    gender:"male",
    profession:"notyet",




}
// for loop statement
console.log(student.age);
for (let a=0;a<5;a++) {
    console.log(a);
}// for loop statement for characters using arrays 
let cycle=["atlas","avon","ranger","hercules"];
for (let i=0;i<cycle.length;i++) {
    console.log(cycle[i]);
}
// using arrays forloop 
let marks=[85,97,44,37,76,60];
let sum=0;
for (let i=0;i<marks.length;i++) {
     sum+=marks[i];
}    
let average=sum/marks.length;
console.log("average    ",average);
let items=[250,645,300,900,50];
let newPrice;
for (let i=0;i<items.length;i++) {
    newPrice=items[i]*0.9;
    console.log(newPrice);

}


