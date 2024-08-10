import { Injectable, signal } from '@angular/core';
import type { CalculatorInput } from '../model/calculatorInput.model';
import type { AnnualData } from '../model/annualData.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultData = signal<AnnualData[] | undefined>(undefined);

  calculateInvestmentResults(data: CalculatorInput) {
    const annualData: AnnualData[] = [];
    let investmentValue = data.initialInvestment!;

    for (let i = 0; i < data.duration!; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue! * (data.expectedReturn! / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment!;
      const totalInterest =
        investmentValue -
        data.annualInvestment! * year -
        data.initialInvestment!;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment!,
        totalInterest: totalInterest,
        totalAmountInvested:
          data.initialInvestment! + data.annualInvestment! * year,
      });
    }
    console.log('calculate:', annualData);
    this.resultData.set(annualData);
  }
}
