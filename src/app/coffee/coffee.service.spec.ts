import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CoffeeService } from './coffee.service';
import { Coffee } from './coffee.model';

describe('CoffeeService', () => {
  let service: CoffeeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CoffeeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call endpoint and return empty list', () => {
    const mockData: Array<Coffee> = [];
    service.getCoffees().subscribe((data) => {
      expect(data).toEqual(mockData);
    });
    const req = httpTestingController.expectOne(
      'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });

  it('should call endpoint and return one object', () => {
    const mockData: Array<Coffee> = [
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
    ];
    service.getCoffees().subscribe((data) => {
      expect(data.at(0)).toEqual(mockData.at(0));
    });
    const req = httpTestingController.expectOne(
      'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });
});
