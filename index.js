'use strict';

const root = this;
const assert = require('assert');

class Subject {
  constructor() {
    this.observers = [];
    this.state = 0;
  }

  notifyAllObservers() {
    this.observers.forEach(o => {
      let self = this;
      o.update();
      return this;
    });
    return this;
  }

  getState() { return this.state; }

  setState(state) {
    this.state = state;
    this.notifyAllObservers();
    return this;
  }

  attach(observer) {
    this.observers.push(observer);
    return this;
  }
}
root.Subject = Subject;

class Observer {
  constructor() {
    this.subject = new Subject();
    this.subject.attach(this);
  }

  update(fn=function () {}, ...args) {
    fn.apply(this, args);
    return this;
  }
}
let observer = new Observer();
// assert.ok(subject.attach(observer) instanceof Subject);
// assert.ok(observer.update((a, b) => a + b, 1, 2) instanceof Observer);

class BinaryObserver extends Observer {
  constructor(subject) {
    super(subject);
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log('Binary string: ', (this.subject.getState() >>> 0).toString(2));
  }
}

class OctalObserver extends Observer {
  constructor(subject) {
    super(subject);
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log('Octal string: ', (this.subject.getState()).toString(8));
  }
}

class HexaObserver extends Observer {
  constructor(subject) {
    super(subject);
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log('Hexa string: ', (this.subject.getState()).toString(16).toUpperCase());
  }
}

// let mainSubject = new Subject();

// new HexaObserver(mainSubject);
// new OctalObserver(mainSubject);
// new BinaryObserver(mainSubject);

// console.log('First state for: 15');
// mainSubject.setState(15);
// console.log('Second state for: 10');
// mainSubject.setState(10)
