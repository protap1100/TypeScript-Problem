{
  // Sample Input:
  // new Car("Toyota", "Corolla", 2020);
  // Sample Output:
  // "Your car model is:  2020 Toyota Corolla"

  class Car {
    name: string;
    brand: string;
    publishedYear: number;
    constructor(name: string, brand: string, publishedYear: number) {
      this.name = name;
      this.brand = brand;
      this.publishedYear = publishedYear;
    }

    displayInfo(): string {
      return `Your Car Model Is ${this.name} ${this.brand} ${this.publishedYear}`;
    }
  }

  const newCar = new Car("Toyota", "Corolla", 2020);
  console.log(newCar.displayInfo());
}
