import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../coffee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Coffee } from '../coffee.model';

const mockItems: Array<Coffee> = [
  {
    id: 1,
    nombre: 'Café Especial para tí',
    tipo: 'Blend',
    region: 'Angelópolis, Antioquia',
    sabor: 'Panela, Durazno, Caramelo',
    altura: 1920,
    imagen:
      'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-para-ti-colores-cafe-colombiano-f_1_720x.jpg',
  },
  {
    id: 2,
    nombre: 'Café Especial Navegante',
    tipo: 'Café de Origen',
    region: 'Guatapé, Antioquia',
    sabor: 'Cítrico, Naranja, Cacao',
    altura: 1800,
    imagen:
      'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png',
  },
  {
    id: 3,
    nombre: 'Café Especial El Prístino',
    tipo: 'Blend',
    region: 'Chinchiná, Caldas',
    sabor: 'Chocolate negro, Caramelo',
    altura: 1700,
    imagen:
      'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-pristino-1-cafe-colombiano-f_720x.png',
  },
];

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let coffeeService: CoffeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CoffeeListComponent],
      providers: [CoffeeService],
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    coffeeService = TestBed.inject(CoffeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCoffees from service', () => {
    const spy = spyOn(coffeeService, 'getCoffees').and.returnValue(
      of(mockItems)
    );
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should filter by type <origen>', () => {
    let type = 'Café de Origen';
    component.coffeeList = mockItems;
    let count = component.getByType(type).length;
    expect(count).toEqual(1);
  });

  it('should filter by type <blend>', () => {
    let type = 'Blend';
    component.coffeeList = mockItems;
    let count = component.getByType(type).length;
    expect(count).toEqual(2);
  });
});
