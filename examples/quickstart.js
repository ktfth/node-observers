'use strict';

const lib = require('../');

class BinaryObserver extends lib.Observer {
  constructor(subject) {
    super(subject);
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log('Binary string: ', (this.subject.getState() >>> 0).toString(2));
  }
}

class OctalObserver extends lib.Observer {
  constructor(subject) {
    super(subject);
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log('Octal string: ', (this.subject.getState()).toString(8));
  }
}

class HexaObserver extends lib.Observer {
  constructor(subject) {
    super(subject);
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log('Hexa string: ', (this.subject.getState()).toString(16).toUpperCase());
  }
}

let mainSubject = new lib.Subject();

new HexaObserver(mainSubject);
new OctalObserver(mainSubject);
new BinaryObserver(mainSubject);

console.log('First state for: 15');
mainSubject.setState(15);
console.log('Second state for: 10');
mainSubject.setState(10)
