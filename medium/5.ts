//Problem 5# - medium
function longestPalindrome(s: string): string {
    let maxLength = 0;
    let start = 0;
    const len = s.length;

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (isOk(s, i, j)) {
                const currentLength = j - i + 1;
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    start = i;
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
}

function isOk(s: string, left: number, right: number): boolean {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
