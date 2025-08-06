function group(arr) {
    let arr_final = [];

    while (arr.length > 0) {
        let current = arr[0];
        let group = arr.filter(el => el === current);
        arr = arr.filter(el => el !== current);
        arr_final.push(group);
    }

    console.log(arr_final);
}

group([3, 2, 6, 2, 1, 3])