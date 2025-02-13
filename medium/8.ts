//Problem 8# - medium
function myAtoi(s: string): any {
    let sign = -1
    if(!s) return 0
    s.replace(" ", "")
    for(let i = 0; i < s.length; i++){
        if(!parseInt(s[i])){
            s.slice(i)
            break
        }
    }
    sign = s[0] == '-' ? -1 : +1 
    let a = parseInt(s) ? parseInt(s) : 0
    a = a >= 2**31 ? (2**31)-1 : a < -(2**31) ? -(2**31) : a
    return a
};
console.time()
console.log(myAtoi("5188515151151"))
console.timeEnd()