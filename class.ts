class Vehicle {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  drive(): void {
    console.log("Chugga");
  }

  public honk(): void {
    console.log("xxxx");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("vroom");
  }
}

const car = new Car(4, "red");
car.drive();
car.color;
