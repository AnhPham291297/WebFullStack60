/////////////////////////////////////// // Coding Challenge #1 /*

// Sử dụng 1 constructor function để tạo 1 hàm tên Car. Một chiếc oto có 2 property là: make và speed
// Tạo ra 1 method là 'accelerate' để tăng tốc độ của Car lên 10. Hiển thị tốc độ bằng lệnh console.
// Tạo ra 1 method là 'brake' để giảm tốc độ của Car đi 5. Hiển thị tốc độ bằng lệnh console.
// Tạo ra 2 đối tượng xe oto và gọi các method 'accelerate' và 'brake' nhiều lần trên mỗi đối tượng trên.
// Ví dụ:

// Xe 'BMW' đi với tốc độ 120KM/H
// Xe 'Mercedes' đi với tốc độ 95KM/H */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car("BMW", 120);
console.log(car1);
car1.accelerate();
car1.brake();

const car2 = new Car("Honda", 95);
console.log(car2);
car2.accelerate();
car2.brake();
