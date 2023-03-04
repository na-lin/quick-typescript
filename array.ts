// 2D array
const carsByMake: string[][] = [];

// why array with ts
const cars: string[] = [];
cars.map((car: string): string => {
  return car.toUpperCase();
});

// tuple
type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
