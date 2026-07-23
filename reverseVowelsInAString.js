var reverseVowels = function(s) {
   let left = 0;
   let right = s.length - 1;
   let sArray = s.split("");

   const VOWELS = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
   while(left<right){
    while(!VOWELS.has(sArray[left]) && left < right){
        left++;
    }
    while(!VOWELS.has(sArray[right]) && right > left){
        right--;
    }
        
    let temp = sArray[left];
    sArray[left] = sArray[right];
    sArray[right] = temp;
    
    left++;
    right--;
   } 
   return sArray.join("");
};

console.log(reverseVowels(".,"));