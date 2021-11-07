class Vehicle {
    constructor(make, seats){
        this.make = make
        if(seats <= 0){
            this.seats = 1
        }
        else{
            this.seats = seats
        }
    }

    getInfo(){
        console.log(String(this.make) + " has " + String(this.seats) + " seats")
    }
}

class Track extends Vehicle{
    constructor(make, seats, max_load){
        super(make, seats)
        if (max_load<0){
            this.max_load = 0
        }
        else{
            this.max_load = max_load
        }   
    }

    getInfo(){
        console.log(String(this.make) + " has " + String(this.seats) + " seats and "+String(this.max_load) + " max load")
    }
}


var car = new Vehicle ('Mers', 4)

var cat = new Track ('Cat', 2, 1000)

cat.getInfo()
car.getInfo()