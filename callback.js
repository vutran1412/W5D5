class Clock {
  constructor() {
    
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    let today = new Date();
    let hrs = today.getHours();
    let mins = today.getMinutes(); 
    let secs =  today.getSeconds();
    [this.today, this.hrs, this.mins, this.secs] = 
    [today, hrs, mins, secs];
    // this._tick = this._tick.bind(this);
    setInterval(this._tick.bind(this),  1000);
    

  }

  printTime() {

    // Format the time in HH:MM:SS
    console.log( this.hrs + ":" + this.mins + ":" + this.secs);
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    if (this.secs === 59) {
      this.secs = 0;
      if (this.mins === 59) {
        this.hrs += 1;
        this.mins = 0;
      } else {
        this.mins += 1;
      } 
    } else {
      this.secs += 1;
    }
    this.printTime();
    
  }
}


const clock = new Clock();
        





