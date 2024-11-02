import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee.model';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss'],
})
export class CoffeeListComponent implements OnInit {
  public coffeeList: Array<Coffee> = [];

  constructor(private coffeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeService
      .getCoffees()
      .subscribe((next) => (this.coffeeList = next));
  }

  getByType(type: string): Array<Coffee> {
    return this.coffeeList.filter((coffee) => coffee.tipo === type);
  }
}
