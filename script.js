function threeSum(arr, target) {
// write your code here
	let obj={};
	for(let i=0;i<arr.length;i++){
		if(obj[arr[i]]!= undefined){
			obj[arr[i]] +=1;
		}
		else{
			obj[arr[i]]=1;
		}
	}
	for(let i=0;i<arr.length;i++){
		if(obj[arr[i]]==target){
			return arr[i];
		}
	}
  return null;
}
let arr =[-1,2,1,-4];
let target=1;
let arr = prompt("enter the array values");
let result = threeSum(arr, target);
alert(result);

module.exports = threeSum;
