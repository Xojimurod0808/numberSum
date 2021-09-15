/*--------------------------------Mashq 1------------------------------------- */


let number = [1, 3, 5, 9];

function numberSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log("sum - all" + "  " + sum)
}

numberSum(number)

/*--------------------------------Mashq 2------------------------------------- */
let numbers = [3.02, -3.65, 5, -9];

function numberRound(num){
    let result = [];

    for(let number of num){
        if(number < 0){
            result.push(Math.round(number)* -1)
        }
        else{
            result.push(Math.round(number));
        }
    }
    return result;
}
console.log(numberRound(numbers))