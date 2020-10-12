document.write('Bài Tập 1 </br>');
let vatly=parseInt(prompt('Nhập Điểm Vật Lý'));
let sinhHoc=parseInt(prompt('Nhập Điểm Sinh Học'));
let hoaHoc=parseInt(prompt('Nhập Điểm Hóa Học'));
let diemTrungBinh=(vatly+sinhHoc+hoaHoc)/3
document.write('Điểm trung binh ='+diemTrungBinh+'</br>');

document.write('</br>');
document.write('Bài Tập 2 </br>');
let doC=parseInt(prompt('Nhập độ C'));
let doF=((doC/5)*9)+32;
document.write('Độ F ='+doF+'</br>');

document.write('</br>');
document.write('Bài Tập 3 </br>');
const Pi=3.14;
let banKinh=parseFloat(prompt('Nhập Bán Kính Hình Tròn'));
let DienTichHinhTron=banKinh*banKinh*Pi;
DienTichHinhTron = DienTichHinhTron.toFixed(2);
let ChuViHinhTron=2*banKinh*Pi;
ChuViHinhTron = ChuViHinhTron.toFixed(2);
document.write('Diện Tích Hình Tròn ='+ DienTichHinhTron +'</br>');
document.write('Chu Vi Hình Tròn ='+ ChuViHinhTron +'</br>');
