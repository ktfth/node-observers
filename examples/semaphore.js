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
          break;
        case 3:
          flag = 'RED';
          break;
        case 4:
          flag = 'GREEN';
          break;
      }
    }

    if (orientation === 'vertical') {
      switch(this.subject.getState()) {
        case 0:
          flag = 'RED';
          break;
        case 1:
          flag = 'RED';
          break;
        case 2:
          flag = 'GREEN';
          break;
        case 3:
          flag = 'YELLOW';
          break;
        case 4:
          flag = 'RED';
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

let args = process.argv.slice(2);
let mainSubject = new lib.Subject();

new SemaphoreHorizontalObserver(mainSubject);
new SemaphoreVerticalObserver(mainSubject);

mainSubject.setState(args.length ? parseInt(args[0], 10) : 0);
