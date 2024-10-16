/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let happyString = [];
    const counts = [[a, 'a'], [b, 'b'], [c, 'c']];
    counts.sort((x, y) => y[0] - x[0]);

    while (counts[0][0] > 0) {
        let maxCount = counts[0][0];
        let charToAdd = counts[0][1];
        let last1 = happyString[happyString.length - 1];
        let last2 = happyString[happyString.length - 2];

        if (last1 === charToAdd && last2 === charToAdd) {
            if (counts[1][0] > 0) {
                happyString.push(counts[1][1]);
                counts[1][0]--;
            } else {
                break;
            }
        } else {
            happyString.push(charToAdd);
            counts[0][0]--;
        }

        counts.sort((x, y) => y[0] - x[0]);
    }

    return happyString.join('');
};