/* Bài 1:
Input:
- 3 số nguyên
Process:
    +Lắng nghe sự kiện onclick của button Tính, tại thời điểm click: sẽ
    +Lấy giá trị các input: số 1, số 2, số 3 và lưu lại giá trị
    vào các biến: Number 1 -> 3. Nhân các giá trị này với 1 để chuyển đổi kiểu dữ liệu
    +Tạo biến smallest, middle, biggest tương ứng với các số bé nhất, bé vừa, lớn nhất
    +Dùng câu lệnh if, so sánh: số 1 < 2. Nếu đúng => smallest = số 1; biggest = số 2. Nếu sai => ngược lại
    +Dùng câu lệnh if, so sánh: số 2 < 3. Nếu đúng => biggest = số 3; middle = số 2. Nếu sai => so sánh số 1 < số 3; 
    Nếu đúng gán smallest = số 1; middle = số 3; Nếu sai: gán smallest = số 3 và middle = số 1
    +Tạo biến thông báo kết quả
    +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer đã được code sẵn tại file html 
    => thông báo kết quả được hiển thị khi click
Output:
- Xuất ra 3 số theo thứ tự tăng dần
 */

document.getElementById("compare-btn").onclick = function () {
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;
  var biggest;
  var middle;
  var smallest;
  if (number1 < number2) {
    smallest = number1;
    biggest = number2;

    if (number2 < number3) {
      middle = number2;
      biggest = number3;
    } else {
      middle = number3;
      biggest = number2;
    }
  } else {
    smallest = number2;
    biggest = number1;
    if (number1 < number3) {
      middle = number1;
      biggest = number3;
    } else {
      middle = number3;
      biggest = number1;
    }
  }
  var noti_compare =
    '<div class = "alert alert-success">Số theo thứ tự tăng dần là: ' +
    smallest +
    " ," +
    middle +
    " ," +
    biggest +
    "</div>";
  document.querySelector(".compare-footer").innerHTML = noti_compare;
};

/* Bài 2:
Input:
- Lời chào mẫu
- Người sử dụng máy
Process:
    +Tạo select với các option là các thành viên trong nhà
    +Tạo biến thông báo kết quả

    +Lắng nghe sự kiện onclick của button Tính, tại thời điểm click: sẽ
        +Lấy giá trị người sử dụng máy và lưu lại giá trị vào biến user
        +Tạo biến greeting_noti = chào + biến user
        +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer
        đã được code sẵn tại file html 

Output:
- Lời chào phù hợp
 */

document.getElementById("greeting-btn").onclick = function () {
  var user = document.getElementById("user-selection").value;
  console.log();
  var greeting_noti =
    '<div class = "alert alert-success"> Chào ' + user + "</div>";
  document.querySelector(".greeting-footer").innerHTML = greeting_noti;
};

/* Bài 3:
Input:
- 3 số nguyên
Process:
    -Lắng nghe sự kiện onclick của button Đếm, tại thời điểm click: sẽ
        +Lấy giá trị của các số 1, 2,3 và lưu lại giá trị vào các biến: number 1 -> 3.
        +Tạo 2 biến là số lượng số chẵn, lẻ & gán cho chúng bằng 0
        +Kiểm tra số chẵn/lẻ: 
            + Sử dụng câu điều kiện if so sánh số dư của các số 1,2,3 khi chia cho 2. Nếu === 0 => số chẵn; nếu !== 0
            => số lẻ
            + 2 biến lượng số chẵn, lẻ tăng/giảm khi câu điều kiện đúng/sai 1 đơn vị
        +Đếm số lượng số chẵn/lẻ
        +Tạo biến thông báo kết quả
        +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer
        đã được code sẵn tại file html 

Output:
- Số lượng số lẻ và số chẵn
 */

document.getElementById("counting-btn").onclick = function () {
  var number_1 = document.getElementById("number_1").value;
  var number_2 = document.getElementById("number_2").value;
  var number_3 = document.getElementById("number_3").value;
  var evenNumbers = 0;
  var oddNumbers = 0;
  if (number_1 % 2 === 0) {
    evenNumbers += 1;
  } else {
    oddNumbers += 1;
  }

  if (number_2 % 2 === 0) {
    evenNumbers += 1;
  } else {
    oddNumbers += 1;
  }

  if (number_3 % 2 === 0) {
    evenNumbers += 1;
  } else {
    oddNumbers += 1;
  }

  console.log(oddNumbers, evenNumbers);
  var counting_noti =
    '<div class = "alert alert-success">Có : ' + evenNumbers + " số chẵn.<br>";
  counting_noti += "Có : " + oddNumbers + " số lẻ.</div>";
  document.querySelector(".counting-footer").innerHTML = counting_noti;
};

