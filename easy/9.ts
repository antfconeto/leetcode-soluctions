//Problem 9# - easy
function isPalindrome(x: number): boolean {
    let z = x.toString().split('')
    let y = z.reverse().join('')
    if(y == x.toString() ) return true
    return false
};
console.time()
console.log(isPalindrome(123))
console.timeEnd()