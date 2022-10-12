import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { MyStack } from './main.cjs';

describe('my test', () => {
  let stack = undefined;

  beforeEach(() => {
    stack = new MyStack;
  });

  it('true', () => {
    assert(true);
  })

  it('is object', () => {
    assert(stack.constructor.name == 'MyStack')
  })
})
