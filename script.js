function letterCombinations(input_digit) {
  //Complete the function
	 if (digits.length === 0) return [];

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    function backtrack(combination, nextDigits) {
        if (nextDigits.length === 0) {
            result.push(combination);
        } else {
            const digit = nextDigits.substring(0, 1);
            const letters = phoneMap[digit];
            for (let i = 0; i < letters.length; i++) {
                const letter = letters.substring(i, i + 1);
                backtrack(combination + letter, nextDigits.substring(1));
            }
        }
    }

    backtrack('', digits);
    return result;
}

module.exports = letterCombinations;
