var number = function(busStops){
    let peopleOn=0;
    let peopleOff=0;
    busStops.forEach(element => {
        peopleOn+=element[0];
        peopleOff+=element[1];
    });
    // console.log(`total people on : ${peopleOn}`);
    // console.log(`total people off : ${peopleOff}`);
    return peopleOn-peopleOff;
}

const peopleInTheBus=number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
console.log(peopleInTheBus);