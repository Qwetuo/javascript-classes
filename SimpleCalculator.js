class SimpleCalculator {
    constructor(value){
        this.value = value
    }
    add(n) {
        this.value = n+ this.value
        return this
        // return this.value = addition
    }
    subtract(n) {
        this.value = this.value - n
        return this
    }
    multiply(n) {
        this.value = n* this.value
        return this
    }
    divide(n) {
        this.value = this.value / n
        return this
    }
}

var test1 = new SimpleCalculator(5)

console.log(test1.add(10))
console.log(test1.add(12).multiply(2).divide(2))