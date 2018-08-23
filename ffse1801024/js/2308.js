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