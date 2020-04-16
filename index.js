'use strict';

const root = this;

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
root.Observer = Observer;
