class Rectangle {
    constructor(breadth,length){
        this.breadth = breadth;
        this.length = length;
    }

    getArea() {
        return this.length * this.breadth;
    }
    getPerimeter() {
        return 2*this.length + 2* this.breadth;
    }
}

var two = new Rectangle(2,4)
var five = new Rectangle(5,10)
console.log(two.area())
console.log(five.area())
console.log(two.perimeter())
console.log(five.perimeter())