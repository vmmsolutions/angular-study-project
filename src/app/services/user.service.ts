import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { DATAS, NUMBERS } from '../mockData/mockData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAll() {
    return DATAS;
  }

  getUsers(): Observable<any[]> {
    return of(NUMBERS).pipe(delay(2000))
  }
}
