function maxArea(height: number[]): number {
    let maxResult = 0;
    let left = 0;
    let right = height.length-1;

    while(left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let area = minHeight * (right-left);
        console.log(area);
        maxResult = Math.max(maxResult, area);

        if(height[left] < height[right]) {
            left ++;
        }
        else {
            right--;
        }
    }

    return maxResult;
}

console.time()
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.timeEnd()