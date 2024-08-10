import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { CalculatorInput } from '../../model/calculatorInput.model';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-calculator-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator-form.component.html',
  styleUrl: './calculator-form.component.css',
})
export class CalculatorFormComponent {
  constructor(private investmentService: InvestmentService) {}

  calculatorData: CalculatorInput = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  public onSubmit() {
    this.investmentService.calculateInvestmentResults(this.calculatorData);
  }
}
