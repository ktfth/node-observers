'use strict';

const lib = require('./');
const assert = require('assert');

describe('Subject', () => {
  it('should be the instance', () => {
    let subject = new lib.Subject();
    assert.ok(subject instanceof lib.Subject);
  });

  it('should have observers', () => {
    let subject = new lib.Subject();
    assert.deepEqual(subject.observers, []);
  });

  it('should have state', () => {
    let subject = new lib.Subject();
    assert.equal(subject.state, 0);
  });

  it('should have get state', () => {
    let subject = new lib.Subject();
    assert.equal(subject.getState(), 0);
  });

  it('should have set state', () => {
    let subject = new lib.Subject();
    assert.ok(subject.setState(1) instanceof lib.Subject);
    assert.equal(subject.getState(), 1);
  })
});

describe('Observer', () => {
  it('should be the instance', () => {
    let observer = new lib.Observer();
    assert.ok(observer instanceof lib.Observer);
  });

  it('should be the instance of Subject', () => {
    let subject = new lib.Subject();
    let observer = new lib.Observer();
    assert.ok(subject.attach(observer) instanceof lib.Subject);
  });

  it('should ', () => {
    let observer = new lib.Observer();
    assert.ok(observer.update((a, b) => a + b, 1, 2) instanceof lib.Observer);
  });
});
