function isMatch(s: string, p: string): boolean {
    const memo: Record<string, boolean> = {};

    function dp(i: number, j: number): boolean {
        console.log(memo)
        if (`${i},${j}` in memo) return memo[`${i},${j}`];

        if (j === p.length) return i === s.length;

        const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');

        if (j + 1 < p.length && p[j + 1] === '*') {
            memo[`${i},${j}`] = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
        } else {
            memo[`${i},${j}`] = firstMatch && dp(i + 1, j + 1);
        }

        return memo[`${i},${j}`];
    }

    return dp(0, 0);
}
