import { Component, computed, input } from '@angular/core';
import type { AnnualData } from '../../model/annualData.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-result-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css',
})
export class ResultTableComponent {
  private investmentService: InvestmentService;

  constructor(investmentService: InvestmentService) {
    this.investmentService = investmentService;
  }

  result = computed(() => this.investmentService.resultData());
}
