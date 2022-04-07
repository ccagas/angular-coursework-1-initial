import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  annuity: number = 0;
  interestRate: number = 0;
  period: number = 0;
  amount: number = 0;

  onCalculate() {

    this.amount = this.annuity * (((1 + (this.interestRate / 12)) ** (12 * this.period)) - 1) /
      (this.interestRate / 12) * (1 + (this.interestRate / 12));


    /* return 0 for undefined amount*/
    this.amount = isNaN(this.amount) ? 0 : this.amount;
  }
}
