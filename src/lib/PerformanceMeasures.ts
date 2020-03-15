import { FindMean, FindStandardDeviation } from './formulas';

// Functions to export
export function SharpeRatio(portfolioReturns: Array<number>, marketReturn: number): number {
  let meanPortfolioReturn: number = FindMean(portfolioReturns); // it is said portfolio, but it can be a single stock as well
  let meanMarketReturn: number = marketReturn;
  let sigmaPortfolioExcessReturn: number = FindStandardDeviation(portfolioReturns.map(portfolioReturn => portfolioReturn - meanMarketReturn));

  return (meanPortfolioReturn - meanPortfolioReturn)/ sigmaPortfolioExcessReturn;
}

// export function TreynorRatio(portfolioReturns: Array<number>, marketReturn: number): number {
//   let meanPortfolioReturn: number = FindMean(portfolioReturns); // it is said portfolio, but it can be a single stock as well
//   let meanMarketReturn: number = marketReturn;
//   let beta: number;
//   return (meanPortfolioReturn - meanPortfolioReturn)/ beta;
// }

// export function SortinoRatio(portfolioReturns: Array<number>, marketReturn: number): number {
//   let meanPortfolioReturn: number = FindMean(portfolioReturns); // it is said portfolio, but it can be a single stock as well
//   let meanMarketReturn: number = marketReturn;
//   let LPSD
//   return 0;
// }

// export function JensenAlpha(): number {
//   return 0;
// }
