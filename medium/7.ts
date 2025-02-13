//Problem 7# - medium
function reverse(x: number): number {
    let y = parseInt(x.toString().split('').reverse().join(''))
    if (y < -(2 ** 31) || y > 2 ** 31 - 1) return 0;
    if (x < 0) return -y
    return y

};