/* Bài 4:
Input:
- 3 cạnh tam giác
Process:
    -Lắng nghe sự kiện onclick của button Đếm, tại thời điểm click: sẽ
        +Lấy giá trị của các cạnh tam giác và lưu lại giá trị vào các biến: side 1 -> 3.
        +Kiểm tra dạng tam gíac: 
            + Sử dụng câu điều kiện if + toán tử so sánh + toán tử logic: ( kiểm tra loại tam giác theo thứ tự từ đều -> vuông)
                +để kiểm tra tam giác đều: side1 === side2 && side2=== side3
                +để kiểm tra tam giác cân: side1 === side2/3
                +để kiểm tra tam giác vuông: a*a = b*b + c*c ( thử lần lượt với 3 cạnh)
        +Tạo biến thông báo kết quả
        +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer
        đã được code sẵn tại file html 
Output:
- Dạng tam gíac
 */

document.getElementById("identify-btn").onclick = function () {
  var identify_noti = '<div class = "alert alert-success">Đây là tam giác ';
  var side_1 = document.getElementById("side_1").value;
  var side_2 = document.getElementById("side_2").value;
  var side_3 = document.getElementById("side_3").value;

  if (side_1 === side_2 && side_1 === side_3) {
    identify_noti += "đều";
  } else if (side_1 === side_2 || side_1 === side_3 || side_2 === side_3) {
    identify_noti += "cân";
  } else if (
    side_1 * side_1 == side_2 * side_2 + side_3 * side_3 ||
    side_2 * side_2 == side_1 * side_1 + side_3 * side_3 ||
    side_3 * side_3 == side_1 * side_1 + side_2 * side_2
  ) {
    identify_noti += "vuông";
  } else {
    identify_noti += "thường";
  }

  identify_noti += ".</div>";
  document.querySelector(".identify-footer").innerHTML = identify_noti;
};

/* Bài tập nâng cao  
Bài 1:
Input:
- Ngày, tháng, năm hiện tại
Process:
    -Lắng nghe sự kiện onclick của button Tìm, tại thời điểm click: sẽ
        +Lấy giá trị của ngày, tháng, năm hiện tại và lưu lại giá trị vào các biến: currentDate, currentMonth, currentYear. 
        +Nhân các giá trị trên với 1 để chuyển kiểu dữ liệu về number
        +Tạo biến ngày, tháng, năm của ngày trước đó, và ngày tiếp theo
                +Sử dụng if & tóan tử % 4 để kiểm tra năm nhuận. Tạo biến lưu số lương ngày của tháng 2, khi đó là năm nhuận
                +Sử dụng switch để kiểm tra tháng. Xem tháng thuộc tháng 30,31, hay 28 ngày && tháng 1 / tháng 12
                    +Sử dụng câu điều kiện if để kiểm tra ngày: nếu ngày <= số ngày có trong tháng 
                => tomorrowDate = ++currentDate; tomorrowMonth = currentMonth, tomorrowYear = currentYear
                => yesterdayDate = --currentDate; yesterdayMonth = currentMonth, yesterdayYear = currentYear
                => trường hợp đặc biệt: đầu tháng, cuối tháng, đầu năm, cuối năm
        +Tạo biến thông báo kết quả
        +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer
        đã được code sẵn tại file html 
Output:
- Ngày, tháng, năm của hôm qua
- Ngày, tháng, năm của ngày mai
 */

