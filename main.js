/**
 * Bài tập Tính lương NV
 */
var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
  // Đầu vào lấy thông tin user nhập
  const LUONG_NGAY = 1500000;

  var soNgayLam = document.getElementById("soNgayLam").value * 1;

  // Xử Lý
  var tongLuong = LUONG_NGAY * soNgayLam;
  // format VN
  var currentFormat = new Intl.NumberFormat("Vn-vn");

  var ketQua =
    "<p class='alert alert-success'>Tổng Lương là :" +
    currentFormat.format(tongLuong) +
    "VNĐ</p>";
  // var ketQua = "<p class='alert alert-success'>Tổng Lương là :" + tongLuong + "</p>";

  // Đầu Ra
  document.getElementById("showInfoTongLuong").innerHTML = ketQua;
};

/**
 * Bài tập tính giá trị trung bình 5 số thực
 */
document.getElementById("btnSubmit2").onclick = function () {
  // Đầu vào
  var soThu1 = document.getElementById("soThu1").value * 1;
  var soThu2 = document.getElementById("soThu2").value * 1;
  var soThu3 = document.getElementById("soThu3").value * 1;
  var soThu4 = document.getElementById("soThu4").value * 1;
  var soThu5 = document.getElementById("soThu5").value * 1;

  // Xử Lý
  var trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  var currentFormat = new Intl.NumberFormat("Vn-vn");

  // Đầu ra
  var ketQua2 = "<div class='alert alert-success'>";
  ketQua2 +=
    "<p>Trung Bình 5 số là :" + currentFormat.format(trungBinh) + "</p>";

  document.getElementById("showInfoTrungBinh").innerHTML = ketQua2;
};

/**
 * Bài tập quy đổi usd sang vnd
 */
document.getElementById("btnQuyDoi").onclick = function () {
  // Đầu vào
  var USD = document.getElementById("USD").value * 1;

  // Xử lý
  var quyDoi = USD * 23500;
  var currentFormat = new Intl.NumberFormat("Vn-vn");

  // Đầu ra
  var ketQua3 = "<div class='alert alert-success'>";
  ketQua3 +=
    "<p>Quy đổi ra được :........" + currentFormat.format(quyDoi) + "VNĐ</p>";
  document.getElementById("showInfoQuyDoi").innerHTML = ketQua3;
};

/**
 * Tính diện tích , chu vi HCN
 */
document.getElementById("btnTinhHCN").onclick = function () {
  // Đầu vào
  var cd = document.getElementById("cd").value * 1;
  var cr = document.getElementById("cr").value * 1;

  // xử lý
  var dienTich = cd * cr;
  var chuVi = (cd + cr) * 2;
  var currentFormat = new Intl.NumberFormat("Vn-vn");

  // Đầu ra
  var ketQua4 = "<div class='alert alert-success'>";
  ketQua4 += "<p>Diện tích =" + currentFormat.format(dienTich) + "</p>";
  ketQua4 += "<p>Chu vi =" + currentFormat.format(chuVi) + "</p>";
  document.getElementById("showInfoHCN").innerHTML = ketQua4;
};

/**
 * Tính tổng 2 ký số
 */
document.getElementById("btnTinhTongKS").onclick = function () {
  // đầu vào
  var sl = document.getElementById("sl").value * 1;

  // Xử lý
  var hangChuc = Math.floor(sl / 10);
  var hangDV = sl % 10;
  var tong = hangChuc + hangDV;

  var ketQua5 = "<p>Tổng 2 ký số là :  " + tong + "</p>";
  document.getElementById("showInfoTongKS").innerHTML = ketQua5;
};
