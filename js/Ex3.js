/**
 * Khối 1: Input
 * + Nhập số tiền USD, giá tiền USD sang VND
 * Khối 2:
 *  B1: Tạo hàm, gắn hàm vào button
 *  B2: Trong hàm, tạo công thức tính
 *      + Tiền VND = numbUsd * 23,500
 * Khối 3: Output
 * + Số tiền được nhận khi đổi USD sang VNĐ
 */

function calcMoney(){
    const USD = 23500;
    var numbUsd = document.getElementById("inputUsd").value;
    var moneyValue = document.getElementById("inputValue").value;
    var totalMoney = numbUsd * moneyValue;
    document.getElementById("txtMoney").innerHTML = "Thành " + totalMoney.toLocaleString() + "VNĐ";
    new Intl.NumberFormat('vn-VN').format(23500); 
}
document.getElementById("outputVnd").onclick = calcMoney;