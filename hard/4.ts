//Problem 4# - hard
function findMedianSortedArrays(nums1: number[], nums2: number[]) {
    let newArray:number[] = []
    nums1.forEach((num)=>newArray.push(num))
    nums2.forEach((num)=>newArray.push(num))
    let a = newArray.sort((a,b)=>(a-b))
    if(newArray.length % 2 != 0){
        return a[(a.length + 1)/2-1]
    }
    return (a[(a.length/2)] + a[(a.length/2 - 1)])/2
};

console.log(findMedianSortedArrays([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17]))
