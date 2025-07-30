function digitalRoot(n) {
    if (n<0){console.log("entrer un nombre positif")}
    else{
        while(n.toString().length!==1){
            let sum=0;
            let Nb=n.toString().split("");
            for(let i=0;i<Nb.length;i++){
                sum+=Number(Nb[i]);
            }
            n=sum;
        }
        return n;
    }
}