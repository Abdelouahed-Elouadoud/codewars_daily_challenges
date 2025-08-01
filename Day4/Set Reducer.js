
function setReducer(input) {
    const countGroups = arr => {
        const result = [];
        let count = 1;

        for (let i = 1; i <= arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                count++;
            } else {
                result.push(count);
                count = 1;
            }
        }
    return result;
    };

    let current = input;
    while (current.length > 1) {
        current = countGroups(current);
    }
    return current[0];
    }

console.log(setReducer([1,1,1,3,2,1]));//2
