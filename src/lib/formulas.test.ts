import { findPresentValue } from './formulas';

test('adds 1 + 2 to equal 3', () => {
  expect(findPresentValue(121, 0.1, 2) - 100).toBeLessThan(Number.EPSILON);
});