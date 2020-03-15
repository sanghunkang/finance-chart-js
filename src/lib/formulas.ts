function FindEffectiveRate(annualPercentageRate: number, frequency: number): number {
  return annualPercentageRate / frequency
}

// Elementary statistics
export function FindMean(xs: Array<number>): number {
  return xs.reduce((x1, x2) => x1 + x2) / xs.length;
}

export function FindVariance(xs: Array<number>): number {
  let mean: number = FindMean(xs);
  return xs.reduce((x1, x2) => x1 + (x2 - mean) ** 2) / xs.length;
}

export function FindStandardDeviation(xs: Array<number>): number {
  return FindVariance(xs) ** 0.5;
}





export function FindPresentValue(nominalValue: number, r: number, t: number): number {
  return nominalValue / ((1 + r) ** t)
}

export function FindFutureValue(nominalValue: number, r: number, t: number): number {
  return nominalValue / ((1 + r) ** t)
}


export function FindEffectiveAnnualRate(annualPercentageRate: number, frequency: number): number {
  return (1 + annualPercentageRate / frequency) ** frequency - 1

}

export function FindAnnualPercentageRate() {

}