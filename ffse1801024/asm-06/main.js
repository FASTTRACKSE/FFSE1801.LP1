// object ={
//     'hoten':'van a'
//     'mon hoc':{
//         'toan':[]
//     }
// }
var mon = ["toan", "ly", "hoa", "van", "su", "dia", "anh", "cn", "cd"],
  rn_mh = ["t", "l", "h", "v", "s", "d", "a", "cn", "cd"],
  arrmh = [],
  arrmhhtml = [],
  arrhs = [],
  t_tongket = [];
function input(params) {
  var ob = [],
    ten,
    diemthi,
    ihesoi,
    hesoi = [],
    hesoii,
    table,
    ten = document.getElementById("ten").value;
  for (let i = 0; i < rn_mh.length; i++) {
    diemthi = document.getElementById(rn_mh[i] + "diemthi").value;
    hesoii = document.getElementById(rn_mh[i] + "hesoii").value;
    ihesoi = document.getElementById(rn_mh[i] + "hesoi").value;
    hesoi = ihesoi.split(",");
    var tongket = diemtongketmon(hesoi, hesoii, diemthi);
    console.log(tongket);
    t_tongket[i] = tongket;
    arrmh[mon[i]] = [hesoi, hesoii, diemthi, tongket];
  }
  console.log(t_tongket);

  arrhs[ten] = arrmh;
  //   console.log(arrhs);
  row(arrmh);
  table =
    `<h3>` +
    ten +
    `</h3>
    <table class="table">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Toán</th>
                      <th scope="col">Lý</th>
                      <th scope="col">Hóa</th>
                      <th scope="col">Văn</th>
                      <th scope="col">Sử</th>
                      <th scope="col">Địa</th>
                      <th scope="col">Anh</th>
                      <th scope="col">Công Nghệ</th>
                      <th scope="col">Công Dân</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      ` +
    row(arrmh)[0] +
    `
                  </tr>
                  <tr>
                     ` +
    row(arrmh)[1] +
    `
                     
                  </tr>
                  <tr>
                     ` +
    row(arrmh)[2] +
    `
                      
                  </tr>
                  <tr>
                     ` +
    row(arrmh)[3] +
    `
                      
                  </tr>
                  <tr>
                     ` +
    xeploai(diemtongketmon) +
    `
                      
                  </tr>
              </tbody>
          </table>`;
  arrmhhtml.push(table);
  //   console.log(output(arrmhhtml));
  document.getElementById("p").innerHTML = output(arrmhhtml);
}

function output(arrmhhtml) {
  var a;
  for (let i = 0; i < arrmhhtml.length; i++) {
    if (i === 0) {
      a = arrmhhtml[i];
    } else {
      a = arrmhhtml[i] + a;
    }
  }
  return a;
}

function row(arrmh) {
  //   console.log(arrmh);
  var a = `<th scope="row">` + "Hệ số 1" + `</th>`,
    b = `<th scope="row">` + "Hệ số 2" + `</th>`,
    c = `<th scope="row">` + "Điểm thi" + `</th>`,
    d = `<th scope="row">` + "Tổng kết môn" + `</th>`;
  for (const key in arrmh) {
    a = a + `<td>` + arrmh[key][0] + `</td>`;
    b = b + `<td>` + arrmh[key][1] + `</td>`;
    c = c + `<td>` + arrmh[key][2] + `</td>`;
    d = d + `<td>` + arrmh[key][3] + `</td>`;
  }
  //   console.log(a, b, c);
  return [a, b, c, d];
}

function diemtongketmon(hesoi, hesoii, diemthi) {
  if (hesoi.length < 2) {
    return "-1";
  } else if (hesoii == "") {
    return "-1";
  }
  if (diemthi == "") {
    return "-1";
  } else {
    hesoii = parseInt(hesoii) * 2;
    diemthi = parseInt(diemthi) * 3;
    t_hesoi = 0;
    for (let i = 0; i < hesoi.length; i++) {
      t_hesoi = parseInt(hesoi[i]) + t_hesoi;
    }
    return (hesoii + diemthi + t_hesoi) / (5 + hesoi.length);
  }
}

function xeploai(t_tongket) {
  var sum = 0;
  for (let i = 0; i < t_tongket.length; i++) {
    if (t_tongket[i] != "-1") {
      sum = sum + t_tongket[i];
    }
  }
  var avg = sum / 9;
  if (avg > 5 && avg <= 6.5) {
    ketqua = "Đạt";
  } else if (avg > 6.5 && avg <= 8) {
    ketqua = "Khá";
  } else if (avg > 8) {
    ketqua = "Giỏi";
  } else {
    ketqua = "Chưa Đạt";
  }
  e = `<th scope="row">` + "Xếp loại" + `</th>`;
  e = e + `<td>` + ketqua + `</td>`;
  return e;
}
