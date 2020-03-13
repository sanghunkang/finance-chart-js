function findPresentValue(nominalValue: number, r: number, t: number): number {
  return nominalValue / ((1 + r) ** t)
}

function findFutureValue(nominalValue: number, r: number, t: number): number {
  return nominalValue / ((1 + r) ** t)
}

function effectiveRate(annualPercentageRate: number, frequency: number): number {
  return annualPercentageRate / frequency
}

function findEffectiveAnnualRate(annualPercentageRate: number, frequency: number) {
  return (1 + annualPercentageRate / frequency) ** frequency - 1

}

function findAnnualPercentageRate() {

}



export {
  findPresentValue,
  findEffectiveAnnualRate,
  findAnnualPercentageRate,
};