document.getElementById("calendar-btn").onclick = function () {
  var currentDate = document.getElementById("date").value * 1;
  var currentMonth = document.getElementById("month").value * 1;
  var currentYear = document.getElementById("year").value * 1;
  var tomorrowDate;
  var tomorrowMonth;
  var tomorrowYear;
  var yesterdayDate;
  var yesterdayMonth;
  var yesterdayYear;
  var leapYearDateAmount;
  if (currentYear % 4 === 0) {
    leapYearDateAmount = 29;
  } else {
    leapYearDateAmount = 28;
  }

  switch (currentMonth) {
    case 1:
      if (currentDate < 31 && currentDate > 1) {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else if (currentDate === 31) {
        tomorrowDate = 1;
        tomorrowMonth = ++currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = 31;
        yesterdayMonth = 12;
        yesterdayYear = --currentYear;
      }
      break;
    case 2:
      if (currentDate < leapYearDateAmount && currentDate > 1) {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else if (currentDate === leapYearDateAmount) {
        tomorrowDate = 1;
        tomorrowMonth = 1;
        tomorrowYear = ++currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = 31;
        yesterdayMonth = --currentMonth;
        yesterdayYear = currentYear;
      }
      break;
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (currentDate < 31 && currentDate > 1) {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else if (currentDate === 31) {
        tomorrowDate = 1;
        tomorrowMonth = ++currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = 31;
        yesterdayMonth = --currentMonth;
        yesterdayYear = currentYear;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (currentDate < 30 && currentDate > 1) {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else if (currentDate === 30) {
        tomorrowDate = 1;
        tomorrowMonth = ++currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = 30;
        yesterdayMonth = --currentMonth;
        yesterdayYear = currentYear;
      }
      break;
    case 12:
      if (currentDate < 31 && currentDate > 1) {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else if (currentDate === 31) {
        tomorrowDate = 1;
        tomorrowMonth = 1;
        tomorrowYear = ++currentYear;
        yesterdayDate = --currentDate;
        yesterdayMonth = currentMonth;
        yesterdayYear = currentYear;
      } else {
        tomorrowDate = ++currentDate;
        tomorrowMonth = currentMonth;
        tomorrowYear = currentYear;
        yesterdayDate = 31;
        yesterdayMonth = --currentMonth;
        yesterdayYear = currentYear;
      }
  }
  var calendarNoti =
    '<div class = "alert alert-success">Ngày hôm qua là ngày: ';
  calendarNoti +=
    yesterdayDate + " tháng " + yesterdayMonth + " năm " + yesterdayYear;
  calendarNoti += "<br>Ngày mai là ngày: ";
  calendarNoti +=
    tomorrowDate + " tháng " + tomorrowMonth + " năm " + tomorrowYear;
  calendarNoti += ".</div>";
  document.querySelector(".calendar-footer").innerHTML = calendarNoti;
};

/* Bài tập nâng cao  
Bài 2: 
Input:
- Ngày, tháng, năm hiện tại
Process:
    -Lắng nghe sự kiện onclick của button Tìm, tại thời điểm click: sẽ
        +Lấy giá trị của tháng, năm hiện tại và lưu lại giá trị vào các biến: currentDate, currentMonth, currentYear. 
        +Nhân các giá trị trên với 1 để chuyển kiểu dữ liệu về number
        +Tạo biến ngày, tháng, năm của ngày trước đó, và ngày tiếp theo
                +Sử dụng if & tóan tử % 4 để kiểm tra năm nhuận. Tạo biến lưu số lượng ngày của tháng 2, khi đó là năm nhuận
        +Tạo 2 biến thông báo kết quả: cho đúng cú pháp và sai cú pháp
            + Sử dụng if với biến số ngày để kiểm tra người dùng nhập đúng 12 tháng trong năm hay không. Nếu đúng
            => trả về thông báo số ngày. Nếu sai, trả về thông báo sai cú pháp
        +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer
        đã được code sẵn tại file html 
Output:
- số ngày trong tháng
 */

document.getElementById("month-btn").onclick = function () {
  var currentMonthForDays = document.getElementById("current_month").value * 1;
  var currentYearForDays = document.getElementById("current_year").value * 1;
  var leapYearDateAmount;
  var numberOfday;
  var monthNoti;
  var monthNotiInvalid;
  if (currentYearForDays % 4 === 0) {
    leapYearDateAmount = 29;
  } else {
    leapYearDateAmount = 28;
  }

  switch (currentMonthForDays) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numberOfday = 31;
      break;
    case 2:
      numberOfday = leapYearDateAmount;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      numberOfday = 30;
      break;
    default:
      var monthNotiInvalid =
        '<div class = "alert alert-success">Bạn nhập sai cú pháp.</div>';
  }
  if (numberOfday > 0) {
    monthNoti = '<div class = "alert alert-success">Tháng này có: ';
    monthNoti += numberOfday + " ngày.</div>";
    document.querySelector(".month-footer").innerHTML = monthNoti;
  } else {
    document.querySelector(".month-footer").innerHTML = monthNotiInvalid;
  }
};

/*Bài 3: 
Input:
- số nguyên có 3 chữ số
Process:
    -Lắng nghe sự kiện onclick của button Cách đọc, tại thời điểm click: sẽ
        +Lấy giá trị của số giá trị vào biến: threeDigitNumber. 
        +Nhân các giá trị trên với 1 để chuyển kiểu dữ liệu về number
        +Tạo biến hàng chục, hàng đơn vị, hàng trăm. Gía trị của các biến tương ứng công thức sau:
            + unit = n%10;
            + ten = Math.floor(n%100/10)
            + hundred = Math.floor(n/100)
        +Tạo biến cách đọc unitPronounce, tenPronounce,hundredPronounce.
            + Sử dụng switch để tìm cách đọc cho từ đối tượng
        +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer
        đã được code sẵn tại file html 
Output:
- cách đọc số
 */

document.getElementById("read-number-btn").onclick = function () {
  var threeDigitNumber = document.getElementById("3-digit-number").value * 1;
  var unit = threeDigitNumber % 10;
  var ten = Math.floor((threeDigitNumber % 100) / 10);
  var hundred = Math.floor(threeDigitNumber / 100);
  var unitPronounce;
  var tenPronounce;
  var hundredPronounce;

  switch (unit) {
    case 1:
      unitPronounce = "mốt";
      break;
    case 2:
      unitPronounce = "hai";
      break;
    case 3:
      unitPronounce = "ba";
      break;
    case 4:
      unitPronounce = "bốn";
      break;
    case 5:
      unitPronounce = "năm";
      break;
    case 6:
      unitPronounce = "sáu";
      break;
    case 7:
      unitPronounce = "bảy";
      break;
    case 8:
      unitPronounce = "tám";
      break;
    case 9:
      unitPronounce = "chín";
      break;
  }

  switch (ten) {
    case 1:
      tenPronounce = "mười";
      break;
    case 2:
      tenPronounce = "hai mươi";
      break;
    case 3:
      tenPronounce = "ba mươi";
      break;
    case 4:
      tenPronounce = "bốn mươi";
      break;
    case 5:
      tenPronounce = "năm mươi";
      break;
    case 6:
      tenPronounce = "sáu mươi";
      break;
    case 7:
      tenPronounce = "bảy mươi";
      break;
    case 8:
      tenPronounce = "tám mươi";
      break;
    case 9:
      tenPronounce = "chín mươi";
      break;
  }

  switch (hundred) {
    case 1:
      hundredPronounce = "một trăm";
      break;
    case 2:
      hundredPronounce = "hai trăm";
      break;
    case 3:
      hundredPronounce = "ba trăm";
      break;
    case 4:
      hundredPronounce = "bốn trăm";
      break;
    case 5:
      hundredPronounce = "năm trăm";
      break;
    case 6:
      hundredPronounce = "sáu trăm";
      break;
    case 7:
      hundredPronounce = "bảy trăm";
      break;
    case 8:
      hundredPronounce = "tám trăm";
      break;
    case 9:
      hundredPronounce = "chín trăm";
      break;
  }
  var readNumberNoti = '<div class = "alert alert-success">' + hundredPronounce + ' ' + tenPronounce + ' ' + unitPronounce + '</div>';
  document.querySelector(".read-number-footer").innerHTML = readNumberNoti;
};

/* Bài tập nâng cao  
Bài 4: 
Input:
- Toạ độ trường đh
- Toạ độ nhà của 3 sinh viên 
Process:
    -Lắng nghe sự kiện onclick của button Tìm, tại thời điểm click: sẽ
        +Lấy giá trị tên của 3 sinh viên và lưu lại giá trị vào các biến: student 1 -> 3
        +Lấy giá trị x,y của 3 sinh viên và lưu lại giá trị vào các biến: x1, y1, x2, y2, x3, y3. 
        +Nhân các giá trị trên với 1 để chuyển kiểu dữ liệu về number
        +Tạo các biến cho toạ độ trường đh: x0, y0 
        +Tạo biến khoảng cách của 3 sinh viên tới trường như sau
          +distance1 = Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0)). Tương tự với distance2 và distance3
        +Tạo biến longestDistance. Dùng câu lệnh if để so sánh các giá trị distance 1->3; gán giá trị lớn nhất cho longest
        distance
        +Tạo biến thông báo kết quả:
        +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer
        đã được code sẵn tại file html 
Output:
-  Tên sinh viên ở xa trường nhất
 */

document.getElementById("distance-btn").onclick = function () {
  var student1 = document.getElementById("student-name-1").value;
  var student2 = document.getElementById("student-name-2").value;
  var student3 = document.getElementById("student-name-3").value;

  var x1 = document.getElementById("x1").value * 1;
  var y1 = document.getElementById("y1").value * 1;
  var x2 = document.getElementById("x2").value * 1;
  var y2 = document.getElementById("y2").value * 1;
  var x3 = document.getElementById("x3").value * 1;
  var y3 = document.getElementById("y3").value * 1;
  var x0 = 0;
  var y0 = 0
  
  var distance1 = Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0));
  var distance2 = Math.sqrt((x2-x0)*(x2-x0) + (y2-y0)*(y2-y0));
  var distance3 = Math.sqrt((x3-x0)*(x3-x0) + (y3-y0)*(y3-y0));

  var longestDistance;

  if (distance1 > distance2) {
    if(distance1 > distance3) {
      longestDistance = student1;
    }
    else {
      longestDistance = student3;
    }
  } else {
    if (distance2 > distance3) {
      longestDistance = student2
    }
    else {
      longestDistance = student3
    }
  }


  distanceNoti = '<div class = "alert alert-success">Người có nhà xa trường nhất là: ';
  distanceNoti += longestDistance + ".</div>";
  document.querySelector(".distance-footer").innerHTML = distanceNoti;
};