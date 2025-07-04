function longestCommonPrefix(strs: string[]): any {
    let minS:number = Infinity
    let minP:string = ''
    let isEqual:boolean = true
    for(let i = 0; i < strs.length; i ++){
        minS = Math.min(strs[i].length, minS)
    }
    for(let i = 0; i < minS; i ++){
        for(let j = 0; j < strs.length; j++){
            if(strs[j][i] !== strs[0][i]) {
                isEqual = false
            }
        }
        if(isEqual){
           minP += strs[0][i]
        }else{
            break;
        }
    }
    return minP
};

console.time()
console.log(longestCommonPrefix(['ovo', 'ovsds', 'ov']))
console.timeEnd()