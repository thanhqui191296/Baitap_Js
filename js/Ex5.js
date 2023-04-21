/**
 * Khối 1: Input
 * Số có 2 chữ số
 * numb
 * Khối 2: 
 * B1: khai báo biến và lưu giá trị
 * B2: Lập công thức 
 *      + Lấy số hàng chục:
 *          var ten = numb / 10;
 *      + lấy số hàng đơn vị:
 *          var unit = numb % 10;
 *  + total = ten + unit;
 *  B3: Output
 * tổng có 2 chữ số 
 *        
 */
function calcTotal2 (){
    var numb = document.getElementById("inputNumber").value;
    var ten = Math.floor(numb / 10);
    var unit = (numb % 10);
    var total3 = Number(ten) + Number(unit);
    document.getElementById("txtToNum").innerHTML = "Tổng có 2 chữ số: " + total3;

}
document.getElementById("outputTotalNumb").onclick = calcTotal2;