function verific(num) {

    if (typeof(num) == "number")
        console.log(num)

    if (num % 3 != 0 && num % 5 != 0)
        return (num);

    if (num % 3 == 0) {
        if (num % 5 == 0)
            console.log("FizzBuzz")
        else
            console.log("Fizz")
    }
    else
        console.log("Buzz")

}

verific(randNum(0, 100));

function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


console.log(isNaN(30))