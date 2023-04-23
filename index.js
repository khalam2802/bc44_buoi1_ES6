/*
    phân biệt var, let, const
    var:hỗ trợ hoisting(tự khai báo ngầm tên biến lên trên đầu)

    let:không hỗ trợ hoisting và không thể khai báo biến cùng tên trên cùng 1 scope. Nếu khác scope mà khai báo biến cùng tên thì ES6 sẽ tách 2 biến riêng biệt

    const: tương tư như let kh hỗ trợ hoisting, khi khai báo 2 hằng số ở 2 scope khác nhau thì sẽ phân biệt, hằng số không thể gắn lại giá trị.
    
 */

// hoisting

let title = "cybersoft";
title = "cybersoft";

{
  let title = "cybersoft 123";
  console.log("title: ", title);
}
console.log("title: ", title);

/*
    function trong js
*/
// declaration function: hỗ trợ hoisting
function main() {
  console.log("run code");
}

// expression function (khai báo biến = function):kh hỗ trợ hoisting

var main_ = function () {
  console.log("lô");
};
/*
    context: ngữ cảnh (this)
    mặc định: là window
    object(trong phương thức object):this là object đó
    function: this trong function sẽ đại diện cho object được tạo ra từ function đó(instance)
    => khi xung đột ngữ cảnh thì this sẽ tính theo ngữ cảnh gần nhất, nếu kh có ngữ cảnh cho biến đó this trở về window
 */
// console.log(this);
window.document.title = "học es6 cơ bản";
// window.location.href="https://www.facebook.com/"

console.log("Height: ", window.innerHeight);
console.log("Width: ", window.innerWidth);
let hocVien = {
  maHV: "01",
  hoTen: "khalam",
  hienThiThongTin: function () {
    let hienThi = () => {
      console.log(this.maHV);
    };
    hienThi();
  },
};
hocVien.hienThiThongTin();

function sanPham() {
  this.maSP = "";
  this.tenSP = "";
  this.gia = "";
  this.hienThiThongTinSP = function () {
    console.log("maSP: ", this.maSP);
    console.log("tenSP: ", this.tenSP);
    console.log("gia: ", this.gia);
  };
}
let sp1 = new sanPham();
sp1.maSP = 1;
sp1.tenSP = "iphone1";
sp1.gia = 1000;
sp1.hienThiThongTinSP();

let sp2 = new sanPham();
sp2.maSP = 2;
sp2.tenSP = "iphone2";
sp2.gia = 2000;
sp2.hienThiThongTinSP();

/*
  Arrow function
  + không hỗ trợ từ khóa this
  + không hỗ trợ hoisting(giống expression function)
  + Viết tắt:
    + Khi arrow function có 1 tham số thì có thể viết tắt:thamSo=> {}
    + Khi hàm có 1 lệnh return thì bỏ luôn {}: thamSo => giá_trị_return
 */

//   es5

function sayHello() {
  console.log("lô");
}
// es6
// let sayHelloEs6 =(title)=>{
//     console.log(`hello ${title}`);
// }
// sayHelloEs6('bc44');

// es6 viết tắt
let sayHelloEs6 = (title) => console.log(`hello ${title}`);

// 1 lệnh return object
let createStuden = (id, name) => ({
  id: id,
  name: name,
});

let res = sayHelloEs6("bc44 ");
console.log("res: ", res);

/**
 * ví dụ 1: xây dựng sự kiện click cho 3 nút button => khi click vào nút nào thì sẽ hiển thị ra giá trị innerHTML tương ứng
 */

var arrButton = document.querySelectorAll(".button");
// [button0,button1,button2]
// 0        1       2
for (let index = 0; index < arrButton.length; index++) {
  let button = arrButton[index];
  button.onclick = function () {
    console.log(button.innerHTML);
  };
}

/**
 * Default parameter:giá trị mặc định của hàm
 * Nếu gọi hàm mà ta truyền giá trị thì hàm sẽ lấy giá trị chúng ta truyền, khi nào kh truyền giá trị thì mới lấy giá trị mặc định
 */

let hienThiThongTinHocVien = (
  hoTen = "lâm",
  namSinh = "2002",
  tuoi = 2023 - namSinh
) => {
  console.log("tuoi: ", tuoi);
  console.log("namSinh: ", namSinh);
  console.log("hoTen: ", hoTen);
};
hienThiThongTinHocVien();
hienThiThongTinHocVien("kha lâm");

/*
    rest parameter:
    Hàm nhận nhiều giá trị tham số dưới dạng array
*/
let tinhTong = (...rest) => {
  switch (rest.length) {
    case 2:
      {
        console.log(rest[0] + rest[1]);
      }
      break;
    case 3:
      {
        console.log(rest[0] + rest[1] + rest[2]);
      }
      break;
    default: {
      console.log("tham số kh hợp lệ!!!");
    }
  }
};
tinhTong(1, 5);
tinhTong(1, 4, 6);
tinhTong(1, 4, 6, 7, 8);

/*
    Spread operator : toán tử ... Dùng đẻ copy giá trị của object hoặc array khi cần clone ra object array mới
        + primitive value:number, string, booclean, underfined, null
        + reference value: object, array (object)
 */

let sinhVien1 = { id: 5, soDienThoai: "090909090909" };
let sinhVien2 = { ...sinhVien1, hoTen: "Kha Lâm", soDienThoai: "08080808   " };
sinhVien2.id = 10;
console.log("sinhVien1: ", sinhVien1);
console.log("sinhVien2: ", sinhVien2);

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 10];

// arr2.push(10)
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);

let obDemo = {
  0: "a",
  1: "b",
};
console.log("obDemo: ", obDemo);
console.log(arr1[0]);
console.log(obDemo["0"]);

let pet = {
  name: "gâu đần",
  age: 3,
  breed: "Golden Retriever",
  showInFo: function () {
    console.log("info");
  },
};

let { name, age, showInFo, ...restP } = pet;
console.log("restP: ", restP);
console.log("age: ", age);
console.log("name: ", name);
showInFo();


// tuple: mảng hỗn hợp
let mentor =['01','kha lâm',2002]

let [maMentor,tenMentor,namSinh] = mentor;