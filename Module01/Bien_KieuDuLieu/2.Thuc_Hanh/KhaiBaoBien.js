let f = 20.5;
let b = true;
let s = 'Hà Nội';
let i = 10;
document.write('Bài Tập 1');
document.write('i = ' + i);
document.write('<br/>');
document.write('f = ' + f);
document.write('<br/>');
document.write('b = ' + b);
document.write('<br/>');
document.write('s = ' + s);
document.write('<br/>');
document.write('<br/>');

document.write('Bài Tập 2 </br>');
let width = 20;
let height = 10;
let area = width * height;
document.write('Area = ' + area);

let biena = prompt('Nhập Biến a');
let bienb = prompt('Nhập Biến b');
let bienc = biena % bienb;
(bienc==0)?alert('A chia hết cho B') : alert('A không chia hết cho B');