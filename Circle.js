class Circle {
    constructor(radius){
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2
    }
    perimeter() {
        return 2 * Math.PI * this.radius
    }
}

var one = new Circle(1)
var two = new Circle(2)
var three = new Circle(3)

console.log(one.area())
console.log(one.perimeter())

console.log(two.area())
console.log(two.perimeter())

console.log(three.area())
console.log(three.perimeter())