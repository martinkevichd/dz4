////////task 1
/*
let arr=[1,2,3,4,5];

for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}
*/
////////// task 2
/*
let arr=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i=0; i<arr.length;i++){
    if(arr[i]<-3 && arr[i]>-10)
    console.log(arr[i]);
}
*/

/////////// task 3
/*
let arr= [];

for(let i=23;i<=57;i++){
    arr.push(i);
}
console.log(arr);
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);
*/

/////////task 4
/*
let arr=['10','20','30','50','235','3000'];

for(let i=0;i<arr.length;i++){
    let num = String(arr[i]);
    let str = num[0];
    if (str == 1 || str == 2 || str == 5) {
      console.log(num);
    }
}
*/

////////////task 5
/*
let arr=['пн','вт','ср','чт','пт','сб','вск'];

for(let i=0;i<arr.length;i++) {
    document.write('<br>');
    if(arr[i]=='сб' || (arr[i]=='вск'))  document.write("<b>" + arr[i] + "</b>" );
    else  document.write( arr[i] );
}
*/

///////////task 6
/*
let arr = ['Философия', 'Политология', 'Экономика'];
console.log(arr[arr.length - 1]);
*/

/////////task 7 

let arr= [];

let flag = true;
while(flag) {
    let digit = prompt('Введите число', '');
    if(digit === '') {
        flag = false;
    } else {
        arr.push(Number(digit));
    }
}
console.log(arr);
 
arr.sort(function(a,b){
    return a-b;
});
console.log(arr);

///////////// TASK 8
/*
let arr= [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr.reverse());
*/
/////////// task 9
/*
let arr=[5, 9, 21, , , 9, 78, , , , 6];
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==null) count++;
}
console.log(count);
*/
