'use strict';

'use strict';

const lib = require('../');

class HexaObserver extends lib.Observer {
  constructor(subject) {
    super(subject);
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    process.stdout.write((this.subject.getState()).toString(16).toUpperCase());
  }
}

class Mediator {}

class MainMediator extends Mediator {
  constructor() {
    super();

    let firstChannelSubject = new lib.Subject();
    let secondChannelSubject = new lib.Subject();
    let thirdChannelSubject = new lib.Subject();

    new HexaObserver(firstChannelSubject);
    new HexaObserver(secondChannelSubject);
    new HexaObserver(thirdChannelSubject);

    firstChannelSubject.setState(Math.max(0, Math.round(Math.random()*255)));
    secondChannelSubject.setState(Math.max(0, Math.round(Math.random()*255)));
    thirdChannelSubject.setState(Math.max(0, Math.round(Math.random()*255)));
  }
}

new MainMediator();
