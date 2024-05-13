// 1
const START_NUMBER_1 = 25;
const END_NUMBER_1 = 0;
let number1 = START_NUMBER_1;

console.group("Task 1 while");
console.log(`Numbers from ${START_NUMBER_1} to ${END_NUMBER_1} in descending order:`);
while(number1 >= END_NUMBER_1) {
    console.log(number1);
    number1--;
}
console.groupEnd();

console.group("Task 1 do while");
console.log(`Numbers from ${START_NUMBER_1} to ${END_NUMBER_1} in descending order:`);
number1 = START_NUMBER_1;
do {
    console.log(number1);
    number1--;
} while(number1 >= END_NUMBER_1)
console.groupEnd();

console.group("Task 1 for");
console.log(`Numbers from ${START_NUMBER_1} to ${END_NUMBER_1} in descending order:`);
for(let i = START_NUMBER_1; i >= END_NUMBER_1; i--) {
    console.log(i);
}
console.groupEnd();

// 2
const START_NUMBER_2 = 10;
const END_NUMBER_2 = 50;
let number2 = START_NUMBER_2;

console.group("Task 2 while");
console.log(`Numbers from ${START_NUMBER_2} to ${END_NUMBER_2} which are multiples of 5:`)
while(number2 <= END_NUMBER_2) {
    if (number2 % 5 === 0) {
        console.log(number2);
    }
    number2++;
}
console.groupEnd();

console.group("Task 2 do while");
number2 = START_NUMBER_2;
console.log(`Numbers from ${START_NUMBER_2} to ${END_NUMBER_2} which are multiples of 5:`)
do {
    if (number2 % 5 === 0) {
        console.log(number2);
    }
    number2++;
} while(number2 <= END_NUMBER_2)
console.groupEnd();

console.group("Task 2 for");
console.log(`Numbers from ${START_NUMBER_2} to ${END_NUMBER_2} which are multiples of 5:`)
for(let i = START_NUMBER_2; i <= END_NUMBER_2; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
console.groupEnd();

// 3
const START_NUMBER_3 = 1;
const END_NUMBER_3 = 100;
let number3 = START_NUMBER_3;
let sum = 0;

console.group("Task 3 while");
while(number3 <= END_NUMBER_3) {
    sum += number3;
    number3++;
}
console.log(`Sum numbers from ${START_NUMBER_3} to ${END_NUMBER_3} = ${sum}`);
console.groupEnd();

console.group("Task 3 do while");
number3 = START_NUMBER_3;
sum = 0;
do {
    sum += number3;
    number3++;
} while((number3 <= END_NUMBER_3))
console.log(`Sum numbers from ${START_NUMBER_3} to ${END_NUMBER_3} = ${sum}`);
console.groupEnd();

console.group("Task 3 for");
sum = 0;
for(let i = START_NUMBER_3; i <= END_NUMBER_3; i++) {
    sum += i;
}
console.log(`Sum numbers from ${START_NUMBER_3} to ${END_NUMBER_3} = ${sum}`);
console.groupEnd();