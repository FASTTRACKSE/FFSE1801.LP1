var a;
do {
    n = prompt('Nhập giá trị')
} while (n<10);
while (n!=0) {
    dv = n%10
    n = Math.floor(n/10)
    document.write(dv)
}