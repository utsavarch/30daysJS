/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    const seen = new Set(); // To track unique substrings
    let maxSplits = 0;
    
    const backtrack = (start) => {
        if (start === s.length) {
            // If we reached the end of the string, update maxSplits
            maxSplits = Math.max(maxSplits, seen.size);
            return;
        }
        
        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.slice(start, end);
            if (!seen.has(substring)) {
                seen.add(substring); // Add the new substring to the set
                backtrack(end); // Recursively find the next split starting from 'end'
                seen.delete(substring); // Backtrack and remove the substring
            }
        }
    };
    
    backtrack(0); // Start the recursion from the beginning of the string
    return maxSplits;
};