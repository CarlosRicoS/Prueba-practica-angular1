import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from './coffee.model';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private readonly webServiceUrl: string =
    'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json';

  constructor(private httpClient: HttpClient) {}

  public getCoffees(): Observable<Array<Coffee>> {
    return this.httpClient.get<Array<Coffee>>(this.webServiceUrl);
  }
}
