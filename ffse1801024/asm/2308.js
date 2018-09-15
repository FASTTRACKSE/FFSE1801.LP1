// *********Bài tập ngày 23-08************

// ******* bài ở trường **********
// 1.Tính tổng 5 số
// var a = 0;
// for (let i = 0; i <= 5; i++) {
//   a = a + i;
// }
// document.write(a + "<br>");

// // 2.kiểm tra số nguyên tố
// var n = 8;
// var flag = true; // Biến cờ hiệu
// if (n < 2) {
//   // Nếu n bé hơn 2 tức là không phải số nguyên tố
//   flag = false;
// } else if (n == 2) {
//   flag = true;
// } else if (n % 2 == 0) {
//   flag = false;
// } else {
//   // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
//   for (var i = 3; i < n - 1; i += 2) {
//     if (n % i == 0) {
//       flag = false;
//       break;
//     }
//   }
// }
// if (flag == true) {
//   // Kiểm tra biến flag
//   document.write(n + " là số nguyên tố <br/>");
// } else {
//   document.write(n + " không phải là số nguyên tố <br/>");
// }

// // 3.tìm ước chung lớn nhất
// var a, b;
// a = 6;
// b = 9;
// while (a != b) {
//   if (a > b) {
//     a = a - b;
//   } else {
//     b = b - a;
//   }
// }
// document.write("Ước Chung lớn nhất: " + a + "<br>");;li

// ******* bài vê nhà **********

// 1.Tìm bội chung nhỏ nhất của 2 số a và b.
document.write("Bài 1: Tìm bội chung nhỏ nhất<br>");
var a, b;
a = 24;
b = 12;

a = Math.abs(a);
b = Math.abs(b);

document.write("Bội chung nhỏ nhất " + (a * b) / ucln(a, b));

function ucln(a, b) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

// 2.Hiển thị ra n số Fibonaci
document.write("<hr>Bài 2: Hiển thị n số fibonaci<br>");
var n1, n2, n3, i, sopt;
n1 = 0;
n2 = 1;
n3 = 0;
sopt = 20;
document.write(n1 + " " + n2 + " ");
for (let i = 2; i < sopt; i++) {
  n3 = n1 + n2;
  document.write(n3 + " ");
  n1 = n2;
  n2 = n3;
}
document.write("<br>");

//3.Tính tổng các số chia hết cho 5 từ 1 đến 20
document.write("<hr>Bài 5: Tính tổng các số chia hết cho 5 từ 1 đến 20 <br>");
var tong;
tong = 0;
for (var i = 1; i <= 20; i++) {
  if (i % 5 == 0) {
    tong += i;
  }
}
document.write("Tổng các số chia hết cho 5: " + tong);

// 4.Tính tổng các số chẵn trong dãy số a
document.write("<hr>Bài 4: : Tính tổng các số chẵn trong dãy số a <br>");
var mang, tong;
tong = 0;
mang = [2, 1, 4, 5, 6, 24];

for (var i = 0; i < mang.length; i++) {
  if (mang[i] % 2 == 0) {
    tong = tong + mang[i];
  }
}
document.write("Tổng các số chẵn là: " + tong);
