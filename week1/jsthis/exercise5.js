const revealSecret = function () {
    return this.secret; // Addind this.
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " +result); // Adding + to result
  };
  
  const avi = {
    name: "Avi", // Addidng , after Avi
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis", // Addidng , after Narkis
    secret: "I dont have secrets because I'm zen like that."
  };
  
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);
  