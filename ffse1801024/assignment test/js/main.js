// ***************** Đề I *****************
// ********* Bài 1 *********
function btn1_bt1() {
  var n,
    flag = true;
  n = document.getElementById("in1_n_bt1").value;
  n = eval(n);
  if (n < 2) {
    flag = false;
  } else {
    for (let i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }

  if (flag == true) {
    document.getElementById("ou1_kq_bt1").innerHTML =
      "n= " + n + " là số nguyên tố";
    // document.write("La so NT ");
  } else {
    document.getElementById("ou1_kq_bt1").innerHTML =
      "n= " + n + " không phải là số nguyên tố";
    // document.write("Khong phai la so NT");
  }
}

// ********* Bài 2 *********
function btn1_bt2() {
  var n,
    n1 = 0,
    n2 = 1,
    n3 = 0,
    dayso = n1 + " " + n2;
  n = document.getElementById("in1_n_bt2").value;
  n = eval(n);
  if (n < 1) {
    document.getElementById("ou1_kq_bt2").innerHTML = "Vui lòng nhập số >=1";
  } else if (n == 1) {
    document.getElementById("ou1_kq_bt2").innerHTML = "Dãy số fibonanci: 0";
  } else {
    for (let i = 2; i < n; i++) {
      n3 = n1 + n2;
      dayso = dayso + " " + n3;
      n1 = n2;
      n2 = n3;
    }
    document.getElementById("ou1_kq_bt2").innerHTML =
      "Dãy số fibonanci: " + dayso;
  }
}
// ********* Bài 3 *********

function btn1_bt3() {
  var n,
    n = document.getElementById("in1_n_bt3").value;
  n = n.split(",");
  n.sort(function(a, b) {
    return a - b;
  });
  document.getElementById("ou1_kq_bt3").innerHTML =
    "Mảng sắp xếp từ nhỏ đến lớn: " + n;
}
// ********* Bài 4 *********
function btn1_bt4() {
  var n,
    sont = " ",
    kpnt = " ",
    dem = 0;
  n = inp1_bt4();
  length_n = n.length;
  for (let i = 0; i < length_n - 1; i++) {
    result = ktr1_nt_bt4(n[i]);
    console.log(result);
    if (result[0] == true) {
      sont = sont + result[1] + " ";
      dem++;
    } else {
      kpnt = kpnt + result[1] + " ";
    }
  }
  document.getElementById("ou1_kq1_bt4").innerHTML =
    "Dãy số nguyên tố trong mảng: " + sont;
  document.getElementById("ou1_kq2_bt4").innerHTML =
    "Dãy số không phải số nguyên tố trong mảng: " + kpnt;
  document.getElementById("ou1_kq3_bt4").innerHTML =
    "Có " + dem + " số nguyên tố trong mảng.";
}

function inp1_bt4() {
  console.log("input ok");
  var n;
  n = document.getElementById("in1_n_bt4").value;
  n = n.split(",");
  return n;
}

function ktr1_nt_bt4(number) {
  console.log("ktr ok");
  var flag = true;
  if (number < 2) {
    return [false, number];
  } else {
    for (let i = 2; i < number - 1; i++) {
      if (number % i == 0) {
        return [false, number];
      }
    }
  }
  return [true, number];
}
// ***************** Đề II *****************
// ********* Bài 1 *********
function btn2_bt1() {
  var n;
  (n = document.getElementById("in2_n_bt1").value), (sum = 0), (flag = false);
  n = eval(n);
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  if (sum == n) {
    flag = true;
  }
  if (flag == true) {
    document.getElementById("ou2_kq_bt1").innerHTML =
      "Số nhập vào là số hoàn hảo";
  } else {
    document.getElementById("ou2_kq_bt1").innerHTML =
      "Số nhập vào không phải là số hoàn hảo";
  }
}
// ********* Bài 2 *********
function btn2_bt2() {
  var n;
  (n = document.getElementById("in2_n_bt2").value), (dayso = " ");
  for (let i = 0; i <= n; i++) {
    if (i % 5 == 0) {
      dayso = dayso + i + " ";
    }
  }
  document.getElementById("ou2_kq_bt2").innerHTML =
    "Dãy số cần tìm là: " + dayso;
}
// ********* Bài 3 *********
function btn2_bt3() {
  var n;
  (n = document.getElementById("in2_n_bt3").value), (vitri = 0);
  n = n.split(",");
  temp = n[0];
  console.log("do");
  for (let i = 0; i < n.length; i++) {
    if (temp < n[i]) {
      temp = n[i];
      vitri = i;
    }
  }
  document.getElementById("ou2_kq_bt3").innerHTML =
    "Vị trí số lớn nhất là: " + (vitri + 1);
}
// ********* Bài 4 *********
function btn2_bt4() {
  var n,
    sohh = " ",
    kphh = " ",
    dem = 0;
  n = inp2_bt4();
  length_n = n.length;
  for (let i = 0; i < length_n; i++) {
    result = ktr2_hh_bt4(n[i]);
    console.log(result);
    if (result[0] == true) {
      sohh = sohh + result[1] + " ";
      dem++;
    } else {
      kphh = kphh + result[1] + " ";
    }
  }
  document.getElementById("ou2_kq1_bt4").innerHTML =
    "Dãy số hoàn hảo trong mảng: " + sohh;
  document.getElementById("ou2_kq2_bt4").innerHTML =
    "Dãy số không phải số hoàn hảo trong mảng: " + kphh;
  document.getElementById("ou2_kq3_bt4").innerHTML =
    "Có " + dem + " số hoàn hảo trong mảng.";
}

function inp2_bt4() {
  console.log("input ok");
  var n;
  n = document.getElementById("in2_n_bt4").value;
  n = n.split(",");
  return n;
}

function ktr2_hh_bt4(number) {
  var sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  if (sum == number) {
    return [true, number];
  }
  return [false, number];
}
// ***************** Đề III *****************
// ********* Bài 1 *********

function btn3_bt1() {
  var a, b;
  a = document.getElementById("in2_n1_bt1").value;
  b = document.getElementById("in2_n2_bt1").value;
  a = Math.abs(a);
  b = Math.abs(b);

  document.getElementById("ou2_kq1_bt1").innerHTML =
    "Ước chung lớn nhất: " + ucln(a, b);
  document.getElementById("ou2_kq2_bt1").innerHTML =
    "Bội chung nhỏ nhất: " + (a * b) / ucln(a, b);
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
}
// ********* Bài 2 *********
function btn3_bt2() {
  var n = document.getElementById("in3_n_bt2").value,
    sole = "";
  n = eval(n);
  for (let i = 1; i < n; i++) {
    if (i % 2 != 0) {
      sole = sole + i + " ";
    }
  }
  document.getElementById("ou3_kq_bt2").innerHTML =
    "Các số lẻ từ 1 đến n là: " + sole;
}
// ********* Bài 3 *********
function btn3_bt3() {
  var n;
  (n = document.getElementById("in3_n_bt3").value), (vitri = 0);
  n = n.split(",");
  temp = n[0];
  console.log("do");
  for (let i = 0; i < n.length; i++) {
    if (temp > n[i]) {
      temp = n[i];
      vitri = i;
    }
  }
  document.getElementById("ou3_kq_bt3").innerHTML =
    "Vị trí số bé nhất là: " + (vitri + 1);
}

// ********* Bài 4 *********
function btn3_bt4() {
  var n,
    sotl = " ",
    kptl = " ",
    max = 0;
  n = inp3_bt4();
  length_n = n.length;
  for (let i = 0; i < length_n; i++) {
    result = ktr3_tl_bt4(n[i]);
    if (result == true) {
      sotl = sotl + n[i] + " ";
      console.log(max + ": " + n[i]);
      if (eval(max) < eval(n[i])) {
        max = n[i];
        console.log(max + " " + n[i]);
      }
    } else {
      kptl = kptl + n[i] + " ";
    }
  }
  document.getElementById("ou3_kq1_bt4").innerHTML =
    "Dãy số toàn lẻ trong mảng: " + sotl;
  document.getElementById("ou3_kq2_bt4").innerHTML =
    "Dãy số không phải số toàn lẻ trong mảng: " + kptl;
  document.getElementById("ou3_kq3_bt4").innerHTML =
    "Số toàn lẻ lớn nhất là: " + max;
}
function inp3_bt4() {
  console.log("input ok");
  var n;
  n = document.getElementById("in3_n_bt4").value;
  n = n.split(",");
  return n;
}
function ktr3_tl_bt4(number) {
  var i = 0;
  temp = number;
  while (number > 0) {
    i = number % 10;
    if (i % 2 == 0) {
      return false;
    }

    number = parseInt(number / 10);
  }
  return true;
}
