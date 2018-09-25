class User {
    constructor(name){
      this.name = name;
      this.type = "Trial User"
    }
    //Method 1
    greet(){
      console.log('Welcome back,' + this.name);
    }
    //Method 2
    status(){
      console.log('Current status: ' + this.type);
    }
  }

  // Extends
  class Trialuser extends User {
      trailEnding(){
          console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
      }
  }

  // Instance of User class
  var anonDude = new User("Anonymous");
  anonDude.greet();
  anonDude.status();

  //Instance of TrialUser class
  var trialUser = new TrialUser("Paul");
  trialUser.greet();
  trialUser.trailEnding();
  trialUser.status();

  class BannedUser extends User {
      userBanned(){
          console.log('Due to offensive content your account has been banned.')
      }
  }

  anonDude.userBanned();