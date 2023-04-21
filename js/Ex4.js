/**
 * Khối 1: Input
 * Nhập chiều dài, chiều rộng của hình chữ nhật
 * Khối 2:
 * B1: Tạo hàm , gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính diện tích và chu vi hình chữ nhật
 *      + Chu vi hình chữ nhật: len * width
 *      + Diện tích hình chữ nhật: (len + width) / 2
 * 
 * 
 * Khối 3: Output
 *      + Kết quả chu vi, diện tích hình chữ nhật
 *
 */
function caclHCN() {
    var len = document.getElementById("inputLen").value;
    var width = document.getElementById("inputWidth").value;
    var peri = len * width;
    var acr = (Number(len) + Number(width)) / 2;
    document.getElementById("txtHCN").innerHTML= "Chu vi: " + peri.toLocaleString() + "; Diện tích: " + acr.toLocaleString();
    
}
document.getElementById("outputHCN").onclick = caclHCN;