{
    const filterEvenNumbers = (num: number[]): number[] => {
        let evenNumber : number[] = [];
        for(let i = 0; i < num.length; i++){
            if(num[i] % 2 === 0){
                evenNumber.push(num[i])
            }
        } 
        return evenNumber;
    };
    

    console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))
}
