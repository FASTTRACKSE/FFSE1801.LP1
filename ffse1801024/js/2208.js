// *********Bài tập ngày 22-08************
// Funtion bài tập 1
function btn_ps() {
    var psa, psb;
    psa = eval(document.getElementById("psa").value);
    psb = eval(document.getElementById("psb").value);
    if (isFinite(psa) && isFinite(psb)) {
      document.getElementById("equalps").innerHTML =
        "Cộng: " +
        (psa + psb) +
        "<br>" +
        "Trừ: " +
        (psa - psb) +
        "<br>" +
        "Nhân: " +
        Number(psa * psb) +
        "<br>" +
        "Chia: " +
        psa / psb;
    } else {
      document.getElementById("equalps").innerHTML =
        "Vui lòng nhập phân số theo mẫu";
    }
  }
  
  // Bài tập 2
  function btn_tg() {
    var ca, cb, cc;
    ca = eval(document.getElementById("ca").value);
    cb = eval(document.getElementById("cb").value);
    cc = eval(document.getElementById("cc").value);
  
    if (!(ca > 0 && cb > 0 && cc > 0)) {
      document.getElementById("equaltg").innerHTML = "Giá trị không được âm";
    } else if (ca + cb > cc && ca + cc > cb && cb + cc > ca) {
      document.getElementById("equaltg").innerHTML =
        "Chiều dài 3 cạnh a, b, c tạo thành 1 tam giác";
    } else {
      document.getElementById("equaltg").innerHTML =
        "Chiều dài 3 cạnh a, b, c không tạo thành 1 tam giác";
    }
  }
  
  // Bài tập 3
  function btn_ln() {
    var ga, gb, gc, gd;
    ga = eval(document.getElementById("ga").value);
    gb = eval(document.getElementById("gb").value);
    gc = eval(document.getElementById("gc").value);
    gd = eval(document.getElementById("gd").value);
    document.getElementById("equalln").innerHTML =
      "Số lớn nhất có giá trị là: " + Math.max(ga, gb, gc, gd);
  }
  
  // Bài tập 4
  function btn_n() {
    var n;
    n = eval(document.getElementById("n").value);
    switch (n) {
      case 1:
        document.getElementById("equaln").innerHTML = "Số một";
        break;
      case 2:
        document.getElementById("equaln").innerHTML = "Số hai";
        break;
      case 3:
        document.getElementById("equaln").innerHTML = "Số ba";
        break;
      case 4:
        document.getElementById("equaln").innerHTML = "Số bốn";
        break;
      case 5:
        document.getElementById("equaln").innerHTML = "Số năm";
        break;
      case 6:
        document.getElementById("equaln").innerHTML = "Số sáu";
        break;
      case 7:
        document.getElementById("equaln").innerHTML = "Số bảy";
        break;
      case 8:
        document.getElementById("equaln").innerHTML = "Số tám";
        break;
      case 9:
        document.getElementById("equaln").innerHTML = "Số chín";
        break;
      default:
        document.getElementById("equaln").innerHTML =
          "Hãy nhập số trong khoảng 1 đến 9";
    }
  }