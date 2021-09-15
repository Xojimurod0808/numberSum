let number = [1, 3, 5, 9];

function numberSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    title.textContent = "sum - all" + "  " + sum
}

numberSum(number)