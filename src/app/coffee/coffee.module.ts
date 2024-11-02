import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@NgModule({
  declarations: [CoffeeListComponent],
  imports: [CommonModule],
  exports: [CoffeeListComponent],
})
export class CoffeeModule {}
