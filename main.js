function sum() {
    let count = 0;

    return function (num) {
        return count += num;
    }
}

let counter = sum();

console.log(counter(3));
console.log(counter(5));
console.log(counter(228));