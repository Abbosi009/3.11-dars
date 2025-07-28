// 1
const arr1 = [3, 7, 2, 9, 4];
let max1 = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max1) max1 = arr1[i];
}
console.log('1:', max1); // 9

// 2
const arr2 = [4, 7, 2, 9, 6];
const evens2 = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) evens2.push(arr2[i]);
}
console.log('2:', evens2); // [4, 2, 6]

// 3
const arr3 = ['a', 'b', 'c'];
const reversed3 = [];
for (let i = arr3.length - 1; i >= 0; i--) {
  reversed3.push(arr3[i]);
}
console.log('3:', reversed3); 

// 4
const arr4 = [1, 2, 3, 4];
const squares4 = arr4.map(n => n * n);
console.log('4:', squares4); 

// 5
const arr5 = [3, -1, -7, 5, -2];
let count5 = 0;
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] < 0) count5++;
}
console.log('5:', count5); 

// 6
const arr6 = ['apple', 'kiwi', 'banana', 'fig'];
const res6 = arr6.filter(str => str.length > 5);
console.log('6:', res6); 

// 7
const arr7 = [-4, 3, 1, -2, 8];
let min7 = Infinity;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] > 0 && arr7[i] < min7) min7 = arr7[i];
}
console.log('7:', min7);

// 8
const arr8 = ['Java', 'Script'];
const joined8 = arr8.join('');
console.log('8:', joined8); 

// 9
const arr9 = [4, 7, 2, 9, 6];
const odds9 = arr9.filter(n => n % 2 !== 0);
console.log('9:', odds9); 

// 10
const arr10 = ['apple', 'banana', 'kiwi'];
const initials10 = arr10.map(s => s[0]);
console.log('10:', initials10); 

// 11
const arr11 = [1, 2, 3, 4, 5];
let sum11 = 0;
for (let i = 0; i < arr11.length; i++) {
  sum11 += arr11[i];
}
console.log('11:', sum11); 

// 12
const arr12 = [2, 4, 6];
const doubled12 = arr12.map(n => n * 2);
console.log('12:', doubled12); 

// 13
const arr13 = ['red', 'blue', 'green'];
const exists13 = arr13.includes('blue');
console.log('13:', exists13); 

// 14
const arr14 = [0, 3, 0, 4, 5, 0];
const count14 = arr14.filter(n => n !== 0).length;
console.log('14:', count14); // 3

// 15
const arr15 = [100, 200, 300];
const percent15 = arr15.map(n => n * 0.1);
console.log('15:', percent15); 

// 16
const arr16 = ['hello', 'world'];
const upper16 = arr16.map(s => s.toUpperCase());
console.log('16:', upper16); 

// 17
const arr17 = ['a', 'ab', 'abc'];
let len17 = 0;
for (let s of arr17) {
  len17 += s.length;
}
console.log('17:', len17); 

// 18
const arr18 = [4, -2, 7, -1];
const noNeg18 = arr18.map(n => n < 0 ? 0 : n);
console.log('18:', noNeg18); 

// 19
const arr19 = ['hello', 123, 'world', 45];
const onlyStr19 = arr19.filter(x => typeof x === 'string');
console.log('19:', onlyStr19); 

// 20
const arr20 = ['a', 'b', 'c', 'd', 'e'];
const res20 = arr20.filter((_, i) => i % 2 !== 0);
console.log('20:', res20); // ['b', 'd']

// 21
const arr21 = ['js', 'javascript', 'py', 'ruby'];
let long21 = '';
for (let s of arr21) {
  if (s.length > long21.length) long21 = s;
}
console.log('21:', long21); 

// 22
const arr22 = [5, 2, 9, 1, 7];
const diff22 = Math.max(...arr22) - Math.min(...arr22);
console.log('22:', diff22); 

// 23
const arr23 = [true, false, true, true];
const trueCount23 = arr23.filter(b => b === true).length;
console.log('23:', trueCount23); 

// 24
const arr24 = [1, 2, 3];
const str24 = arr24.map(n => n.toString());
console.log('24:', str24); 

// 25
const arr25 = [1, 4, 5];
const sq25 = arr25.map(n => n ** 2);
console.log('25:', sq25); 

// 26
const arr26 = [-2, 4, -1, 5];
const pos26 = arr26.filter(n => n > 0);
console.log('26:', pos26); 

// 27.
const arr27 = ['hi', 'ok', 'great'];
const ex27 = arr27.map(s => s + '!');
console.log('27:', ex27); 

// 28
const arr28 = [40, 30, 20, 15];
const isBig28 = arr28.reduce((a, b) => a + b, 0) > 100;
console.log('28:', isBig28); 

// 29
const arr29 = [1, 2, 3, 4];
const types29 = arr29.map(n => n % 2 === 0 ? 'juft' : 'toq');
console.log('29:', types29);

// 30
const arr30 = [1, 2, 2, 3, 3, 3];
const unique30 = [...new Set(arr30)];
console.log('30:', unique30); 