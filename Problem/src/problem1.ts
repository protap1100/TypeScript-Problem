{
    function repeatString(str: string, times : number): string {
        const newArr : string[] = [];
        if(times <= 0 ){
            return  "";
        }else{
            for(let i = 0; i < times ; i++){
                newArr.push(str)
            } 
            return newArr.join(" ");
        }
    }
    
    console.log(repeatString("Name ", 4))
}