class User {
    constructor(name) {
        this.name = name;
        this.type = "Trial User"
    }


    // Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }

    // Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}


var anonDude = new User("Anonymous Dude");

anonDude.greet();
anonDude.status();

var anonLady = new User ("Anonymous Lady");
anonLady.greet();
anonDude.status();
