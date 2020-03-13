import React, {useState} from 'react';
import { findPresentValue } from '../lib/formulas';

export default function Valuation() {
  const [nominalValue, setNominalValue] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  return (
    <div className="App">
      {findPresentValue(nominalValue, interestRate, time)}
    </div>
  );
}