/* 349 : Intersection of Two Arrays (Two pointers approach)
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.*/

var intersection = function(nums1, nums2) {
    let arr1 = nums1.sort((a,b)=>a-b);
    let arr2 = nums2.sort((a,b)=>a-b);

    let i = 0; let j = 0;
    let ans = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] === arr2[j] && (ans.length === 0 || ans[ans.length - 1] !== arr1[i])) {
            ans.push(arr1[i]);
            i++;
            j++;
        }
        else if(arr1[i]<arr2[j]) i++
        else j++;
    }

    return ans;
};

let nums1 = [1,2,2,1];
let nums2 = [2,2];

console.log(intersection(nums1, nums2))