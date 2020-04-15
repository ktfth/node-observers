'use strict';

const lib = require('../');

class SemaphoreObserver extends lib.Observer {
  constructor(subject) {
    super(subject);
    this.subject = subject;
    this.subject.attach(this);
  }

  getFlag(orientation) {
    let flag = '';

    if (orientation === 'horizontal') {
      switch(this.subject.getState()) {
        case 0:
        flag = 'GREEN';
        break;
        case 1:
        flag = 'YELLOW';
        break;
        case 2:
        flag = 'RED';
      }
    }

    if (orientation === 'vertical') {
      switch(this.subject.getState()) {
        case 0:
        flag = 'RED';
        break;
        case 1:
        flag = 'YELLOW';
        break;
        case 2:
        flag = 'GREEN';
      }
    }

    return flag;
  }
}

class SemaphoreHorizontalObserver extends SemaphoreObserver {
  update() {
    let flag = this.getFlag('horizontal');
    console.log('Horizontal Semaphore is: ', flag);
  }
}

class SemaphoreVerticalObserver extends SemaphoreObserver {
  update() {
    let flag = this.getFlag('vertical');
    console.log('Vertical Semaphore is: ', flag);
  }
}

let mainSubject = new lib.Subject();

new SemaphoreHorizontalObserver(mainSubject);
new SemaphoreVerticalObserver(mainSubject);

mainSubject.setState(2);
