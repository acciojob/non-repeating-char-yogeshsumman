function firstNonRepeatedChar(str) {
    if (str.length === 0) return null; // Return null if the string is empty

    // Create a map to store the frequency of each character
    const charFrequency = {};

    // First pass: count the frequency of each character
    for (let char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Second pass: find the first character with a frequency of 1
    for (let char of str) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character is found
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 

