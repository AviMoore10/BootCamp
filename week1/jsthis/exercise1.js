const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) { // Just added This.
        hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm no longer hungry"
  