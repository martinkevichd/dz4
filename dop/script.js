//////task 10
/*
let str = "#";
for(let i=0; i<5;i++){
    console.log(str + "\n");
    str += "#";
}

///////task 11

let password = "gkghla";
let count=0;
if(password.length<6) console.log('Длина пароля от 6 символов');
for(let i=0; i<password.length;i++){
   if(!isNaN(password[i])) {
        count++;   
   }
}
if(count<1)console.log('пароль должен содержать минимум 1 число');
   
  
*/
/////task 12
/*
let numbers= prompt('Введите число');
let number= prompt('Введите число для проверки');
let count=0;
for(let i=0;i<numbers.length;i++) {
    if(numbers[i]== +number)count++;
}
console.log(count);
*/
/////TASK 13

let a='56';
let sum1=0;
for(let i=0; i<a.length;i++){
    sum1+= +a[i];
}
console.log(sum);
//////task 14
/*
let length = prompt('Введите длину');
let height = prompt('Введите высоту');

for(let i=0; i<height;i++){
    for(let j=0; j<length;j++){
        if(i>0 && j>0 && i<height-1 && j<length-1){
            document.write('0');
        } 
        else document.write('x');
    }
    document.write('<br>');
}
*/
