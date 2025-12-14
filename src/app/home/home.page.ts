import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonicModule
  ]
})
export class HomePage {
  qtzQuantity: number = 0;
  usdQuantity: number = 0;

  constructor() {}
  get qtzToUsdQuantity(): number {
    return this.qtzQuantity / 8;
  }
}
