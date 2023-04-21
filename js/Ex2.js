/**
 * Khối 1: Input
 * + nhập các 5 số là số thực
 * khối 2:
 * B1: tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính trung bình
 * + totalNumb = (numb1 + numb2 + numb3 + numb4 + numb5) / 5
 * Khối 3: Output
 * Total (số trung bình của 5 số);
 */
function calcNumb(){
    var numb1 = document.getElementById("inputOne").value;
    var numb2 = document.getElementById("inputTwo").value;
    var numb3 = document.getElementById("inputThree").value;
    var numb4 = document.getElementById("inputFor").value;
    var numb5 = document.getElementById("inputFive").value;
    var total = (Number(numb1) + Number(numb2) + Number(numb3) + Number(numb4) + Number(numb5)) / 5;
    document.getElementById("txtNumb").innerHTML = "Số trung bình của 5 số thực là: " + total.toLocaleString();
}
document.getElementById("totalNumb").onclick = calcNumb;