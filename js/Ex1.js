/**
 * Khối 1:Input
 * + lương 1 ngày, số ngày làm
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm , tạo công thức tính
 * + Lương = lương 1 ngày * số ngày làm
 * Khối 3: Output
 * Lương
 */
function calcSALA(){
    var day = document.getElementById("inputDay").value;
    var daySala = document.getElementById("inputSala").value;
    var totalSala = daySala * day;
    document.getElementById("txtResult").innerHTML = "Lương nhận được : " + totalSala.toLocaleString();

}
document.getElementById("btnCalc").onclick=calcSALA;