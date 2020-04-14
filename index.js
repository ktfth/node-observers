'use strict';

const assert = require('assert');

class Subject {
  constructor() {
    this.observers = [];
    this.state = 0;
  }

  notifyAllObservers() {
    this.observers.forEach(o => o.update());
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

let subject = new Subject();
assert.ok(subject instanceof Subject);
assert.deepEqual(subject.observers, []);
assert.equal(subject.state, 0);
assert.equal(subject.getState(), 0);
assert.ok(subject.setState(1) instanceof Subject);
class Observer {
  constructor() {
    this.subject = new Subject();
  }

  update(fn=function () {}, ...args) {
    fn.apply(this, args);
    return this;
  }
}
let observer = new Observer();
assert.ok(subject.attach(observer) instanceof Subject);
assert.ok(observer.update((a, b) => a + b, 1, 2) instanceof Observer);

class BinaryObserver extends Observer {
  constructor(subject) {
    super();
    this.subject = subject;
  }

  update() {
    console.log('Binary string: ', (this.subject.getState() >>> 0).toString(2));
  }
}

let mainSubject = new Subject();

new BinaryObserver(mainSubject);

subject.setState(15);
