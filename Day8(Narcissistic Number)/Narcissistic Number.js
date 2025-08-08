function narcissistic(value) {
    if (value < 0) return false;

    const digits=String(value).split('').map(Number);

    const sum = digits.reduce((acc, el) => acc + el ** digits.length, 0);

    return sum === value;
}

console.log(narcissistic(153));