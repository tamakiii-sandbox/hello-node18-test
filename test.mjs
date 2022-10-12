import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { MyStack } from './main.cjs';

describe('my test', () => {
  let stack = undefined;

  beforeEach(() => {
    stack = new MyStack;
  });

  it('true', () => {
    stack.count++;
    assert(true);
  })

  it('is object', () => {
    stack.count++;
    assert(stack.constructor.name == 'MyStack')
  })

  it('beforeEach', () => {
    stack.count++;
    assert(stack.count == 1)
  })
})
