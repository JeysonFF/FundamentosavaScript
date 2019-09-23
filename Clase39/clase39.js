function factorial(n){
    if(!this.cache){
        this.cache ={};
    }else if (this.cache[n]){
        return this.cache[n];
    }
    if (n>1){
        this.cache[n] = n * factorial(n-1);
        return this.cache[n];
    }else if(n===1){
        return 1;
    }
    
   
}
console.log(factorial(7));
