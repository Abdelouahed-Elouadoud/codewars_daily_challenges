function isIsogram(str){
    let mot=[...str.toLowerCase()];
    for (const element of mot){
        const tab2= mot.filter(ele => ele === element)
        if(tab2.length>1){return false}
    }
    return true
}

console.log(isIsogram("Hello")); //false
console.log(isIsogram("abcs")); //true
