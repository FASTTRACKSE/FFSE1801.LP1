// // 1. TÌm số lớn nhất, nhỏ nhất
//     var arr,max,min
//     arr = [3,5,2,7,6,9,12]
//     max = Math.max.apply(Math,arr);
//     min = Math.min.apply(Math,arr);
//     arr.sort(function(a,b) {
//         return a-b
//     })
//     document.write('min '+min +'<br>');
//     document.write('max '+max+'<br>');
//     document.write('sort '+arr);
var icontinue, arr, i;
arr = [];
i = 0;
icontinue = "1";
while (icontinue == "1") {
  var icontinue = prompt("Nhập", "1 tiếp tục và 0 dừng lại");
  if (icontinue != "1") {
    break;
  }
  var iarr = prompt("Nhập mảng", "5");
  arr[i] = iarr;
  i++;
}
document.write("Mảng đã nhập " + arr);
// var stop, arr, i;
// stop = false;
// arr = [];
// i=0;

// while (!stop) {
//   var icontinue = prompt("Nhập", "1 tiếp tục và 0 dừng lại");
//   if (icontinue == '1') {
//     var iarr = prompt("Nhập mảng", "5");
//     arr[i] = iarr;
//     stop = false;
//   } else {
//     stop = true;
//   }
//   i++;
// }
// document.write("Mảng đã nhập " + arr);
