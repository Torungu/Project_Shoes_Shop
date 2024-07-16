function getValueDangKy() {
  // let arrField = document.querySelectorAll("#dangKy input");
  // console.log(arrField);
  let dangKyData = {};
  let isValid = true;

  let arrField = document.querySelectorAll("#dangKy .input_field");
  // console.log(arrField);
  let checkGender = document.querySelector("input[type='radio']:checked").value;
  for (let field of arrField) {
    let input = field.querySelector("input");

    let { value, id } = input;
    console.log("intput", input);
    dangKyData[id] = value;
    dangKyData["gender"] = checkGender;
    let dataValidation = field.getAttribute("data-validation");
    console.log(dataValidation);

    let theSpanThongBao = field.querySelector(".sp-thongbao");
    console.log(theSpanThongBao);
    // Validation
    let isEmpty = checkEmptyValue(value, theSpanThongBao);
    isValid &= isEmpty;
    if (!isEmpty) {
      continue;
    }
    if (dataValidation == "ten") {
      isValid &= checkName(value, theSpanThongBao);
    } else if (dataValidation == "email") {
      isValid &= checkEmailValue(value, theSpanThongBao);
    } else if (dataValidation == "matKhau") {
      isValid &= CheckPassword(value, theSpanThongBao);
    }
  }
  if (!isValid) {
    return null;
  }

  return dangKyData;
}

document.getElementById("dangKy").onsubmit = function (event) {
  event.preventDefault();
  console.log("sk submit");
  let dangKyData = getValueDangKy();
  console.log(dangKyData);
  this.reset();
};
//===========

function dangkyAPI(dangKyData) {
  axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: dangKyData,
  })
    .then((res) => {
      console.log(res);
      hienThiThongBao("Đăng kí thành công", 3000, "bg-success");
    })
    .catch((err) => {
      console.log(err);
      hienThiThongBao("Đăng kí thất bại", 3000, "bg-danger");
    });
}

document.getElementById("dangKy").onsubmit = function (event) {
  event.preventDefault();
  let dangKyData = getValueDangKy();
  if (dangKyData) {
    dangkyAPI(dangKyData);
  }
};
console.log(dangkyAPI);

// =========

function hienThiThongBao(text, duration, className) {
  Toastify({
    text,
    className,
    duration,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    // style: {
    //   // background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   background: "red",
    // },
    backgroundColor: "orange",
  }).showToast();
}
