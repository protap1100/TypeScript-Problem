{
    const reverseArray = (rev : any[]) : any[]=>{
        let newArr : any[] = [];
        for(let i = rev.length -1 ; i > -1; i--){
            newArr.push(rev[i])
        } 
        return newArr
    }
    
    console.log(reverseArray(["apple", "banana", "cherry"]))
    console.log(reverseArray([10, 20, 30]))
}