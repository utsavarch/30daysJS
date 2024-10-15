/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newarray = [];
    for (let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){
            newarray.push(arr[i]);
        }
    }
    return newarray ;
};