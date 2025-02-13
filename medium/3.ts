//Problem 3# - medium
function lengthOfLongestSubstring(s: string): number {
    let map = new Map<string, number>();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        
        if (map.has(currentChar)) {
            left = Math.max(map.get(currentChar)! + 1, left);
        }

        map.set(currentChar, right);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
