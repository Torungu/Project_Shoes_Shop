// một thẻ chứa thông báo
// value dữ liệu người dùng nhập

// Kiểm tra xem người dùng đã nhập dữ liệu hay chưa (kiểm tra rỗng)
function checkEmptyValue(value, span) {
  if (value) {
    // xử lí khi dữ liệu được người dùng nhập vào
    // tham số span đại diện cho một câu lệnh DOM tới thẻ span thông báo
    // span.style.display = "none";
    span.innerHTML = "";
    return true;
  } else {
    // xử lí khi dữ liệu là chuỗi rỗng
    // span.style.display = "block";
    span.innerHTML = "Vui lòng không bỏ trống trường này";
    return false;
  }
}

// Kiểm tra độ dài ký tự của dữ liệu nhập vào
// function xử lí kiểm tra độ dài tối thiểu và độ dài tối đa của dữ liệu nhập vào
//
function checkMinMaxValue(value, span, min, max) {
  let doDaiKyTu = value.length; // "cát tường" ==>9
  if (doDaiKyTu >= min && doDaiKyTu <= max) {
    // trường hợp đúng
    span.style.display = "none";
    span.innerHTML = "";
    return true;
  } else {
    span.innerHTML = `Vui lòng nhập tối thiểu ${min} ký tự và tối đa ${max} ký tự`;
    return false;
  }
}

// Kiểm tra email người dùng
function checkEmailValue(value, span) {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // phương thức test ==> value ==> true | false
  let isValid = regexEmail.test(value);
  if (isValid) {
    // Đây là trường hợp khi dữ liệu người dùng là email và qua được phương thức test
    span.style.display = "none";
    span.innerHTML = "";
    return true;
  } else {
    // Đây là trường hợp khi dữ liệu người dùng ko phải email
    span.style.display = "block";
    span.innerHTML = "Vui lòng nhập đúng định dạng email";
    return false;
  }
}
// kiểm tra tài khoản 4-6 số
function checkTaiKhoan(value, span, min, max) {
  let doDaiKyTu = value.length;

  // Kiểm tra độ dài của giá trị
  if (doDaiKyTu >= min && doDaiKyTu <= max) {
    // Kiểm tra xem giá trị có phải là số không
    if (!isNaN(value)) {
      span.style.display = "none";
      span.innerHTML = "";
      return true;
    } else {
      span.style.display = "block";
      span.innerHTML = "Giá trị phải là một số.";
      return false;
    }
  } else {
    span.style.display = "block";
    span.innerHTML = `Vui lòng nhập tối thiểu ${min} ký tự và tối đa ${max} ký tự`;
    return false;
  }
}
// kiểm tra tên

function checkName(value, span) {
  // Kiểm tra xem chuỗi có phải là chữ
  const isAlphabetic =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯưẠ-ỹ\s]+$/.test(value);

  // Kiểm tra xem chuỗi có bị để trống không
  const isNotEmpty = value.trim() !== "";

  if (isAlphabetic && isNotEmpty) {
    span.style.display = "none";
    span.innerHTML = "";
    return true; // Trả về true khi hợp lệ
  } else {
    span.style.display = "block";
    span.innerHTML = "Vui lòng nhập chữ.";
    return false; // Trả về false khi không hợp lệ
  }
}

// kiểm tra mật khẩu
function CheckPassword(value, span) {
  // Độ dài từ 6 đến 10 ký tự
  if (value.length < 6 || value.length > 10) {
    span.style.display = "block";
    span.innerHTML = "Vui lòng nhập độ dài từ 6 đến 10 ký tự.";
    return false;
  }

  // Có ít nhất 1 ký tự số
  if (!/\d/.test(value)) {
    span.style.display = "block";
    span.innerHTML = "Vui lòng nhập có ít nhất 1 ký tự số.";
    return false;
  }

  // Có ít nhất 1 ký tự in hoa
  if (!/[A-Z]/.test(value)) {
    span.style.display = "block";
    span.innerHTML = "Vui lòng nhập có ít nhất 1 ký tự in hoa.";
    return false;
  }

  // Có ít nhất 1 ký tự đặc biệt trong tập !@#$%^&*()
  if (!/[!@#$%^&*()]/.test(value)) {
    span.style.display = "block";
    span.innerHTML = "Vui lòng nhập có ít nhất 1 ký tự đặc biệt";
    return false;
  }

  // // Không để trống
  // if (value.trim() === "") {
  //   return false;
  // }

  // Nếu qua hết các điều kiện trên, mật khẩu hợp lệ
  return true;
}

// check lương
function checkLuong(value, span, min, max) {
  if (value >= min && value <= max) {
    // trường hợp đúng
    span.style.display = "none";
    span.innerHTML = "";
    return true;
  } else {
    span.style.display = "block";
    span.innerHTML = `Mức lương phải từ ${min} đến ${max}`;
    return false;
  }
}
