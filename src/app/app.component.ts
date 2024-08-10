import { Component, signal } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { CalculatorFormComponent } from './component/calculator-form/calculator-form.component';
import { ResultTableComponent } from './component/result-table/result-table.component';
import type { CalculatorInput } from './model/calculatorInput.model';
import type { AnnualData } from './model/annualData.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, CalculatorFormComponent, ResultTableComponent],
})
export class AppComponent {
  // annualData = signal<AnnualData[] | undefined>(undefined);
  // public onCalculatorSubmit(calculatorInput: CalculatorInput) {
  //   this.annualData.set(calculateInvestmentResults(calculatorInput));
  //   console.log(this.annualData());
  // }
  // public isSomeInputNull(): boolean {
  //   console.log('check!', this.annualData);
  //   return Object.values(this.annualData).some(
  //     (x) => x === undefined || x === null
  //   );
  // }
}
