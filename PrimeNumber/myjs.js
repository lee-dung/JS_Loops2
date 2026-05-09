let numbers = +prompt("Nhập số lượng nguyên tố cần in: ");
let count = 0;
let N = 2;
while (count < numbers) {
    let isPrime = true;
    for (let i = 2; i < N; i++) {
        if (N % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime === true) {
            document.write(` Số nguyên tố thứ ${count + 1} là: <b>${N}</b> <br>`);
            count++;
    }
    N++;

}