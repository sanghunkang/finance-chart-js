import {
  // Elementary statistics
  FindMean,
  FindVariance,
  FindStandardDeviation,

  FindPresentValue,
} from './formulas';

const xs: Array<number> = [1, 2, 3, 4, 5];


test('adds 1 + 2 to equal 3', () => {
  expect(FindPresentValue(121, 0.1, 2) - 100).toBeLessThan(Number.EPSILON);


  expect(FindMean(xs) - 3).toBeLessThan(Number.EPSILON);
  expect(FindVariance(xs) - 2).toBeLessThan(Number.EPSILON);
  expect(FindStandardDeviation(xs) - 2 ** 0.5).toBeLessThan(Number.EPSILON);
});