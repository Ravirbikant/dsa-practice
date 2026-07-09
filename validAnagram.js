/*Given two strings str1 and str2, determine if str2 
is an anagram of str1 and return true if it is, and false otherwise.*/

function isStringAnagram(str1, str2) {
    if(!str1 && !str2) return true;
    if(!str1 || !str2) return false;

    if(str1.length !== str2.length) return false;

    let k1 = {};
    let k2 = {};

    for (let i=0;i<str1.length;i++){
        k1[str1[i]] = (k1[str1[i]] || 0 ) + 1;
        k2[str2[i]] = (k2[str2[i]] || 0 ) + 1;
    }

    for (const key of Object.keys(k1)) {
        if (k1[key] !== k2[key]) {
            return false;
        }
    }
    return true;
}

console.log(isStringAnagram("hello","bello"));