import { 
  SharpeRatio,
  TreynorRatio,
  SortinoRatio,
  JensenAlpha,
} from './formulas';


// SharpeRatio,
// TreynorRatio,
// SortinoRatio,
// JensenAlpha

test('adds 1 + 2 to equal 3', () => {
  expect(SharpeRatio(121, 0.1, 2) - 100).toBeLessThan(Number.EPSILON);
});