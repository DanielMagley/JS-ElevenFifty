class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
    // console.log(userOne, first);
    console.log(userOne.f);
    console.log(userOne.l);
    console.log(userOne);

class User {
    constructor(number, name, points) {
        this.playerNum = number;
        this.playerName = name;
        this.playerAvg = points;
    }
}
var newPlayer = new User("#35", "Moon", "23.5");
    console.log(newPlayer.playerNum);
    console.log(newPlayer.playerName);
    console.log(newPlayer.playerAvg);
