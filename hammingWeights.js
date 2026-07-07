function countOnesInBinary(num) {
    let binary = ""
    while(num>1){
        binary = String(num%2) + binary;
        num = Math.floor(num/2);
    }

    binary = num + binary;

    let ans = 0;
    for(let i=0;i<binary.length;i++){
        if(binary[i] === '1') ans++;
    }

    return ans;

}

console.log(countOnesInBinary(8));