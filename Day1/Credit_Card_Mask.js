function maskify(cc) {
    let str=String(cc);
    let len=str.length;
    let masked="";
    for(let i=0;i<len;i++){
        if(i<len-4){
            masked+="#";
        }else{
            masked+=str[i];
        };  
    }
    return masked;
}