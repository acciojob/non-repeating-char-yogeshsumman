function firstNonRepeatedChar(str) {
	if(str.length===0)return;

	//creating a map to store the frequency of each character
	const charfrequency ={};
	//first pass count the frequency of each character
	for(let char of str){
		charFrequency[char]=(charFrequency[char]||0)+1;
	}

	//Second Pass:find the first character with a frequency of 1

	for(let char of str){
		if(charfrequency[char]===1){
			return char;
		}
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
