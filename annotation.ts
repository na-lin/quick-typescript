// Array
const colors: string[] = ["red", "blue"];

// class
class Car {}
let car: Car = new Car();

// object literal
const point: {
  x: number;
  y: number;
} = { x: 12, y: 2220 };

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// destructuring
const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date, weather);
};
