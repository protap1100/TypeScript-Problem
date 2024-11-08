{
  const findLargestNumber = (number: number[]): number => {
    let largestNumber: number = 0; // -infinity to handle infinity number;
    for (let i = 0; i < number.length; i++) {
      if (largestNumber < number[i]) {
        largestNumber = number[i];
      }
    }
    return largestNumber;
  };
  
  console.log(findLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 15]));
  
}