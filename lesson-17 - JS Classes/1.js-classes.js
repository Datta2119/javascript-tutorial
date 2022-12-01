class Car {
    constructor(name, color, topSpeed, currentSpeed){
        // Properties
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0
    }

    zeroToSixty() {
        setTimeout(() => {
            console.log("PHEW!! That was fast!")
            this.currentSpeed = 60
            console.log(this.currentSpeed)
        })
    }

    drive() {
        // console.log("Just drove 2 miles!!")
        this.currentSpeed += 10
        console.log(`Driving speed is ${this.currentSpeed} mph`)
    }

    brake() {
        // console.log("Don't do hard brake dude!!")
        this.currentSpeed -= 10
        console.log(`After break speed is ${this.currentSpeed} mph`)
    }

    stop() {
        // console.log("car is stopped")
        this.currentSpeed = 0
        console.log(`After stopping car speed is ${this.currentSpeed}`)
    }
}

const ferrai = new Car("Toyota", "White", 130)


// car.drive()
// ferrai.brake()
// car.drive()

// car.zeroToSixty()

const porsche = new Car("Porsche", "Yellow", 250)
// console.log(porsche)

porsche.drive()
porsche.drive()
porsche.drive()
porsche.drive()
porsche.drive()
porsche.drive()
porsche.drive()
porsche.drive()
porsche.drive()
porsche.drive()

porsche.brake()

porsche.stop()
